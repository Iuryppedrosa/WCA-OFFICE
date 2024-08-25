<template>
  <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" data-aos="fade-in">
    <div class="px-6">
      <!-- Image -->
      <img
        alt="employee"
        :src="image"
        class="shadow-lg rounded-full max-w-full mx-auto"
        style="max-width: 120px"
      />
      <div class="pt-6 text-center">
        <h5 class="text-xl font-bold">{{ name }}</h5>
        <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
          {{ role }}
        </p>
        <!-- Social Media Buttons -->
        <div class="mt-6">
          <button
            v-for="(socialMedia, index) in socialMedias"
            :key="index"
            :class="[
              socialMedia.color,
              'text-white',
              'w-8',
              'h-8',
              'rounded-full',
              'outline-none',
              'focus:outline-none',
              'mr-1',
              'mb-1',
            ]"
            :type="'button'"
            @click="handleSocialMediaClick(socialMedia)"
          >
            <!-- Icon -->
            <i :class="[socialMedia.icon]"></i>
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
  data() {
    return {};
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
