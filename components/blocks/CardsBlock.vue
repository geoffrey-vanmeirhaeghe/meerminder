<template>
  <div
    class="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
    :class="'spacing-' + Settings.Spacing"
  >
    <div
      v-for="Card in Cards"
      :key="Card.id"
      class="w-full flex flex-wrap items-start"
    >
      <CardMolecule v-if="Card" :Card="Card" class="w-full md:w-auto" />
    </div>
  </div>
</template>

<script>
// Molecules
import CardMolecule from "~/components/molecules/CardMolecule.vue";

export default {
  props: ["Cards", "Settings"],

  components: {
    CardMolecule,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
