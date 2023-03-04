<template>
  <div
    class="container flex justify-center"
    :class="'spacing-' + Settings.Spacing + ' alignment-' + Alignment"
  >
    <TextMolecule v-if="Text" :Text="Text" />
  </div>
</template>

<script>
import TextMolecule from "~/components/molecules/TextMolecule.vue";

export default {
  props: ["Text", "Settings", "Alignment"],

  components: {
    TextMolecule,
  },
};
</script>
