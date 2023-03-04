<template>
  <div class="w-full overflow-hidden">
    <Header />

    <CasesOverview
      v-if="
        pages.data[0].attributes.Slug ==
        modulePage.data.attributes.Cases.data.attributes.Slug
      "
    />

    <Contact
      v-else-if="
        pages.data[0].attributes.Slug ==
        modulePage.data.attributes.Contact.data.attributes.Slug
      "
    />

    <BlogOverview
      v-else-if="
        pages.data[0].attributes.Slug ==
        modulePage.data.attributes.Blog.data.attributes.Slug
      "
    />

    <Blocks
      v-else
      :pages="pages.data[0] ? pages.data[0].attributes.Blocks : ''"
    />
    <Footer />
  </div>
</template>

<script>
import { PageQuery } from "~/graphql/queries/pages";
import { ModulePagesQuery } from "~/graphql/queries/module-pages";

// Partials
import Header from "~/components/partials/Header";
import Footer from "~/components/partials/Footer";
import Blocks from "~/components/partials/Blocks";
import ModulePageBlocks from "~/components/partials/ModulePageBlocks";
import Contact from "~/components/partials/Contact";
import CasesOverview from "~/pages/cases/index";
import BlogOverview from "~/pages/blog/index";

export default {
  name: "IndexPage",

  components: {
    // Partials
    Header,
    Footer,
    Blocks,
    ModulePageBlocks,
    CasesOverview,
    BlogOverview,
    Contact,
  },

  apollo: {
    modulePage: {
      prefetch: true,
      query: ModulePagesQuery,
    },
    pages: {
      prefetch: true,
      query: PageQuery,
      variables() {
        return {
          Slug: String(this.$route.params.Slug),
        };
      },
    },
  },

  data() {
    return {
      pages: [],
      metadescription: "",
    };
  },

  head() {
    return {
      title:
        process.env.companyName +
        ` | ` +
        [
          this.pages.data[0].attributes.PageMetaData.MetaTitle
            ? this.pages.data[0].attributes.PageMetaData.MetaTitle
            : process.env.defaultMetaTitle,
        ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.pages.data[0].attributes.PageMetaData.MetaDescription
            ? this.pages.data[0].attributes.PageMetaData.MetaDescription
            : "",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: [
            this.pages.data[0].attributes.PageMetaData.MetaImage.data
              ? `${
                  process.env.strapiBaseUri +
                  this.pages.data[0].attributes.PageMetaData.MetaImage.data
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
