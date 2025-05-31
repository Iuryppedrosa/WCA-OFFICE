<template>
  <div class="admin-view">
    <!-- Login Form -->
    <login-form
      v-if="!isAuthenticated"
      :loading="loading"
      :error="loginError"
      @submit="handleLogin"
    />

    <!-- Admin Dashboard -->
    <div v-else class="dashboard">
      <admin-header @logout="handleLogout" />

      <main class="dashboard-content">
        <div class="budget-panel">
          <div class="panel-header">
            <h2 class="panel-title">
              <i class="fas fa-file-invoice"></i>
              Orçamentos Recebidos
            </h2>
            <div class="panel-actions">
              <button class="refresh-button" @click="loadBudgets" :disabled="loading">
                <i class="fas fa-sync-alt"></i>
                Atualizar
              </button>
            </div>
          </div>

          <!-- Loading State -->
          <loading-state v-if="loading" message="Carregando orçamentos..." />

          <!-- Error State -->
          <error-state v-else-if="error" :message="error" @retry="loadBudgets" />

          <!-- Data Table -->
          <budget-table v-else :budgets="budgets" @update-status="updateBudgetStatus" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import { supabase } from "@/lib/supabase";
  import LoginForm from "@/components/admin/LoginForm.vue";
  import AdminHeader from "@/components/admin/AdminHeader.vue";
  import LoadingState from "@/components/admin/LoadingState.vue";
  import ErrorState from "@/components/admin/ErrorState.vue";
  import BudgetTable from "@/components/admin/BudgetTable.vue";

  const ADMIN_CREDENTIALS = {
    email: "admin@wcaoffice.com.br",
    password: "wca123",
  };

  export default {
    name: "AdminView",
    components: {
      LoginForm,
      AdminHeader,
      LoadingState,
      ErrorState,
      BudgetTable,
    },
    data() {
      return {
        isAuthenticated: false,
        loading: false,
        loginError: "",
        budgets: [],
        error: null,
      };
    },
    mounted() {
      this.handleAuth();
    },
    methods: {
      handleAuth() {
        const auth = localStorage.getItem("wca_admin_auth");
        if (auth === "true") {
          this.isAuthenticated = true;
          this.loadBudgets();
        }
      },
      async handleLogin(credentials) {
        try {
          this.loading = true;
          this.loginError = "";

          if (
            credentials.email === ADMIN_CREDENTIALS.email &&
            credentials.password === ADMIN_CREDENTIALS.password
          ) {
            this.isAuthenticated = true;
            localStorage.setItem("wca_admin_auth", "true");
            await this.loadBudgets();
          } else {
            this.loginError = "Email ou senha incorretos";
          }
        } catch (err) {
          console.error("Error logging in:", err);
          this.loginError = "Erro ao fazer login. Por favor, tente novamente.";
        } finally {
          this.loading = false;
        }
      },
      handleLogout() {
        this.isAuthenticated = false;
        localStorage.removeItem("wca_admin_auth");
        this.budgets = [];
      },
      async loadBudgets() {
        try {
          this.loading = true;
          this.error = null;

          const { data, error: supabaseError } = await supabase
            .from("budgets")
            .select("*")
            .order("created_at", { ascending: false });

          if (supabaseError) throw supabaseError;

          this.budgets = data;
        } catch (err) {
          console.error("Error loading budgets:", err);
          this.error = "Erro ao carregar os orçamentos. Por favor, tente novamente.";
        } finally {
          this.loading = false;
        }
      },
      async updateBudgetStatus(budget) {
        try {
          this.loading = true;
          const { error: updateError } = await supabase
            .from("budgets")
            .update({ status: budget.status })
            .eq("id", budget.id);

          if (updateError) {
            console.error("Error updating budget status:", updateError);
            this.error = "Erro ao atualizar o status. Por favor, tente novamente.";
            throw updateError;
          }

          await this.loadBudgets();
        } catch (err) {
          console.error("Error updating budget status:", err);
          const originalBudget = this.budgets.value.find((b) => b.id === budget.id);
          if (originalBudget) {
            budget.status = originalBudget.status;
          }
        } finally {
          this.loading = false;
        }
      },
    },
  };

  // // Credenciais fixas para teste (em produção, usar variáveis de ambiente)
  // const ADMIN_CREDENTIALS = {
  //   email: "admin@wcaoffice.com.br",
  //   password: "wca123",
  // };

  // export default {
  //   name: "AdminView",
  //   components: {
  //     LoginForm,
  //     AdminHeader,
  //     LoadingState,
  //     ErrorState,
  //     BudgetTable,
  //   },

  //   setup() {
  //     const isAuthenticated = ref(false);
  //     const loginError = ref("");
  //     const budgets = ref([]);
  //     const loading = ref(false);
  //     const error = ref(null);

  //     // Verificar se já está autenticado
  //     onMounted(() => {
  //       const auth = localStorage.getItem("wca_admin_auth");
  //       if (auth === "true") {
  //         isAuthenticated.value = true;
  //         loadBudgets();
  //       }
  //     });

  //     const handleLogin = async (credentials) => {
  //       try {
  //         loading.value = true;
  //         loginError.value = "";

  //         if (
  //           credentials.email === ADMIN_CREDENTIALS.email &&
  //           credentials.password === ADMIN_CREDENTIALS.password
  //         ) {
  //           isAuthenticated.value = true;
  //           localStorage.setItem("wca_admin_auth", "true");
  //           await loadBudgets();
  //         } else {
  //           loginError.value = "Email ou senha incorretos";
  //         }
  //       } catch (err) {
  //         console.error("Error logging in:", err);
  //         loginError.value = "Erro ao fazer login. Por favor, tente novamente.";
  //       } finally {
  //         loading.value = false;
  //       }
  //     };

  //     const handleLogout = () => {
  //       isAuthenticated.value = false;
  //       localStorage.removeItem("wca_admin_auth");
  //       budgets.value = [];
  //     };

  //     const loadBudgets = async () => {
  //       try {
  //         loading.value = true;
  //         error.value = null;

  //         const { data, error: supabaseError } = await supabase
  //           .from("budgets")
  //           .select("*")
  //           .order("created_at", { ascending: false });

  //         if (supabaseError) throw supabaseError;

  //         budgets.value = data;
  //       } catch (err) {
  //         console.error("Error loading budgets:", err);
  //         error.value = "Erro ao carregar os orçamentos. Por favor, tente novamente.";
  //       } finally {
  //         loading.value = false;
  //       }
  //     };

  //     const updateBudgetStatus = async (budget) => {
  //       try {
  //         loading.value = true;
  //         const { error: updateError } = await supabase
  //           .from("budgets")
  //           .update({ status: budget.status })
  //           .eq("id", budget.id);

  //         if (updateError) {
  //           console.error("Error updating budget status:", updateError);
  //           error.value = "Erro ao atualizar o status. Por favor, tente novamente.";
  //           throw updateError;
  //         }

  //         await loadBudgets();
  //       } catch (err) {
  //         console.error("Error updating budget status:", err);
  //         const originalBudget = budgets.value.find((b) => b.id === budget.id);
  //         if (originalBudget) {
  //           budget.status = originalBudget.status;
  //         }
  //       } finally {
  //         loading.value = false;
  //       }
  //     };

  //     return {
  //       isAuthenticated,
  //       loginError,
  //       budgets,
  //       loading,
  //       error,
  //       handleLogin,
  //       handleLogout,
  //       loadBudgets,
  //       updateBudgetStatus,
  //     };
  //   },
  //};
</script>

<style lang="scss" scoped>
  .admin-view {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f3ff, #eff6ff);
  }

  .dashboard {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .dashboard-content {
    flex: 1;
    padding: 2rem;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
  }

  .budget-panel {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: $shadow-lg;
    overflow: hidden;
  }

  .panel-header {
    padding: 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .panel-title {
    font-size: $font-size-xl;
    font-weight: 600;
    color: $text-primary;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    i {
      color: $primary;
    }
  }

  .panel-actions {
    display: flex;
    gap: 1rem;
  }

  .refresh-button {
    @include flex-center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    color: $text-primary;
    background-color: #f9fafb;
    transition: $transition-base;

    &:hover:not(:disabled) {
      background-color: #f3f4f6;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    i {
      font-size: $font-size-base;
    }
  }
</style>
