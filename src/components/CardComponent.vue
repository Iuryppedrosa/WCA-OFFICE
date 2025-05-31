<template>
  <div :class="['service-card', mainCss]" data-aos="fade-right" :data-aos-delay="delay">
    <div class="card-wrapper">
      <div class="card-content">
        <div :class="['icon-wrapper', colorCard]">
          <i :class="iconType"></i>
        </div>
        <div class="text-content">
          <h6 class="card-title">{{ title }}</h6>
          <p class="card-description">{{ description }}</p>
        </div>
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
    background-color: white;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    border: 1px solid rgba($text-primary, 0.08);
    height: 100%;
    background: linear-gradient(to bottom, rgba($gray-50, 0.5), white);

    &:hover {
      transform: translateY(-0.25rem);
      border-color: rgba($primary, 0.2);
      box-shadow: 0 4px 12px rgba($primary, 0.08), 0 8px 24px rgba($primary, 0.12);

      .icon-wrapper {
        transform: scale(1.08);
      }

      .text-content {
        transform: translateY(-0.25rem);
      }
    }
  }

  .card-content {
    padding: 1.75rem;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    margin-bottom: 1.25rem;
    border-radius: 0.375rem;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

    i {
      font-size: 1.125rem;
      color: white;
    }

    &.red-bg {
      background: linear-gradient(135deg, $danger, adjust-hue($danger, 15deg));
      box-shadow: 0 4px 12px rgba($danger, 0.15);
    }

    &.blue-bg {
      background: linear-gradient(135deg, $info, adjust-hue($info, 15deg));
      box-shadow: 0 4px 12px rgba($info, 0.15);
    }

    &.green-bg {
      background: linear-gradient(135deg, $success, adjust-hue($success, 15deg));
      box-shadow: 0 4px 12px rgba($success, 0.15);
    }
  }

  .text-content {
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .card-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: 0.625rem;
    letter-spacing: -0.01em;
    background: linear-gradient(135deg, $text-primary, $text-secondary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card-description {
    color: $text-secondary;
    line-height: 1.5;
    font-size: 0.9375rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
