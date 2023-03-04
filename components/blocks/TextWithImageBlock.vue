<template>
  <div class="container" :class="'spacing-' + Settings.Spacing">
    <div
      class="lg:flex justify-between items-center lg:-mx-5"
      :class="SwitchOrder == false ? ' flex-row-reverse' : ''"
    >
      <div class="lg:w-1/2">
        <ImageMolecule v-if="Image" :Image="Image" />
      </div>
      <div class="lg:w-1/2 lg:px-16 py-12">
        <TextMolecule v-if="Text" :Text="Text" class="container" />
        <div class="container max-w-2xl mt-8">
          <div class="inline-block">
            <ButtonMolecule
              v-if="Button"
              :Button="Button"
              class="inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Molecules
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";
import TextMolecule from "~/components/molecules/TextMolecule.vue";
import ButtonMolecule from "~/components/molecules/ButtonMolecule.vue";

export default {
  props: ["Text", "Button", "Image", "Settings", "SwitchOrder"],

  components: {
    ImageMolecule,
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
