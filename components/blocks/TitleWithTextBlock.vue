<template>
  <div class="container" :class="'spacing-' + Settings.Spacing">
    <div
      class="lg:flex justify-between lg:-mx-5"
      :class="SwitchOrder == false ? ' flex-row-reverse' : ''"
    >
      <HeadingMolecule
        v-if="Title"
        :Title="Title"
        class="font-semibold lg:px-5"
      />
      <TextMolecule v-if="Text" :Text="Text" class="lg:px-5" />
    </div>
  </div>
</template>

<script>
// Molecules
import HeadingMolecule from "~/components/molecules/HeadingMolecule.vue";
import TextMolecule from "~/components/molecules/TextMolecule.vue";

export default {
  props: ["Title", "Text", "Settings", "SwitchOrder"],

  components: {
    HeadingMolecule,
    TextMolecule,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
