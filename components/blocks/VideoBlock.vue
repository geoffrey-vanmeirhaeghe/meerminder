<template>
  <div
    class="flex justify-center"
    :class="Settings.Width + ' spacing-' + Settings.Spacing"
  >
    <VideoMolecule v-if="Video" :Video="Video" />
  </div>
</template>

<script>
import VideoMolecule from "~/components/molecules/VideoMolecule.vue";

export default {
  props: ["Video", "Settings"],

  components: {
    VideoMolecule,
  },
};
</script>
