<template>
  <div>
    <div
      class="relative flex flex-row-reverse min-h-108 py-8 px-4 lg:px-8 justify-center items-center container-with-image bg-primary-500"
    >
      <img src="~/assets/img/header-mermaid.svg" class="absolute top-0 right-0 h-full object-cover" />
      <div class="w-full mx-auto max-w-3xl xl:max-w-7xl mb-16 mt-32 py-8 z-10">
        <TextMolecule
          v-if="heroBanner.HeroSubText"
          :Text="heroBanner.HeroSubText"
          class="mt-8 text-white max-w-full md:text-center leading-loose"
        />
        <div class="flex mt-8 md:mx-auto text-center md:justify-center ">
          <ButtonMolecule
            v-if="heroBanner.HeroCtaButton"
            :Button="heroBanner.HeroCtaButton"
            class="mt-6 md:mx-auto inverted-colors"
          />
        </div>
      </div>
    </div>
    <div class="relative xl:mb-32">
      <MascotTail class="absolute w-144 lg:w-full top-0 left-0 transform -translate-x-1/2 -translate-y-36 lg:translate-y-10" />
      <SwirlBanner :AnimationActive="true" class="transform -translate-y-3" />
      <SwirlBanner :AnimationActive="true" class="transform -translate-y-3 hidden lg:block" />
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
import SwirlBanner from "~/components/partials/SwirlBanner.vue";
import MascotTail from "~/components/partials/MascotTail.vue";

export default {
  components: {
    HeadingMolecule,
    TextMolecule,
    ButtonMolecule,
    SwirlBanner,
    MascotTail,
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
