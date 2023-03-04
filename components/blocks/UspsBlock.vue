<template>
  <div class="container" :class="'spacing-' + Settings.Spacing">
    <div class="flex flex-wrap -mx-8 justify-center">
      <div
        v-for="Usp in Usps"
        :key="Usp.id"
        class="lg:w-1/2 xl:w-1/4 flex-grow px-8 mb-12 text-center justify-center max-w-lg"
      >
        <div v-if="Usp.Icon" class="text-4xl">
          <font-awesome-icon :icon="Usp.Icon" class="ml-3 text-4xl" />
        </div>
        <h4 v-if="Usp.Title" class="mt-5">{{ Usp.Title }}</h4>
        <TextMolecule v-if="Usp.Text" :Text="Usp.Text" class="text-center" />
      </div>
    </div>
  </div>
</template>

<script>
// Molecules
import TextMolecule from "~/components/molecules/TextMolecule.vue";

export default {
  props: ["Usps", "Settings"],

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
