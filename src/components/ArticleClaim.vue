<script setup>
import { ref, onMounted } from "vue";

const claimElement = ref(null);
const claimElementProgress = ref(0)

// onMounted(() => {
//   watchDataAttrChanges(claimElement.value, "data-lenis", (newValue) => {
//     claimElementProgress.value = newValue
//   });
// });
</script>

<template>
  <!-- data-lenis
  ref="claimElement" -->
  <div
    class="relative flex items-center justify-center bg-surface-inv-neutral border-b border-border-inv-neutral w-full aspect-video py-72"
    >
    <div class="container mx-auto">
      <h4 class="md-large-title-heading-a text-center text-text-inv-neutral">
        <slot></slot>
      </h4>
    </div>
  </div>
</template>