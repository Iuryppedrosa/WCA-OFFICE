<template>
  <section class="hero-section">
    <div
      class="hero-background"
      :style="{
        backgroundImage: `url(${require('@/assets/img/banner_image.jpg')})`,
      }"
    >
      <span class="overlay"></span>
    </div>
    <div class="container">
      <div class="content-wrapper">
        <div class="hero-content">
          <div class="text-content">
            <div class="cta-container" data-aos="fade-up">
              <a href="#contato-localizacao" class="cta-button">
                <i class="fas fa-handshake"></i>
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wave-divider">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
</template>

<script>
  export default {
    name: "HeroSection",
  };
</script>

<style lang="scss" scoped>
  .hero-section {
    position: relative;
    padding: 4rem 0 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 75vh;
    background: linear-gradient(135deg, #1d4ed8, #ec4899, #facc15);
  }

  .hero-background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    opacity: 0.6;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
  }

  .container {
    position: relative;
    z-index: 10;
  }

  .content-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .hero-content {
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
    text-align: center;

    @include responsive(lg) {
      width: 50%;
    }
  }

  .text-content {
    padding-right: 0;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    min-height: 50vh;
    padding-bottom: 3rem;

    @include responsive(lg) {
      padding-right: 3rem;
      min-height: 55vh;
    }

    @include responsive(sm) {
      padding-bottom: 2rem;
      min-height: 45vh;
    }
  }

  .cta-container {
    text-align: center;
    padding: 2rem;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2.5rem;
    background-color: rgba(255, 255, 255, 0.9);
    color: #1d4ed8;
    font-weight: bold;
    border-radius: 9999px;
    box-shadow: $shadow-lg;
    transition: all 0.3s ease;
    font-size: 1.25rem;

    i {
      font-size: 1.4rem;
    }

    &:hover {
      background-color: white;
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }

    @include responsive(sm) {
      padding: 0.875rem 2rem;
      font-size: 1.125rem;

      i {
        font-size: 1.25rem;
      }
    }
  }

  .wave-divider {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 70px;
    pointer-events: none;
    overflow: hidden;

    svg {
      position: absolute;
      bottom: 0;
      overflow: hidden;

      polygon {
        fill: #d1d5db;
      }
    }
  }
</style>
