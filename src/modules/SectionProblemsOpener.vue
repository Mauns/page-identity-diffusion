<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "@nanostores/vue";
import { $scrollVelocity } from "../utils/lenis/scrollStore";
import { watchDataAttrChanges } from "../utils/lenis/intersectionObserver";
import { animate } from "popmotion";

import IdentitySphere from "../components/IdentitySphere.vue";

const scrollVelocity = useStore($scrollVelocity);
const openerElement = ref(null);
const openerElementIsShowing = ref(false);

const identitySphereTransforms = computed(() => {
  const threshold = openerElementIsShowing.value;
  return {
    translateY: threshold ? 0 : -200,
    rotate: threshold ? 0 : -200,
  };
});

// const openerElementProgress = ref(0);

onMounted(() => {
  watchDataAttrChanges(openerElement.value, "data-lenis", (newValue) => {
    if (newValue > 0.5) openerElementIsShowing.value = true;
    if (newValue < 0.5) openerElementIsShowing.value = false;
  });
});
</script>

<template>
  <div class="mx-auto" data-lenis ref="openerElement">
    <div class="pt-56 pb-24 flex w-full items-center justify-center">
      <IdentitySphere
        class="w-[320px] origin-center will-change-transform duration-[2500ms] ease-out"
        :style="`transform:
        translateY(${identitySphereTransforms.translateY}%)
        rotateZ(${identitySphereTransforms.rotate}deg)
        scaleY(${1 + (scrollVelocity / 100) * 0.2})`"
      ></IdentitySphere>
    </div>
  </div>
</template>