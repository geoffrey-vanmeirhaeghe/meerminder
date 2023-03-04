<template>
  <div>
    <Header />
    <div class="w-full overflow-hidden">
      <ModulePageBlocks
        :ModulePage="
          modulePage.data.attributes.Cases.data.attributes.Slug
            ? modulePage.data.attributes.Cases.data.attributes.Slug
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
          v-for="Category in casesCategories.data"
          :key="Category.id"
          :Category="Category"
          :ActiveCategory="activeCategory"
        />
      </div>

      <div
        class="container grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8"
      >
        <CaseCardMolecule
          v-for="Case in cases.data"
          :key="Case.id"
          :Title="Case.attributes.Title"
          :Link="Case.attributes.Slug"
          :Image="Case.attributes.Metadata.MetaImage"
          :Categories="Case.attributes.cases_categories"
          :class="
            JSON.stringify(Case.attributes.cases_categories.data).includes(
              activeCategory
            )
              ? ''
              : 'hidden'
          "
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ModulePagesQuery } from "~/graphql/queries/module-pages";
import { CasesOverviewQuery } from "~/graphql/queries/cases-overview";

// Partials
import Header from "~/components/partials/Header";
import Footer from "~/components/partials/Footer";
import ModulePageBlocks from "~/components/partials/ModulePageBlocks";

// Molecules
import CaseCardMolecule from "~/components/molecules/CaseCardMolecule";
import CategoryFilterPill from "~/components/molecules/filters/CategoryFilterPill";

export default {
  name: "IndexPage",

  components: {
    // Partials
    Header,
    Footer,
    ModulePageBlocks,
    CaseCardMolecule,
    CategoryFilterPill,
  },

  apollo: {
    modulePage: {
      prefetch: true,
      query: ModulePagesQuery,
    },
    cases: {
      prefetch: true,
      query: CasesOverviewQuery,
    },
    casesCategories: {
      prefetch: true,
      query: CasesOverviewQuery,
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
      }
    },
  },
};
</script>
