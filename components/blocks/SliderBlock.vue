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
          :Prefix="'Meer'"
          class="no-underline mt-4"
        />
      </div>
      <div class="w-full xl:w-2/3 xl:pl-24">
        <div class="relative">
          <button class="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full" @click="showNext">
            <img src="~/assets/img/anchor-arrow.svg"/>
          </button>
          <VueSlickCarousel v-bind="settings" class="bg-primary-500 p-3 pr-0 rounded-l-3xl ml-6 md:ml-0" ref="carousel">
            <div v-for="Slide in Slides" :key="Slide.id" class="inline-block p-3">
              <div class="w-full relative inline-block">
                <ImageMolecule
                  v-if="Slide.Image.data"
                  :Image="Slide.Image"
                  class="object-cover w-full rounded-xl"
                />
                <div
                  class="mt-4 max-w-sm"
                >
                  <p
                    v-if="Slide.Title"
                    class="mt-3 text-xl font-extrabold text-white"
                  >
                    {{ Slide.Title }}
                  </p>
                  <TextMolecule
                    v-if="Slide.Text"
                    :Text="Slide.Text"
                    class="mt-3 inline-block text-white wysiwyg-slide"
                  />
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
                    class="SecondaryButton inverted-colors block no-underline"
                    ><span>Meer </span>info</a>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
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
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "-100px",
        centerMode: true,
      },
    };
  },

  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
  }
};
</script>
