<template>
  <header class="admin-header">
    <div class="header-container">
      <div class="header-left">
        <img src="@/assets/img/team-1-800x800.jpg" alt="WCA Office Logo" class="logo" />
        <h1 class="title">Painel Administrativo</h1>
      </div>

      <div class="header-right">
        <div class="user-info">
          <span class="user-name">
            <i class="fas fa-user-circle"></i>
            Administrador
          </span>
        </div>

        <button @click="$emit('logout')" class="logout-button">
          <i class="fas fa-sign-out-alt"></i>
          Sair
        </button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "AdminHeader",
    emits: ["logout"],
  };
</script>

<style lang="scss" scoped>
  .admin-header {
    background-color: white;
    box-shadow: $shadow-sm;
    border-bottom: 1px solid $border-color;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .header-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    height: 40px;
    width: auto;
  }

  .title {
    font-size: $font-size-xl;
    font-weight: 600;
    color: $text-primary;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .user-name {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: $text-secondary;
    font-weight: 500;

    i {
      font-size: 1.25rem;
      color: $primary;
    }
  }

  .logout-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    color: $danger;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: $transition-base;

    i {
      font-size: $font-size-base;
    }

    &:hover {
      background-color: rgba($danger, 0.1);
    }
  }

  @media (max-width: $breakpoint-md) {
    .header-container {
      padding: 1rem;
    }

    .title {
      font-size: $font-size-lg;
    }

    .user-name span {
      display: none;
    }
  }

  @media (max-width: $breakpoint-sm) {
    .logo {
      height: 32px;
    }

    .title {
      font-size: $font-size-base;
    }
  }
</style>
