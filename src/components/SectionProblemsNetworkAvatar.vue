<script setup>
const props = defineProps({
  img: {
    type: String,
    default: "src/assets/imgs/network/photo.png",
  },
  isStory: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="relative w-14 aspect-square">
    <div
      class="relative w-full aspect-square rounded-full outline outline-1 outline-border-inv-emphasized overflow-hidden"
    >
      <div class="absolute left-0 right-0 bottom-0 top-0 rounded-full w-full aspect-square border border-border-neutral"></div>
      <img :src="props.img" alt="" class="object-cover" />
    </div>
  </div>
</template>