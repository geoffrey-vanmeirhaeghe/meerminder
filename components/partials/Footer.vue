<template>
  <footer id="Footer" class="Footer mt-12 lg:mt-24">
    <div class="bg-gray-100" v-if="footer.FooterPartners.data != ''">
      <div class="container flex flex-wrap justify-around py-6">
        <img
          v-for="FooterPartner in footer.FooterPartners.data"
          :key="FooterPartner.id"
          :src="strapiBaseUri + FooterPartner.attributes.url"
          :alt="FooterPartner.attributes.alternativeText"
          :width="FooterPartner.attributes.width"
          :height="FooterPartner.attributes.height"
          loading="lazy"
          class="h-16 w-auto my-3 mx-4 filter grayscale opacity-75"
        />
      </div>
    </div>
    <div class="bg-blue-100 sm:py-6">
      <div class="container">
        <div class="flex flex-wrap items-start">
          <div
            class="py-8 w-full sm:w-1/3 xl:w-1/4 sm:pr-6 border-b border-blue-200 sm:border-b-0"
          >
            <a
              href="/"
              v-if="footer.FooterLogo.data.attributes"
              class="min-w-max block mb-1 mr-6"
            >
              <ImageMolecule :Image="footer.FooterLogo" />
            </a>
            <div
              v-if="footer.FooterContactInfo"
              v-html="footer.FooterContactInfo"
              class="mt-6"
            ></div>
            <div class="inline-block mt-6">
              <ButtonMolecule
                v-if="footer.FooterCtaButton"
                :Button="footer.FooterCtaButton"
                class="text-sm"
              />
            </div>
          </div>
          <div
            class="w-full sm:w-2/3 xl:w-3/4 sm:pl-10 md:pl-20 my-6 sm:border-l border-blue-200"
          >
            <div>
              <h4
                v-if="footer.FooterTitle"
                class="font-light text-blue-900 mb-0 max-w-md lg:max-w-xl xl:max-w-2xl text-2xl lg:text-3xl xl:text-4xl"
              >
                {{ footer.FooterTitle }}
              </h4>
            </div>
            <div
              v-if="footer.FooterMainNav.data || footer.FooterSubNav.data"
              class="my-6 mt-12 flex flex-wrap"
            >
              <div
                v-if="footer.FooterMainNav.data != ''"
                class="w-1/2 lg:w-1/3 sm:max-w-56 pr-4"
              >
                <p><strong>Main footer nav</strong></p>
                <ul class="no-default-icon inline-flex flex-col">
                  <li
                    v-for="Link in footer.FooterMainNav.data"
                    :key="Link.id"
                    class="inline-block pl-0 my-2 leading-tight"
                  >
                    <a :href="Link.attributes.Slug">
                      {{ Link.attributes.Title }}
                    </a>
                  </li>
                </ul>
              </div>
              <div
                v-if="footer.FooterSubNav.data != ''"
                class="w-1/2 lg:w-1/3 sm:max-w-56 lg:pr-4"
              >
                <p><strong>Main footer nav</strong></p>
                <ul class="no-default-icon inline-flex flex-col">
                  <li
                    v-for="Link in footer.FooterSubNav.data"
                    :key="Link.id"
                    class="inline-block pl-0 my-2 leading-tight"
                  >
                    <a :href="Link.attributes.Slug">
                      {{ Link.attributes.Title }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="sm:flex flex-wrap justify-between items-center py-3 lg:mt-5"
        >
          <ul
            class="no-default-icon sm:flex flex-wrap"
            v-if="footer.FooterLegalNav.data != ''"
          >
            <li
              v-for="Link in footer.FooterLegalNav.data"
              :key="Link.id"
              class="sm:inline-block pl-0 my-2 sm:my-0 leading-tight mr-10"
            >
              <a :href="Link.attributes.Slug" class="text-blue-400">
                {{ Link.attributes.Title }}
              </a>
            </li>
          </ul>
          <div class="flex items-center">
            <button
              class="mr-5 whitespace-nowrap text-white bg-blue-300 px-2 py-2 rounded text-xs hover:bg-blue-500 transition duration-300"
              v-on:click="$cookies.modal = true"
            >
              Cookies aanpassen
            </button>
            <p class="mb-0 whitespace-nowrap py-3 sm:py-1">
              <span>Website door: </span>
              <a
                href="https://www.meerminder.be"
                target="_blank"
                class="no-underline py-1 ml-1 border-b border-blue-900 text-blue-900 hover:text-green-500 hover:border-green-500"
                >Meerminder</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// Data import
import { Footer } from "~/graphql/queries/footer";

//Components
import HeadingMolecule from "~/components/molecules/HeadingMolecule.vue";
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";
import ButtonMolecule from "~/components/molecules/ButtonMolecule.vue";

export default {
  components: {
    ImageMolecule,
    HeadingMolecule,
    ButtonMolecule,
  },

  apollo: {
    footer: {
      prefetch: true,
      query: Footer,
      update: (data) =>
        data.footer.data.attributes ? data.footer.data.attributes : "",
    },
  },

  data() {
    return {
      footer: [],
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
