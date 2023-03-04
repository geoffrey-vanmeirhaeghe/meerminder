<template>
  <div class="container" :class="'spacing-' + Settings.Spacing">
    <div
      class="lg:flex justify-between lg:-mx-5"
      :class="SwitchOrder == false ? ' flex-row-reverse' : ''"
    >
      <div class="lg:px-5">
        <HeadingMolecule v-if="Title" :Title="Title" class="font-semibold" />
        <TextMolecule v-if="Text" :Text="Text" />
      </div>
      <div class="lg:px-5 lg:-mt-8">
        <div v-for="Link in Links" :key="Link.id">
          <LinkMolecule :Link="Link" class="mt-8" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Molecules
import HeadingMolecule from "~/components/molecules/HeadingMolecule.vue";
import TextMolecule from "~/components/molecules/TextMolecule.vue";
import LinkMolecule from "~/components/molecules/LinkMolecule.vue";

export default {
  props: ["Title", "Text", "Links", "Settings", "SwitchOrder"],

  components: {
    HeadingMolecule,
    TextMolecule,
    LinkMolecule,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
