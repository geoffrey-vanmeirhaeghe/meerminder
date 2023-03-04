<template>
  <div>
    <NuxtLogo />
    <div>
      <div v-for="Block in pages.data[0].attributes.Blocks" :key="Block.id">
        {{ Block.__typename }}
      </div>
    </div>
  </div>
</template>

<script>
import { PageQuery } from "~/graphql/queries/pages";

export default {
  name: "IndexPage",

  data() {
    return {
      pages: [],
    };
  },

  apollo: {
    pages: {
      prefetch: true,
      query: PageQuery,
      variables() {
        return { Slug: String(this.$route.params.Slug) };
      },
    },
  },
};
</script>
