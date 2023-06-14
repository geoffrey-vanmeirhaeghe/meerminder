<template>
  <a
    v-if="Link.Link.data !== null"
    class="flex items-center justify-between no-underline text-black p-5 rounded-xl bg-primary-200"
    :href="Link.Link.data.attributes.Slug"
    :target="Link.OpenInNewTab ? '_blank' : ''"
    :title="
      Link.Link.data.attributes.Title ? Link.Link.data.attributes.Title : ''
    "
  >
    <span class="flex flex-col max-w-md">
      <span class="text-xl font-bold">{{ Link.Title }}</span>
      <span class="mt-2 text-sm font-light">{{ Link.Subtitle }}</span>
    </span>
    <font-awesome-icon
      :icon="['fas', 'chevron-right']"
      class="ml-20 text-2xl text-primary-500"
    />
  </a>

  <a
    v-else-if="Link.ExternalLink !== null"
    class="flex items-center justify-between no-underline text-black p-5 rounded-xl bg-primary-200"
    :href="'//' + Link.ExternalLink"
    :target="Link.OpenInNewTab ? '_blank' : ''"
  >
    <span class="flex flex-col max-w-md">
      <span class="text-xl font-bold">{{ Link.Title }}</span>
      <span class="mt-2 text-sm font-light">{{ Link.Subtitle }}</span>
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
