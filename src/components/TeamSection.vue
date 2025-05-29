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
  padding: 5rem 0 12rem;
  background-color: white;
}

.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-bottom: 6rem;
}

.header-content {
  width: 100%;
  padding: 0 1rem;

  @include responsive(lg) {
    width: 50%;
  }
}

.title {
  font-size: $font-size-3xl;
  font-weight: bold;
  color: $text-primary;
}

.description {
  font-size: $font-size-lg;
  line-height: 1.625;
  margin: 1rem;
  color: $text-secondary;
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
</style>
