<template>
  <div class="budget-table">
    <!-- Table Controls -->
    <div class="table-controls">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar orçamentos..."
          class="search-input"
        />
      </div>
    </div>

    <!-- Table -->
    <div class="table-wrapper">
      <table class="table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Mensagem</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="budget in filteredBudgets" :key="budget.id">
            <td data-label="Data">
              <div class="cell-content">
                <i class="fas fa-calendar"></i>
                {{ formatDate(budget.created_at) }}
              </div>
            </td>
            <td data-label="Nome">
              <div class="cell-content">
                <i class="fas fa-user"></i>
                {{ budget.name }}
              </div>
            </td>
            <td data-label="Email">
              <div class="cell-content">
                <i class="fas fa-envelope"></i>
                <a :href="'mailto:' + budget.email" class="email-link">
                  {{ budget.email }}
                </a>
              </div>
            </td>
            <td data-label="Mensagem">
              <div class="message-cell">
                <button @click="selectedMessage = budget.message" class="message-preview">
                  {{ budget.message.substring(0, 50) }}...
                </button>
              </div>
            </td>
            <td data-label="Status">
              <div class="status-cell">
                <span :class="['status-badge', budget.status]">
                  {{ statusLabels[budget.status] }}
                </span>
              </div>
            </td>
            <td data-label="Ações">
              <div class="actions-cell">
                <select
                  v-model="budget.status"
                  @change="updateBudgetStatus(budget)"
                  class="status-select"
                >
                  <option value="pending">Pendente</option>
                  <option value="contacted">Contactado</option>
                  <option value="completed">Concluído</option>
                </select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Message Modal -->
    <div v-if="selectedMessage" class="modal" @click="selectedMessage = null">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="selectedMessage = null">
          <i class="fas fa-times"></i>
        </button>
        <h3 class="modal-title">Mensagem do Cliente</h3>
        <p class="modal-message">{{ selectedMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BudgetTable",

    props: {
      budgets: {
        type: Array,
        required: true,
      },
    },

    emits: ["update-status"],

    data() {
      return {
        searchQuery: "",
        selectedMessage: null,
        statusLabels: {
          pending: "Pendente",
          contacted: "Contactado",
          completed: "Concluído",
        },
      };
    },

    computed: {
      filteredBudgets() {
        if (!this.searchQuery) return this.budgets;

        const query = this.searchQuery.toLowerCase();
        return this.budgets.filter(
          (budget) =>
            budget.name.toLowerCase().includes(query) ||
            budget.email.toLowerCase().includes(query) ||
            budget.message.toLowerCase().includes(query)
        );
      },
    },

    methods: {
      formatDate(dateString) {
        return new Date(dateString).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
      },

      async updateBudgetStatus(budget) {
        try {
          this.$emit("update-status", {
            id: budget.id,
            status: budget.status,
          });
        } catch (error) {
          console.error("Erro ao atualizar status:", error);
          // Aqui você pode adicionar uma notificação de erro se desejar
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .budget-table {
    position: relative;
    margin: 2rem auto;
    max-width: 100%;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .table-controls {
    padding: 1.5rem;
    border-bottom: 1px solid $border-color;
  }

  .search-box {
    position: relative;
    max-width: 400px;

    i {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: $text-muted;
    }
  }

  .search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid $border-color;
    border-radius: 0.5rem;
    font-size: $font-size-base;
    transition: $transition-base;

    &:focus {
      outline: none;
      border-color: $primary;
      box-shadow: 0 0 0 3px rgba($primary, 0.1);
    }
  }

  .table-wrapper {
    overflow-x: auto;
    padding: 1rem;
  }

  .table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;

    th {
      padding: 1rem;
      text-align: left;
      font-weight: 600;
      color: $text-secondary;
      border-bottom: 2px solid $border-color;
    }

    td {
      padding: 1rem;
      border-bottom: 1px solid $border-color;
      vertical-align: middle;
    }

    tr:last-child td {
      border-bottom: none;
    }
  }

  .cell-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    i {
      color: $text-muted;
      width: 1rem;
    }
  }

  .email-link {
    color: $primary;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  .message-preview {
    color: $text-primary;
    text-align: left;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    transition: $transition-base;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      color: $primary;
    }
  }

  .status-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: $font-size-sm;
    font-weight: 500;

    &.pending {
      background-color: rgba($warning, 0.1);
      color: darken($warning, 20%);
    }

    &.contacted {
      background-color: rgba($info, 0.1);
      color: darken($info, 20%);
    }

    &.completed {
      background-color: rgba($success, 0.1);
      color: darken($success, 20%);
    }
  }

  .actions-cell {
    .status-select {
      padding: 0.5rem 2rem 0.5rem 1rem;
      border: 1px solid $border-color;
      border-radius: 0.5rem;
      font-size: $font-size-sm;
      background-color: white;
      cursor: pointer;
      transition: $transition-base;
      width: 100%;
      max-width: 200px;

      &:focus {
        outline: none;
        border-color: $primary;
        box-shadow: 0 0 0 3px rgba($primary, 0.1);
      }

      &:hover {
        border-color: $primary;
      }
    }
  }

  // Modal styles
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(black, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
  }

  .modal-content {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    max-width: 600px;
    width: 90%;
    position: relative;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    padding: 0.5rem;
    background: none;
    border: none;
    color: $text-muted;
    cursor: pointer;
    transition: $transition-base;

    &:hover {
      color: $text-primary;
    }
  }

  .modal-title {
    font-size: $font-size-xl;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: 1.5rem;
  }

  .modal-message {
    color: $text-secondary;
    line-height: 1.7;
    white-space: pre-wrap;
  }

  // Responsive styles
  @media (max-width: $breakpoint-md) {
    .table {
      display: block;

      thead {
        display: none;
      }

      tbody {
        display: block;
      }

      tr {
        display: block;
        padding: 1.5rem;
        border-bottom: 1px solid $border-color;

        &:last-child {
          border-bottom: none;
        }
      }

      td {
        display: flex;
        padding: 0.75rem 0;
        border: none;

        &:before {
          content: attr(data-label);
          font-weight: 600;
          width: 120px;
          min-width: 120px;
          color: $text-secondary;
        }
      }
    }

    .message-preview {
      max-width: 100%;
    }
  }
</style>
