<template>
  <section class="team-section">
    <div class="container">
      <div class="header">
        <div class="header-content">
          <h2 class="title">Nosso time</h2>
          <p class="description">
            Profissionais dedicados para transformar seu ambiente corporativo.
          </p>
        </div>
      </div>
      <div class="team-grid">
        <employee-card-component
          v-for="(employee, index) in employees"
          :key="index"
          v-bind="employee"
          :social-medias="employee.socialMedias"
        ></employee-card-component>
      </div>
    </div>
  </section>
</template>

<script>
  import EmployeeCardComponent from "./EmployeeCardComponent.vue";
  export default {
    name: "TeamSection",
    components: { EmployeeCardComponent },
    props: {
      employees: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .team-section {
    padding: 8rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
    position: relative;
    overflow: hidden;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      background: radial-gradient(circle at center, rgba($primary, 0.03) 0%, transparent 50%);
      animation: rotate 60s linear infinite;
      z-index: 0;
    }
  }

  .container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-bottom: 6rem;
    animation: fadeInUp 1s ease;
  }

  .header-content {
    width: 100%;
    max-width: 800px;
    padding: 0 1rem;

    @include responsive(lg) {
      width: 70%;
    }
  }

  .title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    color: $text-primary;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, $text-primary 0%, $primary 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
  }

  .description {
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    line-height: 1.7;
    margin: 0 auto;
    color: $text-secondary;
    max-width: 600px;
    opacity: 0.9;
  }

  .team-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    @include responsive(lg) {
      flex-direction: row;
      justify-content: center;
      gap: 3rem;
    }
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

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
