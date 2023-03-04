<template>
  <div>
    <div class="w-full overflow-hidden">
      <ModulePageBlocks
        :ModulePage="
          modulePage.data.attributes.Blog.data.attributes.Slug
            ? modulePage.data.attributes.Blog.data.attributes.Slug
            : ''
        "
      />

      <div class="container flex items-center mt-6">
        <div>
          <font-awesome-icon
            :icon="['fas', 'tag']"
            class="mr-3 text-sm text-primary-500"
          /><span class="font-medium text-black mr-4 hidden md:inline-block"
            >Filter:</span
          >
        </div>
        <CategoryFilterPill
          @clicked="onClickChild"
          v-for="Category in blogCategories.data"
          :key="Category.id"
          :Category="Category"
          :ActiveCategory="activeCategory"
        />
      </div>

      <div
        class="container grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8"
      >
        <BlogCardMolecule
          v-for="blog in blogs.data"
          :key="blog.id"
          :Title="blog.attributes.Title"
          :Link="blog.attributes.Slug"
          :Image="blog.attributes.Metadata.MetaImage"
          :Categories="blog.attributes.blog_categories"
          :class="
            JSON.stringify(blog.attributes.blog_categories.data).includes(
              activeCategory
            )
              ? ''
              : 'hidden'
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ModulePagesQuery } from "~/graphql/queries/module-pages";
import { BlogOverviewQuery } from "~/graphql/queries/blog-overview";

// Partials
import Header from "~/components/partials/Header";
import Footer from "~/components/partials/Footer";
import ModulePageBlocks from "~/components/partials/ModulePageBlocks";

// Molecules
import BlogCardMolecule from "~/components/molecules/BlogCardMolecule";
import CategoryFilterPill from "~/components/molecules/filters/CategoryFilterPill";

export default {
  name: "IndexPage",

  components: {
    // Partials
    Header,
    Footer,
    ModulePageBlocks,
    BlogCardMolecule,
    CategoryFilterPill,
  },

  apollo: {
    modulePage: {
      prefetch: true,
      query: ModulePagesQuery,
    },
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
      pages: [],
      modulePage: [],
      metadescription: "",
      activeCategory: "",
    };
  },

  methods: {
    onClickChild(value) {
      if (this.activeCategory == value) {
        this.activeCategory = "";
      } else {
        this.activeCategory = value;
        console.log(this.activeCategory);
      }
    },
  },
};
</script>
