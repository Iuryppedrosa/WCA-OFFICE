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
            <h1 class="hero-title" data-aos="fade-up">
              Mobiliário corporativo você encontra aqui!
            </h1>
            <p
              class="hero-description"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              Soluções modernas, atendimento personalizado e qualidade garantida
              para o seu escritório.
            </p>
            <a href="#contato-localizacao" class="cta-button"> Fale Conosco </a>
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
  padding-right: 3rem;
}

.hero-title {
  color: white;
  font-weight: 800;
  font-size: 3rem;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07));

  @include responsive(md) {
    font-size: 3.75rem;
  }
}

.hero-description {
  margin-top: 1.5rem;
  font-size: $font-size-xl;
  color: #f3f4f6;
  font-weight: 300;
}

.cta-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  color: #1d4ed8;
  font-weight: bold;
  border-radius: 9999px;
  box-shadow: $shadow-lg;
  transition: $transition-base;
  font-size: $font-size-lg;

  &:hover {
    background-color: white;
    transform: translateY(-2px);
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
