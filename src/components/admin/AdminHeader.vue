<template>
  <header class="admin-header">
    <div class="header-container">
      <div class="header-left">
        <div class="logo-container">
          <i class="fas fa-building"></i>
        </div>
        <h1 class="title">Painel Administrativo</h1>
      </div>

      <div class="header-right">
        <div class="user-info">
          <span class="user-name">
            <div class="avatar">
              <i class="fas fa-user"></i>
            </div>
            <span class="admin-text">Administrador</span>
          </span>
        </div>

        <button @click="$emit('logout')" class="logout-button">
          <i class="fas fa-sign-out-alt"></i>
          <span class="logout-text">Sair</span>
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
    padding: 0.75rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 0;
  }

  .logo-container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $primary;
    border-radius: 8px;
    flex-shrink: 0;

    i {
      font-size: 1.5rem;
      color: white;
    }
  }

  .title {
    font-size: $font-size-xl;
    font-weight: 600;
    color: $text-primary;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .user-info {
    display: flex;
    align-items: center;
  }

  .user-name {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: $text-secondary;
    font-weight: 500;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: $gray-100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    i {
      font-size: 1.25rem;
      color: $gray-600;
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
      padding: 0.75rem 1rem;
    }

    .title {
      font-size: $font-size-lg;
    }

    .admin-text {
      display: none;
    }

    .logout-text {
      display: none;
    }

    .logout-button {
      padding: 0.5rem;
    }
  }

  @media (max-width: $breakpoint-sm) {
    .logo-container {
      width: 32px;
      height: 32px;

      i {
        font-size: 1.25rem;
      }
    }

    .title {
      font-size: $font-size-base;
    }

    .avatar {
      width: 32px;
      height: 32px;

      i {
        font-size: 1rem;
      }
    }
  }
</style>
