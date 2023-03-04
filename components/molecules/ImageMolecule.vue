<template>
  <img
    :src="strapiBaseUri + Image.data.attributes.url"
    :alt="Image.data.attributes.alternativeText"
    :width="Image.data.attributes.width"
    :height="Image.data.attributes.height"
    loading="lazy"
  />
</template>

<script>
export default {
  props: ["Image"],

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
