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

        <button @click="sortOrder = sortOrder === 'asc' ? 'desc' : 'asc'" class="sort-button">
          <i :class="sortOrder === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down'"></i>
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
            <td data-label="Ações">
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
        statusFilter: "",
        sortBy: "created_at",
        sortOrder: "desc",
        selectedMessage: null,
      };
    },

    computed: {
      filteredAndSortedBudgets() {
        let result = [...this.budgets];

        // Aplicar filtro de busca
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          result = result.filter(
            (budget) =>
              budget.name.toLowerCase().includes(query) ||
              budget.email.toLowerCase().includes(query) ||
              budget.message.toLowerCase().includes(query)
          );
        }

        // Aplicar filtro de status
        if (this.statusFilter) {
          result = result.filter((budget) => budget.status === this.statusFilter);
        }

        // Aplicar ordenação
        result.sort((a, b) => {
          let comparison = 0;
          if (this.sortBy === "created_at") {
            comparison = new Date(b.created_at) - new Date(a.created_at);
          } else {
            comparison = String(a[this.sortBy]).localeCompare(String(b[this.sortBy]));
          }
          return this.sortOrder === "asc" ? comparison : -comparison;
        });

        return result;
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

      updateStatus(budget) {
        this.$emit("update-status", budget);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .budget-table {
    position: relative;
    margin: 0 auto;
    max-width: 100%;
    overflow-x: hidden;
  }

  .table-controls {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid $border-color;
    flex-wrap: wrap;

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      align-items: stretch;
      gap: 0.75rem;
    }
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
    flex-wrap: wrap;

    @media (max-width: $breakpoint-md) {
      width: 100%;
      justify-content: space-between;
    }
  }

  .filter-select {
    padding: 0.5rem 2rem 0.5rem 1rem;
    border: 1px solid $border-color;
    border-radius: 0.375rem;
    font-size: $font-size-sm;
    background-color: white;
    cursor: pointer;
    transition: $transition-base;
    min-width: 120px;

    @media (max-width: $breakpoint-md) {
      flex: 1;
      min-width: 0;
    }

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

    @media (max-width: $breakpoint-md) {
      display: block;

      thead {
        display: none;
      }

      tbody {
        display: block;
      }

      tr {
        display: block;
        padding: 1rem;
        border-bottom: 1px solid $border-color;
        background-color: white;
        margin-bottom: 0.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      td {
        display: flex;
        padding: 0.5rem 0;
        border: none;
        align-items: center;

        &:before {
          content: attr(data-label);
          font-weight: 600;
          width: 120px;
          min-width: 120px;
          color: $text-secondary;
        }
      }
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
    max-width: none;
    width: 100%;

    @media (max-width: $breakpoint-md) {
      .message-preview {
        width: 100%;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
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
    @media (max-width: $breakpoint-md) {
      margin: 0.5rem 0;
    }
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
    @media (max-width: $breakpoint-md) {
      .status-select {
        width: 100%;
      }
    }
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
