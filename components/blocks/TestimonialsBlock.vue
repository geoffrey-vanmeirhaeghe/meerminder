<template>
  <div class="container" :class="'spacing-' + Settings.Spacing">
      <div
        class="w-full flex items-start"
      >
      <svg class="w-64 h-auto absolute lg:relative opacity-10 lg:opacity-100" xmlns="http://www.w3.org/2000/svg" width="122.5" height="83.75" viewBox="0 0 122.5 83.75">
        <path id="Path_18" data-name="Path 18" d="M73.75-175l-10,38.75v45H16.25v-45L47.5-175Zm65,0-10,38.75v45H81.25v-45L112.5-175Z" transform="translate(-16.25 175)" fill="#0033bf"/>
      </svg>
      <div class="ml-12 relative z-10">
        <TextMolecule
          v-if="Testimonials.Text"
          :Text="Testimonials.Text"
          class="mt-6 max-w-full wysiwyg-testimonial
          "
        />
        <div
          v-if="Testimonials.Author"
          class="text-sm flex items-center mt-6 text-black"
        >
        <span class="font-bold text-primary-500">{{ Testimonials.Author }}</span>
        <hr class="w-3 border-primary-500 mx-2 border" />
        <span>{{ Testimonials.Title }}</span>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
// Molecules
import TextMolecule from "~/components/molecules/TextMolecule.vue";

export default {
  props: ["Testimonials", "Settings"],

  components: {
    TextMolecule,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
