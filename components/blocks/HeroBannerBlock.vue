<template>
  <div
    class="bg-center bg-cover relative"
  >
    <div
      class="flex flex-row-reverse min-h-108 py-8 px-4 lg:px-8 justify-center items-center container-with-image relative bg-primary-500"
    >
      <div class="w-full mx-auto max-w-3xl xl:max-w-7xl mb-16">
        <TextMolecule
          v-if="heroBanner.HeroSubText"
          :Text="heroBanner.HeroSubText"
          class="mt-8 text-white max-w-full md:text-center leading-loose"
        />
        <div class="flex mt-8 md:mx-auto text-center md:justify-center ">
          <ButtonMolecule
            v-if="heroBanner.HeroCtaButton"
            :Button="heroBanner.HeroCtaButton"
            class="mt-6 md:mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Query import
import { Navigation } from "~/graphql/queries/navigation";

// Molecules
import HeadingMolecule from "~/components/molecules/HeadingMolecule.vue";
import TextMolecule from "~/components/molecules/TextMolecule.vue";
import ButtonMolecule from "~/components/molecules/ButtonMolecule.vue";

export default {
  components: {
    HeadingMolecule,
    TextMolecule,
    ButtonMolecule,
  },

  apollo: {
    heroBanner: {
      prefetch: true,
      query: Navigation,
      update: (data) => data.navigation.data.attributes.HeaderHero,
    },
  },

  data() {
    return {
      heroBanner: [],
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
