<template>
  <div
    class="flex justify-center"
    :class="Settings.Width + ' spacing-' + Settings.Spacing"
  >
    <ImageMolecule v-if="Image" :Image="Image" />
  </div>
</template>

<script>
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";

export default {
  props: ["Image", "Settings"],

  components: {
    ImageMolecule,
  },
};
</script>
