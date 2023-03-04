<template>
  <div
    v-if="Title"
    class="w-full container flex justify-center"
    :class="'spacing-' + Settings.Spacing"
  >
    <HeadingMolecule v-if="Title" :Title="Title" />
  </div>
</template>

<script>
import HeadingMolecule from "~/components/molecules/HeadingMolecule.vue";

export default {
  props: ["Title", "Settings"],

  components: {
    HeadingMolecule,
  },
};
</script>
