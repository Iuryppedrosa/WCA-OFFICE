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
            title: "Qualidade Garantida",
            description:
              "Produtos de alta durabilidade com garantia estendida. Nosso compromisso é com a excelência e satisfação dos nossos clientes.",
            delay: 1200,
            colorCard: "red-bg",
            iconType: "fas fa-award",
            benefits: [
              "Garantia estendida de até 6 anos em produtos selecionados",
              "Materiais premium com certificação de qualidade",
              "Testes rigorosos de durabilidade e resistência",
              "Assistência técnica especializada em todo Brasil",
              "Peças de reposição originais garantidas",
            ],
          },
          {
            mainCss: "w-full md:w-4/12 px-4 text-center",
            title: "Atendimento Premium",
            description:
              "Equipe especializada disponível para auxiliar em todas as etapas, desde o projeto até a instalação do seu mobiliário.",
            delay: 1400,
            colorCard: "blue-bg",
            iconType: "fas fa-headset",
            benefits: [
              "Consultoria personalizada para seu projeto",
              "Acompanhamento dedicado em todas as etapas",
              "Equipe técnica altamente qualificada",
              "Suporte pós-venda especializado",
              "Prazo de entrega diferenciado",
            ],
          },
          {
            mainCss: "pt-6 w-full md:w-4/12 px-4 text-center",
            title: "Experiência Comprovada",
            description:
              "Mais de uma década transformando ambientes corporativos com soluções inovadoras e personalizadas.",
            delay: 1600,
            colorCard: "green-bg",
            iconType: "fas fa-chart-line",
            benefits: [
              "Mais de 1000 projetos executados com sucesso",
              "Portfólio diversificado de soluções",
              "Parceria com as principais marcas do mercado",
              "Equipe com vasta experiência no segmento",
              "Reconhecimento e credibilidade no mercado",
            ],
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
