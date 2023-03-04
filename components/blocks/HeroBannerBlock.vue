<template>
  <div
    :style="[
      heroBanner.HeroBackground.data
        ? {
            backgroundImage:
              'url(' +
              strapiBaseUri +
              heroBanner.HeroBackground.data.attributes.url +
              ')',
          }
        : '',
    ]"
    class="bg-center bg-cover relative"
  >
    <div
      class="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-gray-500 opacity-50"
    ></div>
    <div
      class="md:flex flex-row-reverse min-h-144 py-8 px-4 lg:px-8 justify-center items-center container-with-image relative"
      :class="heroBanner.HeroBackground.data ? '' : 'bg-blue-100'"
    >
      <div class="w-full md:w-1/2 xl:w-1/3 md:px-6">
        <ImageMolecule
          v-if="heroBanner.HeroFrontImage"
          :Image="heroBanner.HeroFrontImage"
          class="w-48 md:w-96 object-contain object-left md:object-center max-w-full md:mx-auto xl:ml-0"
        />
      </div>
      <div class="w-full md:w-1/2 xl:w-2/3 py-8">
        <div class="max-w-2xl mx-auto">
          <h1
            v-if="heroBanner.HeroTitle"
            class="font-bold text-white text-3xl xl:text-4xl leading-tight"
            :class="heroBanner.HeroBackground.data ? '' : 'text-blue-900'"
          >
            {{ heroBanner.HeroTitle }}
          </h1>
          <TextMolecule
            v-if="heroBanner.HeroSubText"
            :Text="heroBanner.HeroSubText"
            class="mt-8 text-white"
            :class="heroBanner.HeroBackground.data ? '' : 'text-blue-900'"
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
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";
import ButtonMolecule from "~/components/molecules/ButtonMolecule.vue";

export default {
  components: {
    HeadingMolecule,
    TextMolecule,
    ImageMolecule,
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
