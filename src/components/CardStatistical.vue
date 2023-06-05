<script setup>
import Card from "./Card.vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  caption: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <Card class="p-0">
    <div class="w-full h-80">
      <slot></slot>
    </div>
    <div class="w-full flex flex-col p-5 pt-10">
      <div
        class="w-full md-subheading-heading-a text-center break-words"
        v-if="props.title !== ''"
        v-html="props.title"
      ></div>
      <div
        class="w-full md-caption-neutral text-text-neutral text-center break-words"
        v-if="props.caption !== ''"
        v-html="props.caption"
      ></div>
    </div>
  </Card>
</template>