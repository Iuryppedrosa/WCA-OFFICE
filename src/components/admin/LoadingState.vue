<template>
  <div class="loading-state">
    <div class="spinner">
      <div class="spinner-ring"></div>
    </div>
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "LoadingState",
  props: {
    message: {
      type: String,
      default: "Carregando...",
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.spinner {
  margin-bottom: 1rem;
}

.spinner-ring {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 3px solid rgba($primary, 0.2);
  border-top-color: $primary;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
}

.message {
  color: $text-secondary;
  font-size: $font-size-base;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
