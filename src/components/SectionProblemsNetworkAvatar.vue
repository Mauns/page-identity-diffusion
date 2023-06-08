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
  width: {
    type: String,
    default: "w-14",
  },
});
</script>

<template>
  <div class="flex items-center gap-5 group" :class="isStory && 'cursor-pointer'">
    <div
      class="aspect-square"
      :class="[
        isStory
          ? 'will-change-auto rounded-full outline outline-2 outline-offset-[3px] group-hover:outline-offset-[6px] group-hover:outline-4 duration-300 ease-out outline-lime-neutral'
          : 'pointer-events-none',
        props.width,
      ]"
    >
      <div
        class="relative w-full aspect-square rounded-full outline outline-1 outline-border-inv-emphasized overflow-hidden"
      >
        <div
          class="absolute left-0 right-0 bottom-0 top-0 rounded-full w-full aspect-square border border-border-neutral"
        ></div>
        <img :src="props.img" alt="" class="object-cover group-hover:scale-125 duration-300 ease-out" />
      </div>
    </div>
    <div class="h-max max-w-36 md-body-heading-a break-words" v-if="isStory">
      <slot></slot>
    </div>
  </div>
</template>