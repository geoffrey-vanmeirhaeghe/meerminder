<template>
  <div class="w-full overflow-hidden">
    <Header />
    <div class="pb-6">
      <ImageMolecule
        v-if="blogs.data[0].attributes.BlogMetaData.MetaImage.data"
        :Image="blogs.data[0].attributes.BlogMetaData.MetaImage"
        class="h-72 sm:h-96 object-cover"
      ></ImageMolecule>
      <div
        v-else
        class="w-full md:w-1/2 h-72 sm:h-96 md:h-144 object-cover bg-primary-100"
      ></div>
      <div class="container mt-6 md:mt-12">
        <h1 v-if="blogs.data[0].attributes.Title" class="mb-0">
          {{ blogs.data[0].attributes.Title }}
        </h1>
        <div class="font-medium text-black flex flex-wrap mt-3">
          <p v-if="blogs.data[0].attributes.Date" class="text-xs mb-0 mr-4">
            {{ blogs.data[0].attributes.Date }}
          </p>
        </div>
        <div v-if="blogs.data[0].attributes.blog_categories.data" class="mt-6">
          <a
            v-for="category in blogs.data[0].attributes.blog_categories.data"
            :key="category.id"
            :href="'category/' + category.attributes.slug"
            class="text-xs px-3 py-1 rounded-full border border-primary-200 mr-4 mb-0 no-underline text-primary-400 hover:bg-primary-400 hover:text-white hover:border-primary-400"
            >{{ category.attributes.Title }}</a
          >
        </div>
      </div>
    </div>
    <Blocks :pages="blogs.data[0] ? blogs.data[0].attributes.Blocks : ''" />
    <Footer />
  </div>
</template>

<script>
import { BlogQuery } from "~/graphql/queries/blogs";

// Partials
import Header from "~/components/partials/Header";
import Footer from "~/components/partials/Footer";
import Blocks from "~/components/partials/Blocks";
import ImageMolecule from "~/components/molecules/ImageMolecule";
import TextMolecule from "~/components/molecules/TextMolecule";

export default {
  name: "IndexPage",

  components: {
    // Partials
    Header,
    Footer,
    Blocks,
    ImageMolecule,
    TextMolecule,
  },

  apollo: {
    blogs: {
      prefetch: true,
      query: BlogQuery,
      variables() {
        return {
          Slug: String(this.$route.params.Blog),
        };
      },
    },
  },

  data() {
    return {
      blogs: [],
      metadescription: "",
    };
  },

  head() {
    return {
      title:
        process.env.companyName +
        ` | ` +
        [
          this.blogs.data[0].attributes.BlogMetaData.MetaTitle
            ? this.blogs.data[0].attributes.BlogMetaData.MetaTitle
            : process.env.defaultMetaTitle,
        ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.blogs.data[0].attributes.BlogMetaData.MetaDescription
            ? this.blogs.data[0].attributes.BlogMetaData.MetaDescription
            : "",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: [
            this.blogs.data[0].attributes.BlogMetaData.MetaImage.data
              ? `${
                  process.env.strapiBaseUri +
                  this.blogs.data[0].attributes.BlogMetaData.MetaImage.data
                    .attributes.url
                }`
              : "",
          ],
        },
      ],
    };
  },
};
</script>
