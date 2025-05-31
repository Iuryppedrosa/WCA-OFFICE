<template>
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Nossos Diferenciais</h2>
        <div class="title-decoration"></div>
        <p class="section-description">
          Conheça os principais diferenciais que fazem da WCA Office a escolha ideal para seu
          mobiliário corporativo
        </p>
      </div>
      <div class="cards-grid">
        <card-component v-for="(card, index) in cards" :key="index" v-bind="card"></card-component>
      </div>
      <div class="content-wrapper">
        <div class="info-content" data-aos="zoom-in-right">
          <div class="info-header">
            <h3 class="info-title">Atendimento personalizado</h3>
            <div class="title-decoration"></div>
          </div>
          <p class="info-description">
            Nossa equipe está pronta para entender sua necessidade e entregar a melhor solução para
            seu ambiente corporativo.
          </p>
          <a href="#contato-localizacao" class="contact-link">
            <span>Entre em contato</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div class="image-content" data-aos="fade-up" data-aos-delay="200">
          <div class="image-card">
            <img
              alt="Equipe trabalhando em escritório moderno"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
              class="card-image"
            />
            <div class="card-overlay">
              <h4 class="overlay-title">Serviços de excelência</h4>
              <p class="overlay-description">
                Do projeto à montagem, cuidamos de tudo para você. Experimente nosso atendimento
                diferenciado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import CardComponent from "./CardComponent.vue";
  export default {
    name: "ServicesSection",
    components: { CardComponent },
    props: {
      cards: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .services-section {
    padding: 10rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
    margin-top: -6rem;
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 8px;
      background: linear-gradient(90deg, $primary, lighten($primary, 20%));
    }
  }

  .section-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 6rem;
    padding: 0 1.5rem;
    animation: fadeInUp 1s ease;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 800;
    color: $text-primary;
    margin-bottom: 1rem;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, $text-primary 0%, $primary 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
  }

  .title-decoration {
    width: 4rem;
    height: 3px;
    background: linear-gradient(90deg, $primary, lighten($primary, 20%));
    margin: 1.5rem auto;
    border-radius: 2px;
    transform: scaleX(0);
    animation: scaleIn 0.6s ease forwards 0.3s;
  }

  .section-description {
    font-size: 1.2rem;
    line-height: 1.8;
    color: $text-secondary;
    margin-top: 1.5rem;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards 0.2s;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-bottom: 8rem;
    padding: 0 1.5rem;
  }

  .content-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  }

  .info-content {
    width: 100%;
    padding: 0 1.5rem;

    @include responsive(md) {
      width: calc(50% - 2.5rem);
    }
  }

  .info-header {
    margin-bottom: 2.5rem;
  }

  .info-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: $text-primary;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  .info-description {
    font-size: 1.2rem;
    line-height: 1.8;
    color: $text-secondary;
    margin-bottom: 2.5rem;
  }

  .contact-link {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;
    color: $primary;
    padding: 1rem 2rem;
    background: rgba($primary, 0.1);
    border-radius: 3rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    span {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    i {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      background: $primary;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba($primary, 0.2);

      i {
        transform: translateX(0.5rem);
      }
    }
  }

  .image-content {
    width: 100%;
    padding: 0 1.5rem;

    @include responsive(md) {
      width: calc(50% - 2.5rem);
    }
  }

  .image-card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    transform: perspective(1000px) rotateY(0deg);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: perspective(1000px) rotateY(3deg);
      box-shadow: 0 35px 60px rgba(0, 0, 0, 0.2);

      .card-image {
        transform: scale(1.05);
      }

      .card-overlay {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .card-image {
    width: 100%;
    height: auto;
    display: block;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2));
    padding: 3rem;
    opacity: 0;
    transform: translateY(2rem);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .overlay-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .overlay-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
</style>
