<script setup>
import AppSymbol from "./AppSymbol.vue";
const props = defineProps({
  mouseCoords: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<template>
  <div>
    <!-- :style="`
            transform: perspective(var(--perspective)) matrix(
                ${0.05 + Math.cos(0.98 + (props.mouseCoords.x - 2) * 0.1)},
                ${0.05 + Math.sin(-0.2 + (props.mouseCoords.y - 2) * 0.05)},
                ${0.05 + Math.sin(0.36 + (props.mouseCoords.y - 2) * 0.05)},
                ${0.2 + Math.cos(0.93)},
                0, 
                0
            )

            scale(1.15)
    `" -->
    <div
      class="audio-player will-change-transform flex gap-10 items-center justify-cente duration-[1500ms] ease-out"
      :style="`
      transform:
      perspective(var(--perspective))
      rotateX(${15 + props.mouseCoords.y * 10}deg)
      rotateY(${15 + props.mouseCoords.x * 5}deg)
      rotateZ(${-20 + props.mouseCoords.x * -2}deg)
      `"
    >
      <AppSymbol class="app-symbol-wrapper rounded-[28px]"></AppSymbol>
      <div class="flex flex-col gap-2">
        <div class="md-heading-heading-b">You are not you anymore</div>
        <div class="flex items-center justify-start gap-2">
          <span class="md-body-heading-a">Counterparts</span>
          <span class="md-body-heading-a">·</span>
          <span class="md-body-heading-a">You are not you anymore</span>
        </div>
        <div class="flex items-center justify-start gap-[3px]">
          <span class="md-footnote-neutral text-text-muted">{</span>
          <span class="md-footnote-neutral text-text-muted"
            >danceability: "energetic"</span
          >
          <span class="md-footnote-neutral text-text-muted">,</span>
          <span class="md-footnote-neutral text-text-muted">user: "..."</span>
          <span class="md-footnote-neutral text-text-muted">}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.audio-player {
  // transform: matrix(0.98, -0.2, 0.36, 0.93, 0, 0);
  transform: matrix(0.98, -0.2, 0.36, 0.93, 0, 0);
  transform-origin: center;
  transform-style: preserve-3d;
  perspective: var(--perspective);
}

.app-symbol-wrapper {
  box-shadow: -16px 12px 0px #101010, -12px 9px 0px #101010,
    -8px 6px 0px #101010;
  transform-style: preserve-3d;
  perspective: var(--perspective);
}
</style>