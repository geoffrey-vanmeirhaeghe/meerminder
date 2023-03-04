<template>
  <div
    :class="
      [
        Settings.Width == 'FullWidth'
          ? Settings.Width
          : Settings.Width == 'WideWidth'
          ? Settings.Width
          : 'FullWidth',
      ] +
      ' spacing-' +
      Settings.Spacing
    "
  >
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 md:grid-rows-3 bg-secondary-500"
    >
      <div
        v-for="Block in Blocks"
        :key="Block.id"
        class="min-h-64 bg-cover flex overflow-hidden relative"
        :class="
          Block.Type == 'ImageBlockLarge'
            ? 'col-span-1 md:col-span-2 lg:col-span-4 row-span-1 md:row-span-2 2xl:row-span-2'
            : Block.Type == 'ImageBlockSmall'
            ? 'col-span-1 md:col-span-2 row-span-1'
            : 'col-span-1 md:col-span-2 row-span-1 md:row-span-3 bg-white'
        "
        :style="[
          Block.Type == 'TextBlock'
            ? ''
            : Block.Image.data
            ? {
                backgroundImage:
                  'url(' +
                  strapiBaseUri +
                  Block.Image.data.attributes.url +
                  ')',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }
            : '',
        ]"
      >
        <div
          class="w-full h-full absolute bg-black opacity-60"
          :class="Block.Type == 'TextBlock' ? 'hidden' : ''"
        ></div>
        <div
          class="w-full flex items-end"
          :class="
            Block.Type == 'TextBlock'
              ? ''
              : ' transform hover:-translate-x-full transition-all duration-300 ease-in-out delay-200'
          "
        >
          <h4
            v-if="Block.Title"
            class="self-end leading-tight w-full px-8 flex-grow-0 flex-shrink-0"
            :class="
              Block.Type == 'TextBlock'
                ? 'text-black text-4xl lg:text-6xl xl:text-5xl 2xl:text-6xl text-left font-thin py-4'
                : 'text-white text-lg text-center font-bold'
            "
          >
            {{ Block.Title }}
          </h4>

          <div
            v-if="Block.Text"
            v-html="Block.Text"
            class="text-white text-center w-full px-8 flex-grow-0 flex-shrink-0 bg-secondary-500 h-full flex flex-col justify-end pt-4 pb-2 bg-opacity-75"
            :class="Block.Type == 'TextBlock' ? 'hidden' : ''"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Molecules
import TextMolecule from "~/components/molecules/TextMolecule.vue";
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";

export default {
  props: ["Blocks", "Settings"],

  components: {
    TextMolecule,
    ImageMolecule,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
