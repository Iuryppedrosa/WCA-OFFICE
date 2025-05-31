<template>
  <div class="employee-card" data-aos="fade-in">
    <div class="card-content">
      <img alt="employee" :src="image" class="employee-image" />
      <div class="employee-info">
        <h5 class="employee-name">{{ name }}</h5>
        <p class="employee-role">{{ role }}</p>
        <div class="social-links">
          <button
            v-for="(socialMedia, index) in socialMedias"
            :key="index"
            :class="['social-button', socialMedia.color]"
            type="button"
            @click="handleSocialMediaClick(socialMedia)"
          >
            <i :class="socialMedia.icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EmployeeCardComponent",
    props: {
      name: {
        type: Object,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      socialMedias: {
        type: Array,
        required: true,
      },
    },
    methods: {
      handleSocialMediaClick(socialMedias) {
        if (socialMedias.type === "email") {
          this.sendEmail(socialMedias.email);
        } else if (socialMedias.type === "link") {
          this.goToLink(socialMedias.link);
        }
      },
      sendEmail(email) {
        window.location.href = `mailto:${email}`;
      },
      goToLink(link) {
        window.open(link, "_blank");
      },
    },
  };
</script>

<style lang="scss" scoped>
  .employee-card {
    width: 50%;
    margin-bottom: 0;
    padding: 0 0.5rem;
    perspective: 1000px;
    transition: transform 0.6s;
    height: 100%;
    min-width: 280px;
  }

  .card-content {
    position: relative;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 1.5rem;
    box-shadow: 0 10px 30px rgba($primary, 0.1);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    border: 1px solid rgba($primary, 0.05);
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    max-width: 350px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: linear-gradient(90deg, $primary, lighten($primary, 20%));
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba($primary, 0.15);

      .employee-image {
        transform: scale(1.05);
        box-shadow: 0 15px 30px rgba($primary, 0.2);
      }

      .social-links {
        transform: translateY(-5px);
      }
    }
  }

  .employee-image {
    width: 120px;
    height: 120px;
    margin: 0 auto 1.5rem;
    border-radius: 1rem;
    box-shadow: $shadow-lg;
    object-fit: cover;
    transition: all 0.4s ease;
    border: 4px solid white;
  }

  .employee-info {
    padding-top: 0;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .employee-name {
    font-size: $font-size-xl;
    font-weight: 800;
    color: $text-primary;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, $text-primary 0%, $primary 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .employee-role {
    margin-top: 0.5rem;
    font-size: $font-size-base * 0.875;
    color: $text-secondary;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.05em;
    opacity: 0.8;
  }

  .social-links {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    transition: all 0.3s ease;
  }

  .social-button {
    @include flex-center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.75rem;
    outline: none;
    color: white;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      transform: translateY(-3px) rotate(8deg);
      box-shadow: 0 10px 20px rgba($primary, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    }

    i {
      font-size: $font-size-base;
    }
  }
</style>
