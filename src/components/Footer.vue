<template>
  <footer class="footer">
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
    <div class="container">
      <div class="footer-content">
        <div class="company-info">
          <h4 class="company-title">WCA Office - Mobiliário Corporativo</h4>
          <h5 class="company-subtitle">Trabalhamos com as melhores marcas do mercado.</h5>
          <div class="social-buttons">
            <button
              class="social-button"
              type="button"
              aria-label="Visite nossa página no Facebook"
              @click="goToLink('facebook')"
            >
              <i class="fab fa-facebook-square"></i>
            </button>
            <button
              class="social-button"
              type="button"
              aria-label="Siga-nos no Instagram"
              @click="goToLink('instagram')"
            >
              <i class="fab fa-instagram"></i>
            </button>
            <button
              class="social-button"
              type="button"
              aria-label="Entre em contato via WhatsApp"
              @click="goToLink('whatsapp')"
            >
              <i class="fab fa-whatsapp"></i>
            </button>
            <button
              class="social-button"
              type="button"
              aria-label="Conecte-se conosco no LinkedIn"
              @click="goToLink('linkedin')"
            >
              <i class="fab fa-linkedin"></i>
            </button>
          </div>
        </div>
        <div class="links-section">
          <div class="links-wrapper">
            <div class="links-column">
              <span class="links-title">Seções</span>
              <ul class="links-list">
                <li>
                  <a class="footer-link" href="https://www.creative-tim.com/presentation">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a class="footer-link" @click="emitScrollEvent"> Localização / Contato </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="divider" />
      <div class="copyright">
        <div class="copyright-content">
          <div class="copyright-text">
            Copyright © {{ date }} Wca Office
            <p>Designed By FreeStyleCode.INC</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        date: new Date().getFullYear(),
      };
    },
    methods: {
      goToLink(platform) {
        switch (platform) {
          case "facebook":
            window.location.href = "https://www.facebook.com/wcaoffice";
            break;
          case "whatsapp":
            window.location.href = "https://wa.me/5534997799996";
            break;
          case "instagram":
            window.location.href = "https://www.instagram.com/wca_office/";
            break;
          case "linkedin":
            window.location.href = "https://www.linkedin.com/company/wca-office/";
            break;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .footer {
    position: relative;
    background-color: #d1d5db;
    padding: 2rem 0 1.5rem;
  }

  .wave-divider {
    position: absolute;
    bottom: auto;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 80px;
    pointer-events: none;
    overflow: hidden;
    margin-top: -5rem;

    svg {
      position: absolute;
      bottom: 0;
      overflow: hidden;

      polygon {
        fill: #d1d5db;
      }
    }
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
  }

  .company-info {
    width: 100%;
    padding: 0 1rem;

    @include responsive(lg) {
      width: 50%;
    }
  }

  .company-title {
    font-size: $font-size-3xl;
    font-weight: 600;
    color: $text-primary;
  }

  .company-subtitle {
    font-size: $font-size-lg;
    margin: 0 0 0.5rem;
    color: $text-secondary;
  }

  .social-buttons {
    margin-top: 1.5rem;
    display: flex;
    gap: 0.5rem;
  }

  .social-button {
    @include flex-center;
    background-color: white;
    color: #2563eb;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 9999px;
    box-shadow: $shadow-lg;
    outline: none;
    padding: 0.75rem;
    transition: $transition-base;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-md;
    }

    i {
      font-size: $font-size-lg;
    }
  }

  .links-section {
    width: 100%;
    padding: 0 1rem;

    @include responsive(lg) {
      width: 50%;
    }
  }

  .links-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }

  .links-column {
    width: 100%;
    padding: 0 1rem;
    margin-left: auto;

    @include responsive(lg) {
      width: 33.333333%;
    }
  }

  .links-title {
    display: block;
    text-transform: uppercase;
    color: $text-secondary;
    font-size: $font-size-base * 0.875;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .links-list {
    list-style: none;
  }

  .footer-link {
    color: $text-secondary;
    font-weight: 600;
    font-size: $font-size-base * 0.875;
    padding-bottom: 0.5rem;
    display: block;
    transition: $transition-base;
    cursor: pointer;

    &:hover {
      color: $text-primary;
    }
  }

  .divider {
    margin: 1.5rem 0;
    border-color: #9ca3af;
  }

  .copyright {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @include responsive(md) {
      justify-content: space-between;
    }
  }

  .copyright-content {
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
    text-align: center;

    @include responsive(md) {
      width: 33.333333%;
    }
  }

  .copyright-text {
    font-size: $font-size-base * 0.875;
    color: $text-secondary;
    font-weight: 600;
    padding: 0.25rem 0;
  }
</style>
