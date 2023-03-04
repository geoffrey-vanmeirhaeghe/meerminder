<template>
  <a
    v-if="Link.Link.data !== null"
    class="flex items-center justify-between no-underline text-black pb-8 border-b border-gray-300 transform transition-all duration-300 hover:translate-x-6"
    :href="Link.Link.data.attributes.Slug"
    :target="Link.OpenInNewTab ? '_blank' : ''"
    :title="
      Link.Link.data.attributes.Title ? Link.Link.data.attributes.Title : ''
    "
  >
    <span class="flex flex-col max-w-sm">
      <span class="text-2xl font-semibold">{{ Link.Title }}</span>
      <span class="mt-2 font-light">{{ Link.Subtitle }}</span>
    </span>
    <font-awesome-icon
      :icon="['fas', 'chevron-right']"
      class="ml-20 text-2xl text-primary-500"
    />
  </a>

  <a
    v-else-if="Link.ExternalLink !== null"
    class="flex items-center justify-between no-underline text-black pb-8 border-b border-gray-300 transform transition-all duration-300 hover:translate-x-6"
    :href="'//' + Link.ExternalLink"
    :target="Link.OpenInNewTab ? '_blank' : ''"
  >
    <span class="flex flex-col max-w-sm">
      <span class="text-2xl font-semibold">{{ Link.Title }}</span>
      <span class="mt-2 font-light">{{ Link.Subtitle }}</span>
    </span>
    <font-awesome-icon
      :icon="['fas', 'chevron-right']"
      class="ml-20 text-2xl text-primary-500"
    />
  </a>
</template>

<script>
export default {
  props: ["Link"],
};
</script>
