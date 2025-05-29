<template>
  <div>
    <navbar-component />
    <main>
      <hero-section />
      <services-section :cards="cards" />
      <team-section :employees="employees" />
      <contact-section />
      <budget-form-section />
    </main>
    <footer-component />
  </div>
</template>
<script>
  import NavbarComponent from "../components/Navbar.vue";
  import FooterComponent from "../components/Footer.vue";
  import HeroSection from "../components/HeroSection.vue";
  import ServicesSection from "../components/ServicesSection.vue";
  import TeamSection from "../components/TeamSection.vue";
  import ContactSection from "../components/ContactSection.vue";
  import BudgetFormSection from "../components/BudgetFormSection.vue";

  export default {
    name: "landing-page",
    components: {
      NavbarComponent,
      FooterComponent,
      HeroSection,
      ServicesSection,
      TeamSection,
      ContactSection,
      BudgetFormSection,
    },
    data() {
      return {
        cards: [
          {
            mainCss: "lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center",
            title: "Garantia",
            description: "Oferecemos vários produtos com garantia.... explicar mais",
            delay: 1200,
            colorCard: "bg-red-400",
            iconType: "fas fa-award",
          },
          {
            mainCss: "w-full md:w-4/12 px-4 text-center",
            title: "Suporte ao Cliente",
            description: "Oferecemos suporte ao cliente 24 horas por dia, 7 dias por semana.",
            delay: 1400,
            colorCard: "bg-blue-400",
            iconType: "fas fa-retweet",
          },
          {
            mainCss: "pt-6 w-full md:w-4/12 px-4 text-center",
            title: "Empresa de renome",
            description:
              "Estamos no mercado há mais de 10 anos, com mais de 1000 clientes satisfeitos.",
            delay: 1600,
            colorCard: "bg-green-400",
            iconType: "fas fa-fingerprint",
          },
        ],
        employees: [
          {
            name: "Giovanna Camilo Rezende",
            role: "Comercial, Marketing e Estratégia",
            image: require("@/assets/img/employees/Giovanna.jpg"),
            socialMedias: [
              {
                type: "email",
                icon: "fa-solid fa-envelope",
                color: "bg-blue-400",
                email: "giovanna.camilo1@gmail.com",
              },
              {
                type: "instagram",
                icon: "fab fa-instagram",
                color: "bg-blue-600",
                link: "https://www.instagram.com/giovanna_crezende/",
              },
              {
                type: "linkedin",
                icon: "fa-brands fa-linkedin",
                color: "bg-pink-500",
                link: "https://www.linkedin.com/in/giovanna-rezende-8162652b0/",
              },
            ],
          },
          {
            name: "Marli Castro Rezende",
            role: "CEO",
            image: require("@/assets/img/employees/Marli (2).png"),
            socialMedias: [
              {
                type: "email",
                icon: "fa-solid fa-envelope",
                color: "bg-blue-400",
                email: "giovanna.camilo1@gmail.com",
              },
              {
                type: "instagram",
                icon: "fab fa-instagram",
                color: "bg-blue-600",
                link: "https://www.instagram.com/marliccr/",
              },
              {
                type: "linkedin",
                icon: "fa-brands fa-linkedin",
                color: "bg-pink-500",
                link: "https://www.linkedin.com/company/wca-office/posts/?feedView=all",
              },
            ],
          },
        ],
      };
    },
  };
</script>
