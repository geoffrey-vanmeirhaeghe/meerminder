<template>
  <div>
    <nav v-if="navigation" class="flex items-top justify-between">
      <a href="/" class="pl-4 py-8 w-40 block">
        <Logo :HeroActive="HeroActive ? true : false" />
      </a>
      <div class="flex items-stretch">
        <div
          v-if="navigation.MainNav || navigation.TopnavPages"
          class="flex flex-col items-end py-4 mr-8 justify-center"
        >
          <MainNavMolecule
            v-if="navigation.MainNav"
            :Links="navigation.MainNav.data ? navigation.MainNav.data : ''"
            :Button="
              navigation.MainNavCtaButton ? navigation.MainNavCtaButton : ''
            "
            :HeroActive="HeroActive ? true : false"
          >
          </MainNavMolecule>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// Data import
import { Navigation } from "~/graphql/queries/navigation";

//Components
import ImageMolecule from "~/components/molecules/ImageMolecule.vue";
import MainNavMolecule from "~/components/molecules/MainNavMolecule.vue";
import TopNavMolecule from "~/components/molecules/TopNavMolecule.vue";
import Logo from "~/components/partials/Logo.vue";

export default {
  props: ["HeroActive"],
  
  components: {
    ImageMolecule,
    MainNavMolecule,
    TopNavMolecule,
    Logo
  },

  apollo: {
    navigation: {
      prefetch: true,
      query: Navigation,
      update: (data) =>
        data.navigation.data ? data.navigation.data.attributes : "",
    },
  },

  data() {
    return {
      navigation: [],
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
