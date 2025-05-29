<template>
  <section id="contato-localizacao" class="section contact-section">
    <div class="container">
      <div class="content-wrapper">
        <div class="contact-info">
          <h3 class="title">Localização / Contato</h3>
          <p class="description">
            Será um prazer enorme atendê-lo. Venha nos visitar ou entre em
            contato:
          </p>
          <ul class="contact-list">
            <li class="contact-item">
              <div class="contact-group">
                <div class="icon-wrapper">
                  <span
                    class="icon-circle location"
                    aria-label="Endereço"
                    role="img"
                  >
                    <i class="fas fa-location-dot"></i>
                  </span>
                </div>
                <div class="info-wrapper">
                  <a
                    href="https://www.google.com/maps/dir//Wca+Office+M%C3%B3veis+para+Escrit%C3%B3rio+Av.+Nicodemos+Alves+dos+Santos,+322+-+Saraiva+Uberl%C3%A2ndia+-+MG+38413-048/@-18.920836,-48.2643491,20z/"
                    class="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nosso endereço - Clique para ver no Google Maps"
                  >
                    <span class="label">Nosso Endereço</span>
                    Av. Nicodemos Alves dos Santos, 322 - B. Saraiva
                  </a>
                </div>
              </div>
            </li>
            <li class="contact-item">
              <div class="contact-group">
                <div class="icon-wrapper">
                  <span
                    class="icon-circle whatsapp"
                    aria-label="WhatsApp"
                    role="img"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </span>
                </div>
                <div class="info-wrapper">
                  <a
                    href="https://wa.me/5534997799996"
                    class="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nosso WhatsApp - Clique para iniciar conversa"
                  >
                    <span class="label">WhatsApp</span>
                    (34) 9.9979-9996
                  </a>
                </div>
              </div>
            </li>
            <li class="contact-item">
              <div class="contact-group">
                <div class="icon-wrapper">
                  <span
                    class="icon-circle hours"
                    aria-label="Horário de Funcionamento"
                    role="img"
                  >
                    <i class="far fa-clock"></i>
                  </span>
                </div>
                <div class="info-wrapper">
                  <span class="label">Horário de Funcionamento</span>
                  <span class="schedule">Segunda a Sexta: 8h às 18h</span>
                  <span class="schedule">Sábado: 8h às 12h</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="map-container">
          <div class="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.5225126919507!2d-48.26440971157546!3d-18.92050219882377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445a6b88eb3d7%3A0x97c43bb2a44420e7!2sWca%20Office%20M%C3%B3veis%20para%20Escrit%C3%B3rio!5e0!3m2!1spt-BR!2sbr!4v1724442131446!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Localização WCA Office no Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
@import "@/styles/mixins";

.contact-section {
  padding: 5rem 0;
  background: $gradient-background;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.contact-info {
  width: 100%;
  padding: 0 $spacing-base;
  margin: 0 auto;
}

.title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #8b5cf6, #6366f1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.description {
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.625;
  margin: 1rem 0;
  color: $text-primary;
}

.contact-list {
  list-style: none;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: $spacing-base;
}

.contact-item {
  padding: 0.5rem 0;
}

.contact-group {
  display: flex;
  align-items: center;
  gap: $spacing-base;
}

.icon-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: white;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  box-shadow: $shadow-sm;
}

.contact-group:hover .icon-circle {
  transform: scale(1.1);
  box-shadow: $shadow-lg;
}

.location {
  background: $gradient-primary;
}

.whatsapp {
  background: $gradient-success;
}

.hours {
  background: $gradient-info;
}

.contact-link {
  display: flex;
  flex-direction: column;
  color: $text-primary;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: $primary;
}

.label {
  font-size: $font-size-base * 0.875;
  font-weight: 600;
  color: $primary;
}

.schedule {
  color: $text-primary;
}

.map-container {
  width: 100%;
  padding: 0 $spacing-base;
  margin-top: 2rem;
}

.map-wrapper {
  position: relative;
  min-height: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: $shadow-sm;
  border: 1px solid #f3f4f6;
  transition: $transition-base;

  &:hover {
    box-shadow: $shadow-lg;
  }

  iframe {
    border: 0;
    min-height: 400px;
  }
}

@include responsive(md) {
  .contact-info {
    width: 41.666667%;
  }

  .map-container {
    width: 50%;
    margin-top: 0;
  }
}
</style>
