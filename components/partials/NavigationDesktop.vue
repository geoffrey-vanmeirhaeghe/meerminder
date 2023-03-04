<template>
  <div>
    <nav v-if="navigation" class="flex items-top justify-between">
      <a href="/" v-if="navigation.Logo" class="pl-4 py-4 mt-2 min-w-max block">
        <ImageMolecule :Image="navigation.Logo" />
      </a>
      <div class="flex items-stretch">
        <div
          v-if="navigation.MainNav || navigation.TopnavPages"
          class="flex flex-col items-end py-4 mr-8 justify-center"
        >
          <TopNavMolecule
            v-if="navigation.TopnavPages"
            :Links="
              navigation.TopnavPages.data ? navigation.TopnavPages.data : ''
            "
            class="flex"
          >
          </TopNavMolecule>
          <MainNavMolecule
            v-if="navigation.MainNav"
            :Links="navigation.MainNav.data ? navigation.MainNav.data : ''"
            :Button="
              navigation.MainNavCtaButton ? navigation.MainNavCtaButton : ''
            "
          >
          </MainNavMolecule>
        </div>
        <DropdownMenuMolecule
          v-if="navigation.DropdownMenu"
          :Links="
            navigation.DropdownMenu.MainPages.data
              ? navigation.DropdownMenu.MainPages.data
              : ''
          "
          :Button="
            navigation.DropdownMenu.DropdownCTA
              ? navigation.DropdownMenu.DropdownCTA
              : ''
          "
          :Logo="
            navigation.DropdownMenu.Logo ? navigation.DropdownMenu.Logo : ''
          "
        />
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
import DropdownMenuMolecule from "~/components/molecules/DropdownMenuMolecule.vue";

export default {
  components: {
    ImageMolecule,
    MainNavMolecule,
    TopNavMolecule,
    DropdownMenuMolecule,
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
