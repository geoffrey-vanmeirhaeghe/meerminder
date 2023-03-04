<template>
  <div
    v-if="Title"
    class="w-full max-w-2xl flex justify-center"
    :class="'size-' + Title.Size + ' alignment-' + Title.Alignment"
  >
    <h1 v-if="Title.Size == 'ultra'" :class="'text-' + Title.Alignment">
      {{ Title.Title }}
    </h1>
    <h2 v-if="Title.Size == 'large'" :class="'text-' + Title.Alignment">
      {{ Title.Title }}
    </h2>
    <h3 v-if="Title.Size == 'normal'" :class="'text-' + Title.Alignment">
      {{ Title.Title }}
    </h3>
    <h4 v-if="Title.Size == 'small'" :class="'text-' + Title.Alignment">
      {{ Title.Title }}
    </h4>
  </div>
</template>

<script>
export default {
  props: ["Title"],
};
</script>
