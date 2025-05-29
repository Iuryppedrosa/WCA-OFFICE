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

      <div class="filters">
        <select v-model="statusFilter" class="filter-select">
          <option value="">Todos os status</option>
          <option value="pending">Pendente</option>
          <option value="contacted">Contactado</option>
          <option value="completed">Concluído</option>
        </select>

        <select v-model="sortBy" class="filter-select">
          <option value="created_at">Data</option>
          <option value="name">Nome</option>
          <option value="status">Status</option>
        </select>

        <button
          @click="sortOrder = sortOrder === 'asc' ? 'desc' : 'asc'"
          class="sort-button"
        >
          <i
            :class="sortOrder === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down'"
          ></i>
        </button>
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
          <tr v-for="budget in filteredAndSortedBudgets" :key="budget.id">
            <td>
              <div class="cell-content">
                <i class="fas fa-calendar"></i>
                {{ formatDate(budget.created_at) }}
              </div>
            </td>
            <td>
              <div class="cell-content">
                <i class="fas fa-user"></i>
                {{ budget.name }}
              </div>
            </td>
            <td>
              <div class="cell-content">
                <i class="fas fa-envelope"></i>
                <a :href="'mailto:' + budget.email" class="email-link">
                  {{ budget.email }}
                </a>
              </div>
            </td>
            <td>
              <div class="message-cell">
                <button
                  @click="selectedMessage = budget.message"
                  class="message-preview"
                >
                  {{ budget.message.substring(0, 50) }}...
                </button>
              </div>
            </td>
            <td>
              <div class="status-cell">
                <span :class="['status-badge', budget.status]">
                  {{
                    {
                      pending: "Pendente",
                      contacted: "Contactado",
                      completed: "Concluído",
                    }[budget.status]
                  }}
                </span>
              </div>
            </td>
            <td>
              <div class="actions-cell">
                <select
                  v-model="budget.status"
                  @change="updateStatus(budget)"
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
import { ref, computed } from "vue";

export default {
  name: "BudgetTable",

  props: {
    budgets: {
      type: Array,
      required: true,
    },
  },

  emits: ["update-status"],

  setup(props, { emit }) {
    const searchQuery = ref("");
    const statusFilter = ref("");
    const sortBy = ref("created_at");
    const sortOrder = ref("desc");
    const selectedMessage = ref(null);

    const filteredAndSortedBudgets = computed(() => {
      let result = [...props.budgets];

      // Aplicar filtro de busca
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        result = result.filter(
          (budget) =>
            budget.name.toLowerCase().includes(query) ||
            budget.email.toLowerCase().includes(query) ||
            budget.message.toLowerCase().includes(query)
        );
      }

      // Aplicar filtro de status
      if (statusFilter.value) {
        result = result.filter(
          (budget) => budget.status === statusFilter.value
        );
      }

      // Aplicar ordenação
      result.sort((a, b) => {
        let comparison = 0;
        if (sortBy.value === "created_at") {
          comparison = new Date(b.created_at) - new Date(a.created_at);
        } else {
          comparison = String(a[sortBy.value]).localeCompare(
            String(b[sortBy.value])
          );
        }
        return sortOrder.value === "asc" ? comparison : -comparison;
      });

      return result;
    });

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };

    const updateStatus = (budget) => {
      emit("update-status", budget);
    };

    return {
      searchQuery,
      statusFilter,
      sortBy,
      sortOrder,
      selectedMessage,
      filteredAndSortedBudgets,
      formatDate,
      updateStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
.budget-table {
  position: relative;
}

.table-controls {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid $border-color;
}

.search-box {
  position: relative;
  flex: 1;

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
  padding: 0.625rem 1rem 0.625rem 2.5rem;
  border: 1px solid $border-color;
  border-radius: 0.375rem;
  font-size: $font-size-sm;
  transition: $transition-base;

  &:focus {
    outline: none;
    border-color: $primary;
    box-shadow: 0 0 0 2px rgba($primary, 0.1);
  }
}

.filters {
  display: flex;
  gap: 0.5rem;
}

.filter-select {
  padding: 0.5rem 2rem 0.5rem 1rem;
  border: 1px solid $border-color;
  border-radius: 0.375rem;
  font-size: $font-size-sm;
  background-color: white;
  cursor: pointer;
  transition: $transition-base;

  &:focus {
    outline: none;
    border-color: $primary;
  }
}

.sort-button {
  padding: 0.5rem;
  border: 1px solid $border-color;
  border-radius: 0.375rem;
  background-color: white;
  color: $text-secondary;
  transition: $transition-base;

  &:hover {
    background-color: $gray-50;
    border-color: $gray-300;
  }
}

.table-wrapper {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: $font-size-sm;

  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: $text-secondary;
    background-color: $gray-50;
    border-bottom: 1px solid $border-color;
  }

  td {
    padding: 1rem;
    border-bottom: 1px solid $border-color;
    vertical-align: middle;
  }
}

.cell-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: $text-muted;
    width: 1rem;
  }
}

.email-link {
  color: $primary;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.message-cell {
  max-width: 300px;
}

.message-preview {
  color: $text-primary;
  text-align: left;
  cursor: pointer;
  transition: $transition-base;

  &:hover {
    color: $primary;
  }
}

.status-cell {
  white-space: nowrap;
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: $font-size-xs;
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
  white-space: nowrap;
}

.status-select {
  padding: 0.375rem 2rem 0.375rem 0.75rem;
  border: 1px solid $border-color;
  border-radius: 0.375rem;
  font-size: $font-size-sm;
  background-color: white;
  cursor: pointer;
  transition: $transition-base;

  &:focus {
    outline: none;
    border-color: $primary;
  }
}

// Modal
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
  border-radius: 0.5rem;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  color: $text-muted;
  transition: $transition-base;

  &:hover {
    color: $text-primary;
  }
}

.modal-title {
  font-size: $font-size-lg;
  font-weight: 600;
  color: $text-primary;
  margin-bottom: 1rem;
}

.modal-message {
  color: $text-secondary;
  line-height: 1.6;
  white-space: pre-wrap;
}

@media (max-width: $breakpoint-lg) {
  .table-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .message-cell {
    max-width: 200px;
  }
}

@media (max-width: $breakpoint-md) {
  .table {
    font-size: $font-size-xs;

    th,
    td {
      padding: 0.75rem;
    }
  }

  .message-cell {
    max-width: 150px;
  }
}

@media (max-width: $breakpoint-sm) {
  .table-wrapper {
    margin: 0 -1rem;
  }

  .message-cell {
    max-width: 100px;
  }
}
</style>
