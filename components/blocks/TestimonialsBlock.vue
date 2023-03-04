<template>
  <div class="container" :class="'spacing-' + Settings.Spacing">
    <div class="flex flex-wrap -mx-4 justify-center">
      <div
        v-for="Testimonial in Testimonials"
        :key="Testimonial.id"
        class="lg:w-1/2 2xl:w-1/4 flex-grow px-8 text-center justify-center max-w-lg mt-3"
      >
        <div class="bg-gray-100 rounded-2xl p-8 my-10">
          <ImageMolecule
            v-if="Testimonial.Image.data"
            :Image="Testimonial.Image"
            class="w-24 h-24 rounded-full object-cover inline-flex self-center transform -mt-24"
          />
          <h4 v-if="Testimonial.Title" class="mt-3 text-base font-semibold">
            {{ Testimonial.Title }}
          </h4>
          <TextMolecule
            v-if="Testimonial.Text"
            :Text="Testimonial.Text"
            class="text-center mt-6"
          />
          <div
            v-if="Testimonial.Author"
            class="text-sm italic flex items-center justify-center mt-6 text-blue-800"
          >
            <hr class="w-4 border-blue-800 mr-2 border" />
            <span>{{ Testimonial.Author }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Molecules
import TextMolecule from "~/components/molecules/TextMolecule.vue";
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";

export default {
  props: ["Testimonials", "Settings"],

  components: {
    TextMolecule,
    ImageMolecule,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
