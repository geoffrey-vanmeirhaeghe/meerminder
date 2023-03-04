<template>
  <div>
    <Header
      :HeroActive="
        modulePage.data.attributes.Home.data.attributes.Slug ? true : ''
      "
      class="bg-primary-500"
    />
    <ModulePageBlocks
      :ModulePage="
        modulePage.data.attributes.Home.data.attributes.Slug
          ? modulePage.data.attributes.Home.data.attributes.Slug
          : ''
      "
    />
    <Footer />
  </div>
</template>

<script>
import { ModulePagesQuery } from "~/graphql/queries/module-pages";

// Partials
import Header from "~/components/partials/Header";
import Footer from "~/components/partials/Footer";
import ModulePageBlocks from "~/components/partials/ModulePageBlocks";

export default {
  name: "IndexPage",

  components: {
    // Partials
    Header,
    Footer,
    ModulePageBlocks,
  },

  apollo: {
    modulePage: {
      prefetch: true,
      query: ModulePagesQuery,
    },
  },

  data() {
    return {
      pages: [],
      modulePage: [],
      metadescription: "",
    };
  },
};
</script>
