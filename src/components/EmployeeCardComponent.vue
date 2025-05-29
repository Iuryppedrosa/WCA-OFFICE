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
  width: 100%;
  margin-bottom: 3rem;
  padding: 0 1rem;

  @include responsive(md) {
    width: 50%;
    margin-bottom: 0;
  }

  @include responsive(lg) {
    width: 25%;
  }
}

.card-content {
  padding: 0 1.5rem;
}

.employee-image {
  max-width: 120px;
  width: 100%;
  margin: 0 auto;
  border-radius: 9999px;
  box-shadow: $shadow-lg;
}

.employee-info {
  padding-top: 1.5rem;
  text-align: center;
}

.employee-name {
  font-size: $font-size-xl;
  font-weight: bold;
  color: $text-primary;
}

.employee-role {
  margin-top: 0.25rem;
  font-size: $font-size-base * 0.875;
  color: $text-secondary;
  text-transform: uppercase;
  font-weight: 600;
}

.social-links {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.social-button {
  @include flex-center;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  outline: none;
  color: white;
  transition: $transition-base;

  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-md;
  }

  i {
    font-size: $font-size-base;
  }
}
</style>
