<template>
  <div :class="Settings.Width + ' spacing-' + Settings.Spacing">
    <div class="w-full flex flex-wrap">
      <div class="w-full xl:w-1/3 container-left mb-8 xl:mb-0">
        <TextMolecule
          v-if="Text"
          :Text="Text"
          class="mt-6"
        />
        <ButtonMolecule
          v-if="Button"
          :Button="Button"
          class="no-underline mt-4"
        />
      </div>
      <div class="w-full xl:w-2/3 xl:pl-24">
        <VueSlickCarousel v-bind="settings">
          <div v-for="Slide in Slides" :key="Slide.id" class="inline-block">
            <div class="w-full relative inline-block">
              <ImageMolecule
                v-if="Slide.Image.data"
                :Image="Slide.Image"
                class="object-cover w-full"
              />
              <div
                class="flex flex-col lg:max-w-3xl lg:absolute bottom-4 xl:bottom-8 left-4 xl:left-24 right-4 xl:right-8 p-8 bg-primary-500 lg:bg-primary-500"
              >
                <h2
                  v-if="Slide.Title"
                  class="mt-3 text-3xl xl:text-5xl xl:leading-tight font-bold text-white"
                >
                  {{ Slide.Title }}
                </h2>
                <TextMolecule
                  v-if="Slide.Text"
                  :Text="Slide.Text"
                  class="mt-6 inline-block text-white"
                />
                <div class="mt-4">
                  <a
                    v-if="Slide.Link.data || Slide.ExternalLink"
                    :href="
                      Slide.Link.data != null
                        ? Slide.Link.data.attributes.Slug
                        : Slide.ExternalLink != null
                        ? '//' + Slide.ExternalLink
                        : ''
                    "
                    :title="
                      Slide.Link.data != null
                        ? Slide.Link.data.attributes.Title
                        : ''
                    "
                    :target="Slide.OpenInNewTab ? '_blank' : ''"
                    class="PrimaryButtonOutlineChevron inverted-colors inline-block"
                    >test
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      class="ml-3 text-sm"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
// Molecules
import TextMolecule from "~/components/molecules/TextMolecule.vue";
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";
import ButtonMolecule from "~/components/molecules/ButtonMolecule.vue";

import VueSlickCarousel from "vue-slick-carousel";

export default {
  props: ["Text", "Button", "Slides", "Settings"],

  components: {
    TextMolecule,
    ImageMolecule,
    ButtonMolecule,
    VueSlickCarousel,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 2,
      },
    };
  },
};
</script>
