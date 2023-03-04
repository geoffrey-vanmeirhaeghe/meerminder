<template>
  <ul
    class="no-default-icon"
    :class="MobileNav ? 'text-base' : 'text-xs flex items-center'"
  >
    <li
      v-for="Link in Links"
      :key="Link.id"
      class="flex items-center"
      :class="MobileNav ? 'w-full text-center pl-0 flex-grow my-5' : 'my-2'"
    >
      <a
        :href="'/' + Link.attributes.Slug"
        class="no-underline uppercase"
        :class="
          MobileNav
            ? 'text-black text-center block w-full'
            : 'text-black hover:text-secondary-500'
        "
      >
        {{ Link.attributes.Title }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["Links", "MobileNav"],

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
