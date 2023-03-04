<template>
  <div
    class="container flex justify-center"
    :class="'spacing-' + Settings.Spacing + ' alignment-' + Alignment"
  >
    <ul class="icon-picker block">
      <li v-for="Item in Items" :key="Item.Id" class="block max-w-2xl relative">
        <span class="min-w-4 inline-block absolute left-0">
          <font-awesome-icon :icon="Item.Icon" />
        </span>
        <span class="pl-8 inline-block">{{ Item.Text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["Items", "Settings", "Alignment"],

  data() {
    return {
      strapiBaseUri: process.env.strapiBaseUri,
    };
  },
};
</script>
