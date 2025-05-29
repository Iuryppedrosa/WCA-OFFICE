<template>
  <div
    :class="['service-card', mainCss]"
    data-aos="fade-right"
    :data-aos-delay="delay"
  >
    <div class="card-wrapper">
      <div class="card-content">
        <div :class="['icon-circle', colorCard]">
          <i :class="iconType"></i>
        </div>
        <h6 class="card-title">{{ title }}</h6>
        <p class="card-description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    mainCss: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    delay: {
      type: Number,
      required: true,
    },
    colorCard: {
      type: String,
      required: true,
    },
    iconType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.service-card {
  @include responsive(md) {
    width: calc(33.333333% - 1.5rem);
  }
}

.card-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: white;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: $shadow-lg;
  transition: $transition-base;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: $shadow-lg;
  }
}

.card-content {
  padding: 1.25rem 1rem;
  flex: 1 1 auto;
}

.icon-circle {
  @include flex-center;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.25rem;
  border-radius: 9999px;
  box-shadow: $shadow-lg;
  color: white;

  i {
    font-size: $font-size-xl;
  }
}

.card-title {
  font-size: $font-size-xl;
  font-weight: 600;
  color: $text-primary;
  margin-bottom: 0.5rem;
}

.card-description {
  margin: 0.5rem 0 1rem;
  color: $text-secondary;
  line-height: 1.5;
}
</style>
