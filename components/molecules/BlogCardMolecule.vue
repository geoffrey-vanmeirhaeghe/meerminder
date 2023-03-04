<template>
  <a
    :href="'/blog/' + Link"
    class="border border-gray-200 rounded-xl no-underline text-black overflow-hidden"
  >
    <ImageMolecule :Image="Image" />
    <div class="p-4">
      <div v-if="Categories" class="mb-4 -ml-1">
        <div
          v-for="category in Categories.data"
          :key="category.id"
          :href="'category/' + category.attributes.Slug"
          class="text-xs px-2 py-1 rounded-full border border-blue-200 mr-2 mb-0 no-underline text-blue-400 inline-block"
        >
          {{ category.attributes.Title }}
        </div>
      </div>
      <p class="font-bold text-base">{{ Title }}</p>
      <p class="text-sm text-blue-500 flex items-center">
        Lees het artikel
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="ml-3 text-xs"
        />
      </p>
    </div>
  </a>
</template>

<script>
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";

export default {
  props: [
    "Link",
    "Image",
    "Title",
    "Date",
    "Categories",
    "ClientName",
    "ClientUrl",
  ],

  components: {
    ImageMolecule,
  },
};
</script>
