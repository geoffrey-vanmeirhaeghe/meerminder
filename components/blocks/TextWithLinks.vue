<template>
  <div class="container-right overflow-hidden" :class="'spacing-' + Settings.Spacing">
    <div
      class="md:flex"
      :class="SwitchOrder == false ? ' flex-row-reverse' : ''"
    >
      <div class="flex flex-shrink flex-col mb-12 md:mb-0">
        <div class="flex-shrink relative md:pr-24 pb-12">
          <ImageMolecule
            v-if="Image.data"
            :Image="Image"
            class="object-cover w-full rounded-xl md:rounded-l-none relative z-10"
          />
          <img src="~/assets/img/img-bg-waves.svg" class="absolute bottom-0 right-0 md:pr-12 transform translate-x-12 md:translate-x-0" />
        </div>
      </div>
      <div class="md:pl-8">
        <HeadingMolecule v-if="Title" :Title="Title" class="font-semibold" />
        <TextMolecule v-if="Text" :Text="Text" />
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
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";

export default {
  props: ["Image", "Title", "Text", "Links", "Settings", "SwitchOrder"],

  components: {
    HeadingMolecule,
    TextMolecule,
    LinkMolecule,
    ImageMolecule
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
