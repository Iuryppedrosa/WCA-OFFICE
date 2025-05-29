<template>
  <section class="budget-section">
    <div class="container">
      <div class="form-wrapper">
        <div class="form-container">
          <div class="form-card">
            <form @submit.prevent="handleSubmit" class="form" novalidate>
              <div class="form-header">
                <span class="form-title">Solicite Orçamento</span>
                <i class="fas fa-file-invoice"></i>
              </div>
              <p class="form-description">
                Complete o formulário e entraremos em contato em até 24 horas.
              </p>

              <!-- Alert Messages -->
              <div
                v-if="submitStatus.message"
                :class="[
                  'alert',
                  submitStatus.type === 'success'
                    ? 'alert-success'
                    : 'alert-error',
                ]"
              >
                {{ submitStatus.message }}
              </div>

              <div class="form-group">
                <label class="form-label" for="full-name">
                  <i class="fas fa-user"></i>
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="full-name"
                  v-model.trim="formData.name"
                  :class="[
                    'form-input',
                    { 'has-error': validationErrors.name },
                  ]"
                  placeholder="Digite seu nome completo"
                  required
                  aria-label="Digite seu nome completo"
                  :disabled="isSubmitting"
                  @blur="validateField('name')"
                />
                <p v-if="validationErrors.name" class="error-message">
                  {{ validationErrors.name }}
                </p>
              </div>

              <div class="form-group">
                <label class="form-label" for="email">
                  <i class="fas fa-envelope"></i>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  v-model.trim="formData.email"
                  :class="[
                    'form-input',
                    { 'has-error': validationErrors.email },
                  ]"
                  placeholder="Digite seu email"
                  required
                  aria-label="Digite seu email"
                  :disabled="isSubmitting"
                  @blur="validateField('email')"
                />
                <p v-if="validationErrors.email" class="error-message">
                  {{ validationErrors.email }}
                </p>
              </div>

              <div class="form-group">
                <label class="form-label" for="message">
                  <i class="fas fa-message"></i>
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows="4"
                  cols="80"
                  v-model.trim="formData.message"
                  :class="[
                    'form-textarea',
                    { 'has-error': validationErrors.message },
                  ]"
                  placeholder="Descreva qual mobiliário você possui interesse..."
                  required
                  aria-label="Digite sua mensagem"
                  :disabled="isSubmitting"
                  @blur="validateField('message')"
                ></textarea>
                <p v-if="validationErrors.message" class="error-message">
                  {{ validationErrors.message }}
                </p>
              </div>

              <div class="form-actions">
                <button
                  type="submit"
                  class="submit-button"
                  aria-label="Enviar formulário de orçamento"
                  :disabled="isSubmitting || !isFormValid"
                >
                  <i class="fas fa-paper-plane"></i>
                  <span>{{
                    isSubmitting ? "Enviando..." : "Enviar Mensagem"
                  }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { budgetRepository } from "../repositories/budgetRepository.ts";

export default {
  name: "BudgetFormSection",

  data() {
    return {
      isSubmitting: false,
      formData: {
        name: "",
        email: "",
        message: "",
      },
      submitStatus: {
        message: "",
        type: "success",
      },
      validationErrors: {},
    };
  },

  computed: {
    isFormValid() {
      const hasNoErrors =
        !this.validationErrors.name &&
        !this.validationErrors.email &&
        !this.validationErrors.message;

      const hasAllFields =
        this.formData.name?.trim() &&
        this.formData.email?.trim() &&
        this.formData.message?.trim();

      return hasNoErrors && hasAllFields;
    },
  },

  methods: {
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    validateField(field) {
      const value = this.formData[field]?.trim();

      if (!value) {
        this.validationErrors[field] = "Este campo é obrigatório";
        return false;
      }

      if (field === "email" && !this.validateEmail(value)) {
        this.validationErrors[field] = "Email inválido";
        return false;
      }

      if (field === "message" && value.length < 10) {
        this.validationErrors[field] =
          "A mensagem deve ter pelo menos 10 caracteres";
        return false;
      }

      this.validationErrors[field] = undefined;
      return true;
    },

    validateForm() {
      const fields = ["name", "email", "message"];
      return fields.every((field) => this.validateField(field));
    },

    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
      this.submitStatus.message = "";
      this.validationErrors = {};
    },

    async handleSubmit() {
      if (!this.validateForm()) {
        return;
      }

      try {
        this.isSubmitting = true;
        this.submitStatus.message = "";
        this.submitStatus.type = "info";

        const { error } = await budgetRepository.create(this.formData);

        if (error) {
          this.submitStatus.type = "error";
          this.submitStatus.message = error.message;
          console.error("[BudgetForm] Error:", error);
          return;
        }

        this.submitStatus.type = "success";
        this.submitStatus.message =
          "Orçamento enviado com sucesso! Entraremos em contato em breve.";
        this.resetForm();
      } catch (error) {
        console.error("[BudgetForm] Unexpected error:", error);
        this.submitStatus.type = "error";
        this.submitStatus.message =
          "Erro inesperado ao enviar orçamento. Por favor, tente novamente.";
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.budget-section {
  position: relative;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f5f3ff, #eff6ff);
}

.form-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.form-container {
  width: 100%;
  padding: 0 1rem;

  @include responsive(lg) {
    width: 50%;
  }
}

.form-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: white;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: $shadow-lg;
  border: 1px solid #f9fafb;
  transition: $transition-base;

  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-lg;
  }
}

.form {
  flex: 1 1 auto;
  padding: 1.25rem;

  @include responsive(lg) {
    padding: 2.5rem;
  }
}

.form-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  i {
    font-size: $font-size-xl;
    color: $primary;
  }
}

.form-title {
  font-size: $font-size-2xl;
  font-weight: bold;
  margin-right: 0.75rem;
  background: linear-gradient(to right, $primary, $primary-dark);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.form-description {
  line-height: 1.625;
  margin: 0.25rem 0 2rem;
  color: $text-secondary;
}

.alert {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  font-size: $font-size-base * 0.875;

  &.alert-success {
    background-color: #ecfdf5;
    color: #047857;
    border: 1px solid #a7f3d0;
  }

  &.alert-error {
    background-color: #fef2f2;
    color: #b91c1c;
    border: 1px solid #fecaca;
  }
}

.form-group {
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  color: $text-secondary;
  font-size: $font-size-base * 0.875;
  font-weight: 500;
  margin-bottom: 0.5rem;

  i {
    color: $primary;
    margin-right: 0.5rem;
  }
}

%form-field {
  padding: 0.75rem 1rem;
  color: $text-primary;
  background-color: white;
  border-radius: 0.5rem;
  font-size: $font-size-base * 0.875;
  box-shadow: $shadow-sm;
  border: 1px solid #f3f4f6;
  width: 100%;
  transition: $transition-base;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: $primary;
    box-shadow: 0 0 0 3px rgba($primary, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.has-error {
    border-color: #ef4444;
  }
}

.form-input {
  @extend %form-field;
  height: 3rem;
}

.form-textarea {
  @extend %form-field;
  resize: none;
}

.error-message {
  margin-top: 0.25rem;
  font-size: $font-size-base * 0.875;
  color: #ef4444;
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
}

.submit-button {
  @include flex-center;
  gap: 0.5rem;
  background: linear-gradient(to right, $primary, $primary-dark);
  color: white;
  font-size: $font-size-base * 0.875;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: $shadow-lg;
  transition: $transition-base;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: $shadow-lg;
    color: white;

    i {
      transform: rotate(12deg);
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba($primary, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  i {
    transition: transform 0.3s ease;
  }
}
</style>
