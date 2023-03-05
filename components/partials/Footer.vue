<template>
  <footer id="Footer" class="Footer mt-12 lg:mt-24">
    <div class="bg-primary-500 py-10 md:pt-24 flex flex-col md:flex-row min-h-screen relative overflow-hidden">
      <div>
        <MascotTail class="absolute opacity-25 lg:opacity-100 w-144 lg:w-2/3 bottom-0 right-0 transform -scale-x-100 translate-x-1/2 lg:translate-x-1/3 md:translate-y-48 xl:translate-y-36" :White="true" />
      </div>
      <div class="container z-10">
        <div class="md:w-2/3 lg:w-1/2 flex flex-col justify-between h-full">
          <div>
            <p v-if="footer.FooterTitle" class="uppercase font-black text-white text-6xl">{{ footer.FooterTitle }}</p>
            <a href="mailto:info@meerminder.be" class="SecondaryButtonBig inverted-colors mt-6 md:mt-16">info@meerminder.be</a>
          </div>
          <div class="mt-10 md:mt-32 h-full flex flex-col md:flex-row justify-between">
            <div class="flex flex-col justify-between">
              <div
                v-if="footer.FooterContactInfo"
                v-html="footer.FooterContactInfo"
                class="footer-wysiwyg"
              ></div>
              <button
                class="PrimaryButtonSmall inverted-colors mt-6"
                v-on:click="$cookies.modal = true"
              >
                Cookies aanpassen
              </button>
            </div>
            <div class="mt-6 md:mt-0" v-if="footer.FooterMainNav.data != ''">
              <ul class="no-default-icon inline-flex flex-col">
                  <li
                    v-for="Link in footer.FooterMainNav.data"
                    :key="Link.id"
                    class="inline-block pl-0 my-2 leading-tight"
                  >
                    <a :href="Link.attributes.Slug" class="SecondaryButton inverted-colors">
                      {{ Link.attributes.Title }}
                    </a>
                  </li>
                </ul>
            </div>
            <div class="mt-6 md:mt-0">
              <ul class="no-default-icon inline-flex flex-col">
                <li class="inline-block pl-0 my-2 leading-tight"><a href="https://www.facebook.com/meerminderdesign" target="_blank" class="SecondaryButton inverted-colors">Facebook</a></li>
                <li class="inline-block pl-0 my-2 leading-tight"><a href="https://be.linkedin.com/company/meerminder" target="_blank" class="SecondaryButton inverted-colors">Linkedin</a></li>
                <li class="inline-block pl-0 my-2 leading-tight"><a href="https://www.instagram.com/meerminderdesign/" target="_blank" class="SecondaryButton inverted-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- <ul
        class="no-default-icon sm:flex flex-wrap"
        v-if="footer.FooterLegalNav.data != ''"
      >
        <li
          v-for="Link in footer.FooterLegalNav.data"
          :key="Link.id"
          class="sm:inline-block pl-0 my-2 sm:my-0 leading-tight mr-10"
        >
          <a :href="Link.attributes.Slug" class="text-primary-400">
            {{ Link.attributes.Title }}
          </a>
        </li>
      </ul> -->
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
import Logo from "~/components/partials/Logo.vue";
import MascotTail from "~/components/partials/MascotTail.vue";

export default {
  components: {
    ImageMolecule,
    HeadingMolecule,
    ButtonMolecule,
    Logo,
    MascotTail,
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
