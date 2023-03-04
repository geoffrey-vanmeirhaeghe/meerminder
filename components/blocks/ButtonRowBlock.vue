<template>
  <div
    class="container flex flex-wrap space-between"
    :class="
      Settings.Width +
      ' spacing-' +
      Settings.Spacing +
      ' alignment-' +
      Alignment
    "
    v-if="Buttons"
  >
    <div
      v-for="Button in Buttons"
      :key="Button.id"
      class="w-full md:w-auto flex items-center mx-3"
    >
      <ButtonMolecule
        v-if="Button"
        :Button="Button"
        class="w-full md:w-auto flex flex-row justify-center items-center my-3 min-w-40"
      />
    </div>
  </div>
</template>

<script>
// Molecules
import ButtonMolecule from "~/components/molecules/ButtonMolecule.vue";

export default {
  props: ["Buttons", "Settings", "Alignment"],

  components: {
    ButtonMolecule,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
