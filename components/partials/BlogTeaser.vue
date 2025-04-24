<template>
  <div class="bg-primary-100">
    <div class="container py-8 lg:py-16">
      <h2 class="max-w-xl">De nieuwste digitale evoluties.</h2>
      <div class="flex items-start space-x-8">
        <BlogCardMolecule
        v-for="blog in blogs.data"
        :key="blog.id"
          :Title="blog.attributes.Title"
          :Link="blog.attributes.Slug"
          :Image="blog.attributes.Metadata.MetaImage"
          :Categories="blog.attributes.blog_categories"
          class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BlogOverviewQuery } from "~/graphql/queries/blog-overview";

// Molecules
import BlogCardMolecule from "~/components/molecules/BlogCardMolecule";

export default {
  name: "IndexPage",

  components: {
    // Partials
    BlogCardMolecule,
  },

  apollo: {
    blogs: {
      prefetch: true,
      query: BlogOverviewQuery,
    },
    blogCategories: {
      prefetch: true,
      query: BlogOverviewQuery,
    },
  },

  data() {
    return {
      metadescription: "",
      activeCategory: "",
    };
  },
};
</script>
