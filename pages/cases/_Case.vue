<template>
  <div class="w-full overflow-hidden">
    <Header />
    <div class="flex flex-wrap items-center">
      <ImageMolecule
        v-if="cases.data[0].attributes.CaseMetaData.MetaImage.data"
        :Image="cases.data[0].attributes.CaseMetaData.MetaImage"
        class="md:w-1/2 h-72 sm:h-96 md:h-144 object-cover"
      ></ImageMolecule>
      <div
        v-else
        class="w-full md:w-1/2 h-72 sm:h-96 md:h-144 object-cover bg-blue-100"
      ></div>
      <div class="md:w-1/2 pt-4 px-4 md:pt-0 md:px-16">
        <h1 v-if="cases.data[0].attributes.Title" class="mb-0">
          {{ cases.data[0].attributes.Title }}
        </h1>
        <div class="font-medium text-gray-500 flex flex-wrap mt-3">
          <p v-if="cases.data[0].attributes.Date" class="text-xs mb-0 mr-4">
            {{ cases.data[0].attributes.Date }}
          </p>
          <a
            v-if="cases.data[0].attributes.Client"
            :href="'//' + cases.data[0].attributes.ClientUrl"
            target="_blank"
            class="text-xs mb-0 no-underline text-gray-500"
            :class="
              cases.data[0].attributes.Date && cases.data[0].attributes.Client
                ? 'border-l border-gray-500 pl-4'
                : ''
            "
          >
            {{ cases.data[0].attributes.Client }}
          </a>
        </div>
        <TextMolecule
          :Text="cases.data[0].attributes.ShortDescription"
          class="mt-6"
        ></TextMolecule>
        <div v-if="cases.data[0].attributes.cases_categories.data" class="mt-6">
          <a
            v-for="category in cases.data[0].attributes.cases_categories.data"
            :key="category.id"
            :href="'category/' + category.attributes.Slug"
            class="text-xs px-3 py-1 rounded-full border border-blue-200 mr-4 mb-0 no-underline text-blue-400 hover:bg-blue-400 hover:text-white hover:border-blue-400"
            >{{ category.attributes.Title }}</a
          >
        </div>
        <div class="block mt-10">
          <a
            v-if="cases.data[0].attributes.ClientUrl"
            :href="'//' + cases.data[0].attributes.ClientUrl"
            target="_blank"
            class="PrimaryButton inline-block text-sm"
          >
            Bezoek de website
            <font-awesome-icon
              :icon="['fas', 'chevron-right']"
              class="ml-3 text-xs"
            />
          </a>
        </div>
      </div>
    </div>
    <Blocks :pages="cases.data[0] ? cases.data[0].attributes.Blocks : ''" />
    <Footer />
  </div>
</template>

<script>
import { CaseQuery } from "~/graphql/queries/cases";

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
    cases: {
      prefetch: true,
      query: CaseQuery,
      variables() {
        return {
          Slug: String(this.$route.params.Case),
        };
      },
    },
  },

  data() {
    return {
      cases: [],
      metadescription: "",
    };
  },

  head() {
    return {
      title:
        process.env.companyName +
        ` | ` +
        [
          this.cases.data[0].attributes.CaseMetaData.MetaTitle
            ? this.cases.data[0].attributes.CaseMetaData.MetaTitle
            : process.env.defaultMetaTitle,
        ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.cases.data[0].attributes.CaseMetaData.MetaDescription
            ? this.cases.data[0].attributes.CaseMetaData.MetaDescription
            : "",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: [
            this.cases.data[0].attributes.CaseMetaData.MetaImage.data
              ? `${
                  process.env.strapiBaseUri +
                  this.cases.data[0].attributes.CaseMetaData.MetaImage.data
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
