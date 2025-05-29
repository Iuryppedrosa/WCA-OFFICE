<template>
  <div class="error-state">
    <div class="error-icon">
      <i class="fas fa-exclamation-circle"></i>
    </div>
    <p class="message">{{ message }}</p>
    <button @click="$emit('retry')" class="retry-button">
      <i class="fas fa-redo"></i>
      Tentar novamente
    </button>
  </div>
</template>

<script>
export default {
  name: "ErrorState",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  emits: ["retry"],
};
</script>

<style lang="scss" scoped>
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
}

.error-icon {
  font-size: 3rem;
  color: $danger;
  margin-bottom: 1rem;
  animation: shake 0.5s ease-in-out;
}

.message {
  color: $text-secondary;
  font-size: $font-size-base;
  margin-bottom: 1.5rem;
  max-width: 400px;
}

.retry-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: white;
  border: 1px solid $border-color;
  border-radius: 0.5rem;
  color: $text-primary;
  font-weight: 500;
  transition: $transition-base;

  i {
    font-size: $font-size-base;
  }

  &:hover {
    background-color: $gray-50;
    border-color: $gray-300;
  }

  &:active {
    background-color: $gray-100;
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}
</style>
