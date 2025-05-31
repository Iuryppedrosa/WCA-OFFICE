<template>
  <div class="login-form">
    <div class="form-container">
      <div class="form-header">
        <router-link to="/" class="back-button">
          <i class="fas fa-arrow-left"></i>
          <span>Voltar ao site</span>
        </router-link>
        <h2 class="title">Área Administrativa</h2>
      </div>

      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-group">
          <label for="email" class="label">
            <i class="fas fa-envelope"></i>
            Email
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="input"
            :class="{ error: error }"
            placeholder="Digite seu email"
          />
        </div>

        <div class="form-group">
          <label for="password" class="label">
            <i class="fas fa-lock"></i>
            Senha
          </label>
          <div class="password-input">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="input"
              :class="{ error: error }"
              placeholder="Digite sua senha"
            />
            <button type="button" class="toggle-password" @click="showPassword = !showPassword">
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
        </div>

        <p v-if="error" class="error-message">
          <i class="fas fa-exclamation-circle"></i>
          {{ error }}
        </p>

        <button type="submit" class="submit-button" :disabled="loading">
          <i class="fas fa-sign-in-alt"></i>
          {{ loading ? "Entrando..." : "Entrar" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginForm",

    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      error: {
        type: String,
        default: "",
      },
    },

    emits: ["submit"],

    data() {
      return {
        form: {
          email: "",
          password: "",
        },
        showPassword: false,
      };
    },

    methods: {
      handleSubmit() {
        this.$emit("submit", { ...this.form });
      },
    },

    // setup(props, { emit }) {
    //   const form = ref({
    //     email: "",
    //     password: "",
    //   });

    //   const showPassword = ref(false);

    //   const handleSubmit = () => {
    //     emit("submit", { ...form.value });
    //   };

    //   return {
    //     form,
    //     showPassword,
    //     handleSubmit,
    //   };
    // },
  };
</script>

<style lang="scss" scoped>
  .login-form {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(135deg, #f5f3ff, #eff6ff);
  }

  .form-container {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 1rem;
    box-shadow: $shadow-lg;
    padding: 2rem;
  }

  .logo-container {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .logo {
    height: 80px;
    width: auto;
  }

  .form-header {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: $text-secondary;
    font-size: $font-size-sm;
    font-weight: 500;
    transition: $transition-base;
    width: fit-content;

    i {
      font-size: 1rem;
    }

    &:hover {
      color: $primary;
      transform: translateX(-2px);
    }
  }

  .title {
    font-size: $font-size-2xl;
    font-weight: 600;
    color: $text-primary;
    text-align: center;
    margin: 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: $font-size-sm;
    font-weight: 500;
    color: $text-secondary;

    i {
      color: $primary;
    }
  }

  .input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid $border-color;
    border-radius: 0.5rem;
    font-size: $font-size-base;
    transition: $transition-base;

    &::placeholder {
      color: $text-muted;
    }

    &:focus {
      outline: none;
      border-color: $primary;
      box-shadow: 0 0 0 2px rgba($primary, 0.1);
    }

    &.error {
      border-color: $danger;
    }
  }

  .password-input {
    position: relative;

    .input {
      padding-right: 3rem;
    }
  }

  .toggle-password {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: $text-muted;
    transition: $transition-base;

    &:hover {
      color: $text-secondary;
    }
  }

  .error-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: $danger;
    font-size: $font-size-sm;

    i {
      font-size: $font-size-base;
    }
  }

  .submit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.875rem;
    background: linear-gradient(135deg, $primary, darken($primary, 10%));
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: $transition-base;

    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 6px rgba($primary, 0.2);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  @media (max-width: $breakpoint-sm) {
    .login-form {
      padding: 1rem;
    }

    .form-container {
      padding: 1.5rem;
    }

    .title {
      font-size: $font-size-xl;
    }

    .back-button {
      font-size: $font-size-xs;

      i {
        font-size: 0.875rem;
      }
    }
  }
</style>
