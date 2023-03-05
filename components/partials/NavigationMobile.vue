<template>
  <div>
    <div class="min-h-24 flex items-center" :class="dropdownIsActive ? '' : ''">
      <div
        v-if="navigation"
        class="flex items-center justify-between z-70 w-full"
        :class="dropdownIsActive ? 'fixed bg-primary-500' : 'relative'"
      >
        <a href="/" class="pl-4 w-32 block mb-1">
          <Logo :HeroActive="HeroActive ? true : false" />
        </a>
        <div class="flex items-center py-4">
          <div
            class="px-5 cursor-pointer block w-16"
            v-on:click="dropdownIsActive = !dropdownIsActive"
            @click="lockBodyScroll()"
          >
            <div class="block w-full">
              <div
                class="block w-full rounded-full h-px p-px transform transition duration-300 ease-in-out mb-2 origin-top-left"
                :class="
                  [ 
                    dropdownIsActive ? 'rotate-45 translate-x-1' : '',
                    HeroActive ? 'bg-white' : 'bg-black',
                  ]
                "
              ></div>
              <div
                class="block w-full rounded-full h-px p-px transition-all duration-300 ease-in-out"
                :class="
                  [ 
                    dropdownIsActive ? 'opacity-0' : 'opacity-100',
                    HeroActive ? 'bg-white' : 'bg-black',
                  ]
                "
              ></div>
              <div
                class="block w-full rounded-full h-px p-px transform transition duration-300 ease-in-out mt-2 origin-bottom-left"
                :class="
                  [ 
                    dropdownIsActive ? '-rotate-45 translate-x-1 -translate-y-1' : '',
                    HeroActive ? 'bg-white' : 'bg-black',
                  ]
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed top-0 right-0 z-60 overflow-hidden transition-all duration-500 ease-in-out pt-24 w-screen bg-primary-500"
      :class="
        dropdownIsActive == true ? 'opacity-100 h-screen p-2' : 'h-0 opacity-0'
      "
    >
      <div
        class="transition-all duration-300 ease-in h-full rounded-lg overflow-y-scroll"
      >
        <nav class="relative h-full">
          <MainNavMolecule
            v-if="navigation.MainNav"
            :Links="navigation.MainNav.data ? navigation.MainNav.data : ''"
            :MobileNav="true"
          >
          </MainNavMolecule>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overflow-y-scroll {
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

.overflow-y-scroll::-webkit-scrollbar {
  display: none;
}
</style>

<script>
// Data import
import { Navigation } from "~/graphql/queries/navigation";

//Components
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";
import ButtonMolecule from "~/components/molecules/ButtonMolecule.vue";
import MainNavMolecule from "~/components/molecules/MainNavMolecule.vue";
import TopNavMolecule from "~/components/molecules/TopNavMolecule.vue";
import Logo from "~/components/partials/Logo.vue";

export default {
  props: ["HeroActive"],

  apollo: {
    navigation: {
      prefetch: true,
      query: Navigation,
      update: (data) =>
        data.navigation.data ? data.navigation.data.attributes : "",
    },
  },

  components: {
    ImageMolecule,
    ButtonMolecule,
    MainNavMolecule,
    TopNavMolecule,
    Logo
  },

  data() {
    return {
      dropdownIsActive: false,
      navigation: [],
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
  methods: {
    lockBodyScroll(event) {
      document.body.classList.toggle("h-screen");
      document.body.classList.toggle("overflow-hidden");
      document.getElementById("Header").classList.toggle("border-b");
    },
  },
};
</script>
