<template>
  <div
    :style="[
      Image
        ? {
            backgroundImage: 'url(' + strapiBaseUri + Image.url + ')',
          }
        : '',
    ]"
    class="bg-center bg-cover relative"
    :class="Settings.Width + ' spacing-' + Settings.Spacing"
  >
    <div
      class="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-gray-500 opacity-50"
    ></div>
    <div
      class="container flex min-h-96 py-8 justify-center items-center flex-col container-with-image relative"
      :class="Image ? '' : 'bg-primary-500'"
    >
      <HeadingMolecule
        v-if="Title"
        :Title="Title"
        class="font-semibold text-white"
      />
      <TextMolecule
        v-if="Text"
        :Text="Text"
        class="text-center mt-4 text-white"
      />
      <ButtonMolecule
        v-if="Button"
        :Button="Button"
        class="mt-3 inverted-colors"
      />
    </div>
  </div>
</template>

<script>
// Molecules
import HeadingMolecule from "~/components/molecules/HeadingMolecule.vue";
import TextMolecule from "~/components/molecules/TextMolecule.vue";
import ButtonMolecule from "~/components/molecules/ButtonMolecule.vue";

export default {
  props: ["Title", "Text", "Button", "Image", "Settings"],

  components: {
    HeadingMolecule,
    TextMolecule,
    ButtonMolecule,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
