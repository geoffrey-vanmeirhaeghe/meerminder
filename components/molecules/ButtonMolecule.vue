<template>
  <a
    v-if="Button.page.data !== null"
    class="flex items-center justify-between md:justify-center"
    :class="Button.Style"
    :href="'/' + Button.page.data.attributes.Slug"
    :target="Button.OpenInNewTab ? '_blank' : ''"
    :title="
      Button.page.data.attributes.Title ? Button.page.data.attributes.Title : ''
    "
    ><span v-if="Button.Style == 'SecondaryButton'">{{ Prefix }} </span>{{ Button.ButtonText }}</a>

  <a
    v-else-if="Button.ExternalLink !== null"
    class="flex items-center justify-between"
    :class="Button.Style"
    :href="'//' + Button.ExternalLink"
    :target="Button.OpenInNewTab ? '_blank' : ''"
    ><span v-if="Button.Style == 'SecondaryButton'">MEER </span>{{ Button.ButtonText }}</a>
</template>

<script>
export default {
  props: ["Button", "Prefix"],
};
</script>
