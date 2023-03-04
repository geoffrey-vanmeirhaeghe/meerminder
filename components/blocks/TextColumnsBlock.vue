<template>
  <div class="container" :class="'spacing-' + Settings.Spacing">
    <div class="flex flex-wrap -mx-8">
      <div
        v-for="Column in Columns"
        :key="Column.id"
        class="lg:w-1/2 xl:w-1/4 flex-grow px-8 mb-12"
      >
        <h4 v-if="Column.Title" class="font-semibold">
          {{ Column.Title }}
        </h4>
        <TextMolecule v-if="Column.Text" :Text="Column.Text" />
      </div>
    </div>
  </div>
</template>

<script>
// Molecules
import TextMolecule from "~/components/molecules/TextMolecule.vue";

export default {
  props: ["Columns", "Settings"],

  components: {
    TextMolecule,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
