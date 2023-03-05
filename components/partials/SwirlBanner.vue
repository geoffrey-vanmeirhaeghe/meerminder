<template>
    <div class="swirl-banner relative" :class="AnimationActive ? 'animated' : ''">
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
      <div class="swirl-image"></div>
    </div>
</template>
<script>
export default {
  name: "swirlBanner",

  props: ["AnimationActive"],

}
</script>

<style lang="scss">
  .swirl-banner {
    @apply overflow-hidden;
    .swirl-image {
      background: repeat-x url('~/assets/img/screen-width-swirl.svg');
      width: calc(1966.324px * 2);
      @apply mt-1.5 h-5;
    }
    .swirl-image:nth-of-type(even) {
      background: repeat-x url('~/assets/img/screen-width-swirl-offset.svg');
    }

    &.animated {
      .swirl-image {
        animation: marquee 40s linear infinite;
      }
      .swirl-image:nth-of-type(even) {
        animation: marquee 60s linear infinite reverse;
      }
    }
  }
</style>

  