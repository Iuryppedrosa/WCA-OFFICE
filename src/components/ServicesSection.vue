<template>
  <section class="services-section">
    <div class="container">
      <div class="cards-grid">
        <card-component
          v-for="(card, index) in cards"
          :key="index"
          v-bind="card"
        ></card-component>
      </div>
      <div class="content-wrapper">
        <div class="info-content" data-aos="zoom-in-right">
          <div class="icon-wrapper">
            <i class="fas fa-user-friends"></i>
          </div>
          <h3 class="title">Atendimento personalizado</h3>
          <p class="description">
            Nossa equipe está pronta para entender sua necessidade e entregar a
            melhor solução para seu ambiente corporativo.
          </p>
          <a href="#contato-localizacao" class="contact-link"
            >Entre em contato</a
          >
        </div>
        <div class="image-content" data-aos="flip-left" data-aos-delay="1000">
          <div class="image-card">
            <img
              alt="Equipe trabalhando em escritório moderno"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
              class="card-image"
            />
            <blockquote class="card-content">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="wave-divider"
              >
                <polygon points="-30,95 583,95 583,65"></polygon>
              </svg>
              <h4 class="card-title">Serviços de excelência</h4>
              <p class="card-description">
                Do projeto à montagem, cuidamos de tudo para você. Experimente
                nosso atendimento diferenciado.
              </p>
            </blockquote>
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
  padding-bottom: 5rem;
  background-color: #f3f4f6;
  margin-top: -6rem;
}

.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8rem;
}

.info-content {
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  @include responsive(md) {
    width: 41.666667%;
  }
}

.icon-wrapper {
  @include flex-center;
  width: 4rem;
  height: 4rem;
  margin-bottom: 1.5rem;
  border-radius: 9999px;
  background-color: #dbeafe;
  box-shadow: $shadow-lg;

  i {
    font-size: $font-size-xl;
    color: #2563eb;
  }
}

.title {
  font-size: $font-size-3xl;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.375;
  color: $text-primary;
}

.description {
  font-size: $font-size-lg;
  font-weight: 300;
  line-height: 1.625;
  margin: 1rem 0;
  color: $text-secondary;
}

.contact-link {
  display: inline-block;
  margin-top: 2rem;
  font-weight: bold;
  color: #2563eb;
  text-decoration: underline;
  transition: $transition-base;

  &:hover {
    color: darken(#2563eb, 10%);
  }
}

.image-content {
  width: 100%;
  padding: 0 1rem;
  margin: 2rem auto 0;

  @include responsive(md) {
    width: 33.333333%;
    margin-top: 0;
  }
}

.image-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background: linear-gradient(135deg, #ec4899, #fbbf24);
  border-radius: 0.5rem;
  box-shadow: $shadow-lg;
  overflow: hidden;
}

.card-image {
  width: 100%;
  vertical-align: middle;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.card-content {
  position: relative;
  padding: 2rem;
  margin-bottom: 1rem;
}

.wave-divider {
  position: absolute;
  left: 0;
  width: 100%;
  display: block;
  height: 95px;
  top: -94px;

  polygon {
    fill: #db2777;
  }
}

.card-title {
  font-size: $font-size-xl;
  font-weight: bold;
  color: white;
}

.card-description {
  font-size: $font-size-base;
  font-weight: 300;
  margin-top: 0.5rem;
  color: white;
}
</style>
