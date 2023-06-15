<script setup>
import { computed } from "vue";

const props = defineProps({
  src: {
    type: String,
    default: "./src/assets/imgs/problems/photo-app-1.png",
  },
});

const photo = computed(() => {
    return props.src === undefined || props.src === "" ? "./src/assets/imgs/problems/gallery-placeholder.png" : props.src
})
</script>

<template>
  <div class="">
    <div
      class="photo-app-image relative w-full overflow-clip aspect-square rounded-lg bg-black before:absolute before:top-0 before:left-0 before:rounded-lg outline outline-1 outline-border-inv-emphasized"
    >
      <slot></slot>
      <img :src="photo" alt="" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<style lang="scss">
.photo-app-image {
  box-shadow: 0px 12px 12px -8px rgba(14, 13, 12, 0.5);

  &::before {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: inset 0 0 0 1px var(--border-neutral);
    z-index: 0;
  }
}
</style>