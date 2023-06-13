<script setup>
import PlayButton from "./PlayButton.vue";
</script>

<template>
  <div>
    <div
      class="app-symbol relative w-36 aspect-square rounded-[28px] border-t border-r border-r-border-emphasized border-t-border-emphasized flex align-center justify-center"
    >
      <PlayButton
        class="play-button rounded-full will-change-transform self-center -mt-2"
      ></PlayButton>
      <!-- <div class="absolute top-0 left-0 w-full h-full"></div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-symbol {
  background: url("../assets/imgs/hero-stage/app-symbol-texture.png"),
    linear-gradient(
      221.74deg,
      rgba(255, 255, 255, 0.33) 2.14%,
      rgba(255, 255, 255, 0.066) 50.05%,
      rgba(255, 255, 255, 0.033) 97.96%
    ),
    linear-gradient(0deg, rgba(16, 16, 16, 0.7), rgba(16, 16, 16, 0.7)),
    url("../assets/imgs/hero-stage/app-symbol-image.png"), var(--surface-muted);
  background-blend-mode: lighten, normal, normal, normal, normal;
  background-size: cover;
  transform: perspective(var(--perspective));
  transform-style: preserve-3d;
}

.play-button {
  transform: perspective(var(--perspective)) translateX(4px) translateZ(20px);

  box-shadow: -12px 12px 16px rgba(0, 0, 0, 0.2),
    -20px 20px 64px rgba(0, 0, 0, 0.6);
}
</style>