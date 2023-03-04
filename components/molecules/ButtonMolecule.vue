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
    >{{ Button.ButtonText
    }}<font-awesome-icon
      v-if="
        Button.Style == 'PrimaryButtonChevron' ||
        Button.Style == 'PrimaryButtonOutlineChevron' ||
        Button.Style == 'SecondaryButtonChevron'
      "
      :icon="['fas', 'chevron-right']"
      class="ml-3 text-sm"
  /></a>

  <a
    v-else-if="Button.ExternalLink !== null"
    class="flex items-center justify-between"
    :class="Button.Style"
    :href="'//' + Button.ExternalLink"
    :target="Button.OpenInNewTab ? '_blank' : ''"
    >{{ Button.ButtonText
    }}<font-awesome-icon
      v-if="
        Button.Style == 'PrimaryButtonChevron' ||
        Button.Style == 'PrimaryButtonOutlineChevron' ||
        Button.Style == 'SecondaryButtonChevron'
      "
      :icon="['fas', 'chevron-right']"
      class="ml-3 text-sm"
  /></a>
</template>

<script>
export default {
  props: ["Button"],
};
</script>
