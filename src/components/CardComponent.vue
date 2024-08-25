<template>
  <div :class="[mainCss]" data-aos="fade-right" :data-aos-delay="delay">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
    >
      <div class="px-4 py-5 flex-auto">
        <div
          :class="[
            'text-white',
            'p-3',
            'text-center',
            'inline-flex',
            'items-center',
            'justify-center',
            'w-12',
            'h-12',
            'mb-5',
            'shadow-lg',
            'rounded-full',
            colorCard,
          ]"
        >
          <i :class="[iconType]"></i>
        </div>
        <h6 class="text-xl font-semibold">{{ title }}</h6>
        <p class="mt-2 mb-4 text-gray-600">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardComponent",
  props: {
    mainCss: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    delay: {
      type: Number,
      required: true,
    },
    colorCard: {
      type: String,
      required: true,
    },
    iconType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
