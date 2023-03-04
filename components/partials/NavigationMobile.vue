<template>
  <div>
    <div class="min-h-24 flex items-center" :class="dropdownIsActive ? '' : ''">
      <div
        v-if="navigation"
        class="flex items-center justify-between z-70 bg-white w-full"
        :class="dropdownIsActive ? 'fixed' : 'relative'"
      >
        <a href="/" class="pl-4 w-32 block mb-1">
          <Logo :HeroActive="HeroActive ? true : false" />
        </a>
        <div class="flex items-center py-4">
          <div class="mr-1">
            <ButtonMolecule
              v-if="navigation.MainNavCtaButton"
              :Button="navigation.MainNavCtaButton"
              class="text-sm"
            />
          </div>
          <div
            class="px-5 cursor-pointer block w-16"
            v-on:click="dropdownIsActive = !dropdownIsActive"
            @click="lockBodyScroll()"
          >
            <div class="block w-full">
              <div
                class="block w-full rounded-full h-px p-px bg-black transform transition duration-300 ease-in-out mb-2 origin-top-left"
                :class="dropdownIsActive ? 'rotate-45 translate-x-1' : ''"
              ></div>
              <div
                class="block w-full rounded-full h-px p-px bg-black transition-all duration-300 ease-in-out"
                :class="dropdownIsActive ? 'opacity-0' : 'opacity-100'"
              ></div>
              <div
                class="block w-full rounded-full h-px p-px bg-black transform transition duration-300 ease-in-out mt-2 origin-bottom-left"
                :class="
                  dropdownIsActive
                    ? '-rotate-45 translate-x-1 -translate-y-1'
                    : ''
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed top-0 right-0 z-60 overflow-hidden transition-all duration-500 ease-in-out pt-20 w-screen bg-white"
      :class="
        dropdownIsActive == true ? 'opacity-100 h-screen p-2' : 'h-0 opacity-0'
      "
    >
      <div
        class="bg-primary-100 transition-all duration-300 ease-in h-full rounded-lg overflow-y-scroll"
      >
        <nav class="relative h-full">
          <MainNavMolecule
            v-if="navigation.MainNav"
            :Links="navigation.MainNav.data ? navigation.MainNav.data : ''"
            :MobileNav="true"
          >
          </MainNavMolecule>
          <!-- Topnav menu -->
          <TopNavMolecule
            v-if="navigation.TopnavPages"
            :Links="
              navigation.TopnavPages.data ? navigation.TopnavPages.data : ''
            "
            :MobileNav="true"
            class="px-3 py-1 mx-3 mt-1 border-t border-white"
          >
          </TopNavMolecule>
          <!-- Dropdown menu -->
          <TopNavMolecule
            v-if="navigation.DropdownMenu"
            :Links="
              navigation.DropdownMenu.MainPages.data
                ? navigation.DropdownMenu.MainPages.data
                : ''
            "
            :MobileNav="true"
            class="px-3 py-1 mx-3 mt-1 border-t border-white"
          >
          </TopNavMolecule>
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
