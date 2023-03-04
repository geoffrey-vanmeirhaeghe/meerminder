<template>
  <video
    :width="Video.data.attributes.width"
    :height="Video.data.attributes.height"
    :alt="Video.data.attributes.alternativeText"
    controls
    loading="lazy"
    class="max-h-screen object-cover w-full"
  >
    <source :src="strapiBaseUri + Video.data.attributes.url" />
  </video>
</template>

<script>
export default {
  props: ["Video"],

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
