<template>
  <ul
    class="no-default-icon flex flex-wrap"
    :class="
      MobileNav
        ? 'justify-between p-6 pb-2'
        : 'text-base justify-end items-center'
    "
  >
    <li
      v-for="Link in Links"
      :key="Link.id"
      :class="
        MobileNav
          ? 'w-full pb-8 pl-0 flex items-end text-center my-2'
          : 'flex items-center my-1'
      "
    >
      <a
        :href="'/' + Link.attributes.Slug"
        class="no-underline"
        :class=" [
            MobileNav
              ? 'font-semibold text-3xl block justify-between items-center w-full'
              : 'uppercase text-sm tracking-wider',
            HeroActive
            ? 'text-white'
            : 'text-white lg:text-black',
            setActiveState == '/' + Link.attributes.Slug ? 'active' : '',
          ]
        "
      >
        {{ Link.attributes.Title }}
      </a>
    </li>
    <!-- <ButtonMolecule v-if="Button" :Button="Button" class="ml-7 my-3 text-sm" /> -->
  </ul>
</template>

<script>
// Components
import ButtonMolecule from "~/components/molecules/ButtonMolecule.vue";

export default {
  props: ["Links", "Button", "MobileNav", "HeroActive"],

  components: {
    ButtonMolecule,
  },

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },

  computed: {
    setActiveState() {
      return this.$route.path;
    },
  },
};
</script>
