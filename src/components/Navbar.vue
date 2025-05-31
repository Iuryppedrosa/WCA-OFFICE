<template>
  <nav class="navbar" :class="{ 'menu-open': showMenu }">
    <div class="container">
      <div class="navbar-brand">
        <div class="logo-wrapper">
          <div class="logo-container">
            <router-link to="/">
              <img src="../../public/logo_wca.png" alt="WCA Office Logo" class="logo-image" />
            </router-link>
          </div>

          <router-link to="/" class="brand-name"> WCA Office - Mobiliario Corporativo </router-link>
        </div>
        <button
          class="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          v-on:click="toggleNavbar()"
        >
          <span class="hamburger-icon" :class="{ 'is-active': showMenu }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showMenu }">
        <ul class="nav-links">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="showMenu = false">
              <i class="far fa-file-alt"></i>
              Portifólio
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.facebook.com/wcaoffice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook"></i>
              <span class="mobile-text">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.instagram.com/wca_office/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
              <span class="mobile-text">Instagram</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/company/wca-office/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
              <span class="mobile-text">Linkedin</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link" @click="showMenu = false">
              <i class="fas fa-lock"></i>
              <span>Admin</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      toggleNavbar() {
        this.showMenu = !this.showMenu;
      },
    },
    watch: {
      $route() {
        this.showMenu = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .navbar {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 50;
    padding: 0.75rem 0.5rem;
    transition: background-color 0.3s ease;

    &.menu-open {
      background-color: white;
      box-shadow: $shadow-md;

      .brand-name {
        color: $text-primary;
      }

      .hamburger-icon span {
        background-color: $text-primary;
      }
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      max-width: 1280px;
      margin: 0 auto;
    }
  }

  .navbar-brand {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @include responsive(lg) {
      width: auto;
      display: block;
    }
  }

  .logo-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .logo-container {
    width: 50%;
    padding: 0 1rem;

    @include responsive(sm) {
      width: 33.333333%;
    }
  }

  .logo-image {
    width: 60%;
    max-width: 100%;
    height: auto;
    border-radius: 9999px;
    border: none;
    box-shadow: $shadow-sm;
  }

  .brand-name {
    font-size: $font-size-base * 0.875;
    font-weight: bold;
    line-height: 1.375;
    display: inline-block;
    margin-right: 1rem;
    padding: 0.5rem 0;
    white-space: nowrap;
    text-transform: uppercase;
    color: white;
  }

  .menu-toggle {
    cursor: pointer;
    padding: 0.5rem;
    border: none;
    background: transparent;
    outline: none;
    z-index: 20;

    @include responsive(lg) {
      display: none;
    }
  }

  .hamburger-icon {
    width: 24px;
    height: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: white;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    &.is-active {
      span {
        &:first-child {
          transform: translateY(9px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:last-child {
          transform: translateY(-9px) rotate(-45deg);
        }
      }
    }
  }

  .navbar-menu {
    display: none;
    width: 100%;
    background: white;
    border-radius: 0.5rem;
    margin-top: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;

    &.is-active {
      display: block;
      animation: slideDown 0.3s ease forwards;
    }

    @include responsive(lg) {
      display: flex;
      width: auto;
      background: transparent;
      margin-top: 0;
      animation: none;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0.5rem;
    margin: 0;

    @include responsive(lg) {
      flex-direction: row;
      margin-left: auto;
      padding: 0;
      gap: 0.5rem;
    }
  }

  .nav-item {
    display: flex;
    align-items: center;

    @include responsive(lg) {
      position: relative;

      &:hover {
        .nav-link::after {
          width: 100%;
        }
      }
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    padding: 0.875rem 1rem;
    font-size: $font-size-sm;
    font-weight: 600;
    text-transform: uppercase;
    color: $text-primary;
    transition: all 0.2s ease;
    width: 100%;
    border-radius: 0.375rem;

    i {
      font-size: $font-size-lg;
      margin-right: 0.75rem;
      transition: transform 0.2s ease;
    }

    &:hover {
      background-color: rgba($primary, 0.05);

      i {
        transform: scale(1.1);
      }
    }

    .mobile-text {
      display: inline-block;
      margin-left: 0.5rem;

      @include responsive(lg) {
        display: none;
      }
    }

    @include responsive(lg) {
      padding: 0.5rem 0.75rem;
      color: white;
      position: relative;
      width: auto;

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: white;
        transition: width 0.3s ease;
      }

      &:hover {
        background-color: transparent;
        color: rgba(255, 255, 255, 0.9);

        i {
          color: rgba(255, 255, 255, 0.9);
        }
      }

      i {
        color: rgba(255, 255, 255, 0.7);
        margin-right: 0.5rem;
      }
    }
  }
</style>
