<template>
  <div
    class="flex-grow border-gray-200 border rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
  >
    <article>
      <a
        :href="
          Card.Link.data
            ? Card.Link.data.attributes.Slug
            : Card.ExternalLink
            ? '//' + Card.ExternalLink
            : ''
        "
        :target="Card.OpenInNewTab ? '_blank' : ''"
        class="no-underline text-black"
      >
        <img
          v-if="Card.Image.data !== null"
          :src="strapiBaseUri + Card.Image.data.attributes.url"
          class="h-48 md:h-64 lg:h-48 xl:h-64 w-full object-cover"
        />
        <div
          v-else
          class="h-48 md:h-64 lg:h-48 xl:h-64 w-full object-cover bg-gray-200"
        ></div>
        <div
          v-if="Card.Label || Card.Title"
          class="p-4 border-t border-gray-200"
        >
          <p v-if="Card.Label" class="text-sm font-bold mb-2 text-primary-500">
            {{ Card.Label }}
          </p>
          <p v-if="Card.Title" class="text-base">{{ Card.Title }}</p>
        </div>
      </a>
    </article>
  </div>
</template>

<script>
export default {
  props: ["Card"],

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
