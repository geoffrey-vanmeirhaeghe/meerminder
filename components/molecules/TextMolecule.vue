<template>
  <div v-if="Text" v-html="Text" class="w-full max-w-2xl"></div>
</template>

<script>
export default {
  props: ["Text"],
};
</script>
