<script setup>
import { ref, onMounted, watch } from "vue";
import { watchDataAttrChanges } from "../utils/lenis/intersectionObserver";
import { useStore } from "@nanostores/vue";
import { $scrollVelocity } from "../utils/lenis/scrollStore";

const claimElement = ref(null);
const claimElementProgress = ref(0);

const scrollVelocity = useStore($scrollVelocity);

onMounted(() => {
  watchDataAttrChanges(claimElement.value, "data-lenis", (newValue) => {
    claimElementProgress.value = newValue;
  });
});
</script>

<template>
  <div
    data-lenis
    ref="claimElement"
    class="relative flex flex-col items-center justify-center bg-surface-inv-neutral border-b border-border-inv-neutral w-full aspect-video py-72"
  >
    <div class="container mx-auto">
      <h4
        class="md-large-title-heading-a text-center text-text-inv-neutral will-change-transform origin-top"
        :style="`transform:
        translateY(${(claimElementProgress - 0.5) * -10}rem)
        scaleY(${1 + (scrollVelocity / 100) * 0.25})
        ;
        `"
      >
        <!-- scaleY(${0.2 + (1 - (claimElementProgress / 1) * 0.2)}); -->
        <slot></slot>
      </h4>
    </div>

    <svg
      class="absolute left-0 right-0 bottom-0 w-full"
      viewBox="0 0 1728 302"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_284_12590)">
        <path
          d="M0 208.5L269.768 220.053C377.179 224.652 484.61 211.412 587.691 180.869C768.022 127.438 959.978 127.438 1140.31 180.869C1243.39 211.412 1350.82 224.652 1458.23 220.053L1728 208.5V419H0V208.5Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_284_12590"
          x="-140"
          y="0.795654"
          width="2008"
          height="558.204"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="70"
            result="effect1_foregroundBlur_284_12590"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>