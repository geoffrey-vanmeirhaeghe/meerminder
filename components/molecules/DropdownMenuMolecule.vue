<template>
  <div>
    <div
      class="p-7 px-8 bg-blue-500 hidden md:flex items-center cursor-pointer h-full"
      v-on:click="dropdownIsActive = !dropdownIsActive"
      @click="lockBodyScroll()"
    >
      <div class="w-6">
        <div class="block w-full rounded-full h-px p-px bg-white mb-2"></div>
        <div class="block w-full rounded-full h-px p-px bg-white"></div>
        <div class="block w-full rounded-full h-px p-px bg-white mt-2"></div>
      </div>
    </div>
    <div
      class="fixed top-0 z-60 overflow-hidden transition-all duration-1000 ease-in-out delay-100 p-2"
      :class="
        dropdownIsActive == true
          ? 'h-screen w-screen opacity-100 right-0'
          : 'w-screen h-screen opacity-0 -right-full'
      "
    >
      <div
        class="transition-all duration-300 ease-in h-full bg-blue-100 rounded-xl"
      >
        <div class="relative h-full p-10">
          <button
            class="absolute right-0 top-0 p-3 mr-4 mt-5"
            v-on:click="dropdownIsActive = !dropdownIsActive"
            @click="lockBodyScroll()"
          >
            <div class="w-5 transform scale-150">
              <div
                class="block w-full rounded-full h-px p-px bg-blue-900 mb-2 transform rotate-45 translate-x-1 -translate-y-1 origin-top-left"
              ></div>
              <div
                class="block w-full rounded-full h-px p-px bg-blue-900 mt-2 transform -rotate-45 translate-x-1 -translate-y-px origin-bottom-left"
              ></div>
            </div>
          </button>
          <div class="flex flex-wrap h-full items-stretch px-12">
            <div
              class="w-full md:w-1/2 lg:w-1/3 md:border-r border-white flex flex-col items-end pr-24"
            >
              <ImageMolecule
                v-if="Logo"
                :Image="Logo"
                class="w-full xl:w-2/3 inline-block object-contain object-top"
              />
              <ButtonMolecule
                v-if="Button"
                :Button="Button"
                class="mt-12 mr-2"
              />
            </div>
            <div class="w-full md:w-1/2 lg:w-2/3 pl-12">
              <div v-if="Links">
                <ul class="no-default-icon mt-4 inline-flex flex-col">
                  <li
                    v-for="Link in Links"
                    :key="Link.id"
                    class="text-3xl py-4 mb-0 inline-block transition-all transform hover:translate-x-6 ease-out duration-500"
                  >
                    <a
                      :href="Link.attributes.Slug"
                      class="no-underline text-gray-700 font-bold"
                      :class="
                        dropdownIsActive == true
                          ? 'whitespace-wrap'
                          : 'whitespace-nowrap'
                      "
                    >
                      {{ Link.attributes.Title }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";
import ButtonMolecule from "~/components/molecules/ButtonMolecule.vue";

export default {
  props: ["Links", "Button", "Logo"],

  components: {
    ImageMolecule,
    ButtonMolecule,
  },

  data() {
    return {
      dropdownIsActive: false,
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },

  methods: {
    lockBodyScroll(event) {
      document.body.classList.toggle("h-screen");
      document.body.classList.toggle("overflow-hidden");
    },
  },
};
</script>
