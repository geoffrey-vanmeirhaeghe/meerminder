<template>
  <div class="container" :class="'spacing-' + Settings.Spacing">
    <div class="">
      <div v-for="Marker in Markers" :key="Marker.id" class="">
        <div class="flex flex-row-reverse md:flex-row">
          <div class="w-full md:w-5/12 pb-24 md:text-right pt-1 md:pt-2">
            <div class="md:hidden mb-4 max-w-xs">
              <ImageMolecule
                v-if="Marker.Image.data"
                :Image="Marker.Image"
                class="object-cover inline-flex self-center transform max-h-96"
              />
            </div>
            <h4 class="font-bold">{{ Marker.Title }}</h4>
            <TextMolecule v-if="Marker.Text" :Text="Marker.Text" />
          </div>
          <div class="w-2/12 flex md:justify-center pr-8 md:px-8">
            <div class="relative min-w-1">
              <p
                v-if="Marker.Label"
                class="z-10 relative md:py-3 mb-0 bg-white text-center text-sm font-semibold text-black"
              >
                {{ Marker.Label }}
              </p>
              <div
                v-if="Marker.Label"
                class="w-full flex justify-center relative z-10"
              >
                <div class="bg-gray-400 w-3 h-3 rounded-full"></div>
              </div>
              <div class="h-full w-full absolute top-0 flex justify-center">
                <div
                  class="h-full w-px border-l border-gray-300 border-dashed"
                ></div>
              </div>
            </div>
          </div>
          <div class="hidden md:block md:w-5/12 pb-24 pt-4">
            <ImageMolecule
              v-if="Marker.Image.data"
              :Image="Marker.Image"
              class="object-cover inline-flex self-center transform max-h-96"
            />
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
  props: ["Markers", "Settings"],

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
