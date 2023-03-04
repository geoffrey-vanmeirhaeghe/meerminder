<template>
  <header id="Header" class="Header z-50">
    <NavigationMobile class="lg:hidden" :HeroActive="HeroActive ? true : false" />
    <NavigationDesktop class="hidden lg:block" :HeroActive="HeroActive ? true : false" />
    <HeroBannerBlock v-if="HeroActive" />
    <CookieControl>
      <template v-slot:modal>
        <h3>Voorkeuren</h3>
        <p>
          In deze module kan je een samenvattingen vinden van alle cookies die
          gebruikt worden op deze website. Je kan ook alle cookies naar eigen
          wensen in- of uitschakelen.
        </p>
      </template>
    </CookieControl>
  </header>
</template>

<script>
//Components
import NavigationDesktop from "~/components/partials/NavigationDesktop.vue";
import NavigationMobile from "~/components/partials/NavigationMobile.vue";
import HeroBannerBlock from "~/components/blocks/HeroBannerBlock.vue";

export default {
  props: ["HeroActive"],
  components: {
    NavigationDesktop,
    NavigationMobile,
    HeroBannerBlock,
  },
};
</script>
