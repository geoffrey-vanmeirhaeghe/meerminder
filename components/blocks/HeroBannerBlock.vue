<template>
  <div
    class="bg-center bg-cover relative"
  >
    <div
      class="md:flex flex-row-reverse min-h-144 py-8 px-4 lg:px-8 justify-center items-center container-with-image relative bg-primary-500"
    >
      <div class="w-full md:w-1/2 xl:w-2/3 py-8">
        <div class="max-w-2xl mx-auto">
          <h1
            v-if="heroBanner.HeroTitle"
            class="font-bold text-white text-3xl xl:text-4xl leading-tight"
          >
            {{ heroBanner.HeroTitle }}
          </h1>
          <TextMolecule
            v-if="heroBanner.HeroSubText"
            :Text="heroBanner.HeroSubText"
            class="mt-8 text-white"
          />
          <div class="inline-block mt-4">
            <ButtonMolecule
              v-if="heroBanner.HeroCtaButton"
              :Button="heroBanner.HeroCtaButton"
              class="mt-3 inverted-colors"
            />
          </div>
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
