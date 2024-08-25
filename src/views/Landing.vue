<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="{
            backgroundImage: `url(${require('@/assets/img/banner_image.jpg')})`,
          }"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1
                  class="text-white font-semibold text-5xl"
                  data-aos="fade-up"
                >
                  Mobiliário corporativo você encontra aqui!
                </h1>
                <p
                  class="mt-4 text-lg text-gray-300"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                >
                  This is a simple example of a Landing Page you can build using
                  Tailwind Starter Kit. It features multiple CSS components
                  based on the Tailwindcss design system.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <card-component
              v-for="(card, index) in cards"
              :key="index"
              v-bind="card"
            ></card-component>
          </div>
          <!-- FIM DOS CARDS -->
          <div class="flex flex-wrap items-center mt-32">
            <div
              class="w-full md:w-5/12 px-4 mr-auto ml-auto"
              data-aos="zoom-in-right"
            >
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                class="font-bold text-gray-800 mt-8"
                >Check Tailwind Starter Kit!</a
              >
            </div>
            <div
              class="w-full md:w-4/12 px-4 mr-auto ml-auto"
              data-aos="flip-left"
              data-aos-delay="1000"
            >
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div
          class="container mx-auto px-4"
          data-aos="flip-right"
          data-aos-delay="1000"
        >
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
              />
            </div>
            <div
              class="w-full md:w-5/12 ml-auto mr-auto px-4"
              data-aos="zoom-in-left"
            >
              <div class="md:pr-12">
                <div
                  class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">A growing company</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Amazing page examples</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-20 pb-48">
        <!-- Section Container -->
        <div class="container mx-auto px-4">
          <!-- Text Box -->
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Aqui está o nosso time!</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record maximum.
              </p>
            </div>
          </div>
          <!-- Flex Row Container -->
          <div class="flex flex-wrap">
            <employee-card-component
              v-for="(employee, index) in employees"
              :key="index"
              v-bind="employee"
              :social-medias="employee.socialMedias"
            ></employee-card-component>
          </div>
        </div>
      </section>
      <section id="contato-localizacao" class="pt-5 pb-48">
        <div class="flex flex-wrap items-center mt-32">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Localização / Contato
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
            >
              Séra um prazer enorme atendê-lo. Venha nos visitar ou entre em
              contato:
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white-600 bg-blue-200 mr-3"
                      ><i class="fas fa-location-dot"></i
                    ></span>
                  </div>
                  <div>
                    <a
                      href="https://www.google.com/maps/dir//Wca+Office+M%C3%B3veis+para+Escrit%C3%B3rio+Av.+Nicodemos+Alves+dos+Santos,+322+-+Saraiva+Uberl%C3%A2ndia+-+MG+38413-048/@-18.920836,-48.2643491,20z/data=!4m5!4m4!1m0!1m2!1m1!1s0x94a445a6b88eb3d7:0x97c43bb2a44420e7"
                    >
                      <h4 class="text-gray-600">
                        Av. Nicodemos Alves dos Santos, 322 - B. Saraiva
                      </h4>
                    </a>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white-600 bg-blue-200 mr-3"
                      ><i class="fa-brands fa-whatsapp"></i
                    ></span>
                  </div>
                  <div>
                    <a href="https://wa.me/5534997799996">
                      <h4 class="text-gray-600">(34) 9.9979-9996</h4>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.5225126919507!2d-48.26440971157546!3d-18.92050219882377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445a6b88eb3d7%3A0x97c43bb2a44420e7!2sWca%20Office%20M%C3%B3veis%20para%20Escrit%C3%B3rio!5e0!3m2!1spt-BR!2sbr!4v1724442131446!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-20 relative block bg-gray-900">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">Build something</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Put the potentially record low maximum sea ice extent tihs year
                down to low ice. According to the National Oceanic and
                Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>
          <div
            class="flex flex-wrap mt-12 justify-center"
            data-aos="fade-in"
            data-aos-delay="400"
          >
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                Excelent Services
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-poll text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>
              <p class="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
                <!-- Arrumar o formulário para disparar email-->
                <form
                  action="https://getform.io/f/ajjexqma"
                  method="POST"
                  class="flex-auto p-5 lg:p-10"
                >
                  <h4 class="text-2xl font-semibold">Solicite Orçamento</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete o formulário e entraremos em contato.
                  </p>

                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >Nome Completo</label
                    >
                    <input
                      type="text"
                      name="name"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Nome Completo"
                      required
                      style="transition: all 0.15s ease 0s"
                    />
                  </div>

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email"
                      >Email</label
                    >
                    <input
                      type="email"
                      name="email"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      required
                      style="transition: all 0.15s ease 0s"
                    />
                  </div>

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >Mensagem</label
                    >
                    <textarea
                      rows="4"
                      cols="80"
                      name="message"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Descreva qual mobiliário você possui interesse..."
                      required
                    ></textarea>
                  </div>

                  <!-- Honeypot to prevent spam -->
                  <input
                    type="hidden"
                    name="_gotcha"
                    style="display: none !important"
                  />
                  <div class="text-center mt-6">
                    <button
                      type="submit"
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      style="transition: all 0.15s ease 0s"
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import CardComponent from "../components/CardComponent.vue";
import EmployeeCardComponent from "../components/EmployeeCardComponent.vue";

export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent,
    CardComponent,
    EmployeeCardComponent,
  },
  data() {
    return {
      cards: [
        {
          mainCss: "lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center",
          title: "Garantia",
          description:
            "Oferecemos vários produtos com garantia.... explicar mais",
          delay: 1200,
          colorCard: "bg-red-400",
          iconType: "fas fa-award",
        },
        {
          mainCss: "w-full md:w-4/12 px-4 text-center",
          title: "Suporte ao Cliente",
          description:
            "Oferecemos suporte ao cliente 24 horas por dia, 7 dias por semana.",
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
