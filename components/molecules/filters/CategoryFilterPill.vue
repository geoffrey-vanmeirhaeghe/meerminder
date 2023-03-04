<template>
  <button
    class="px-5 py-2 border border-primary-500 mr-2 rounded-full text-sm"
    @click="onClickButton()"
    :class="
      ActiveCategory == Category.id ? 'bg-primary-500 text-white' : 'text-primary-500'
    "
  >
    {{ Category.attributes.Title }}
  </button>
</template>

<script>
export default {
  props: ["Category", "ActiveCategory"],

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
      active: false,
    };
  },

  methods: {
    onClickButton(event) {
      this.$emit("clicked", this.Category.id);
    },
  },
};
</script>
