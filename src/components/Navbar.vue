<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <div class="logo-wrapper">
          <div class="logo-container">
            <router-link to="/">
              <img
                src="../../public/logo_wca.png"
                alt="WCA Office Logo"
                class="logo-image"
              />
            </router-link>
          </div>

          <router-link to="/" class="brand-name">
            WCA Office - Mobiliario Corporativo
          </router-link>
        </div>
        <button
          class="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          v-on:click="toggleNavbar()"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showMenu }">
        <ul class="nav-links">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
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
            <router-link to="/admin" class="nav-link">
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
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
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

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
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
  font-size: $font-size-xl;
  line-height: 1;
  padding: 0.25rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background: transparent;
  outline: none;

  i {
    color: white;
  }

  @include responsive(lg) {
    display: none;
  }
}

.navbar-menu {
  display: none;
  flex-grow: 1;
  background: white;

  &.is-active {
    display: block;
  }

  @include responsive(lg) {
    display: flex;
    background: transparent;
    box-shadow: none;
  }
}

.nav-links {
  display: flex;
  flex-direction: column;
  list-style: none;

  @include responsive(lg) {
    flex-direction: row;
    margin-left: auto;
  }
}

.nav-item {
  display: flex;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 1rem 0.75rem;
  font-size: $font-size-base * 0.75;
  font-weight: bold;
  text-transform: uppercase;
  color: $text-primary;
  transition: $transition-base;

  i {
    font-size: $font-size-lg;
    line-height: 1.5;
    color: $text-secondary;
    margin-right: 0.5rem;

    @include responsive(lg) {
      color: rgba(255, 255, 255, 0.7);
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

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
