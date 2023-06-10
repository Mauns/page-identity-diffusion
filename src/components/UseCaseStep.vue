<script setup>
import { computed } from "vue";
import { ArrowsPointingInIcon } from "@heroicons/vue/24/outline";
import Markdoc from "@markdoc/markdoc";

const props = defineProps({
  isActive: {
    type: String,
    default: false,
  },
  title: {
    type: String,
    default: "Moin",
  },
  body: {
    type: String,
    default: "Boudin rump spare ribs jerky, turkey leberkas corned beef ham.",
  },
});

const renderedBody = computed(() => {
  const ast = Markdoc.parse(props.body);
  const content = Markdoc.transform(ast);
  let html = Markdoc.renderers.html(content);
  return html;
});
</script>

<template>
  <div class="w-full flex gap-5" :class="!isActive && 'cursor-pointer'">
    <div>
      <div
        :class="[
          isActive
            ? 'bg-surface-inv-neutral border border-border-forced'
            : 'bg-surface-neutral border border-border-neutral',
        ]"
        class="w-14 aspect-square rounded-full flex items-center justify-center outline outline-1 outline-border-inv-emphasized"
      >
        <ArrowsPointingInIcon
          class="w-6"
          :class="[isActive ? 'text-text-inv-neutral' : 'text-text-neutral']"
        ></ArrowsPointingInIcon>
      </div>
    </div>
    <div class="flex flex-col pt-3 gap-3">
      <div class="md-subheading-heading-a">{{ props.title }}</div>
      <transition>
        <div
          class="md-body-neutral"
          v-html="renderedBody"
          v-show="isActive"
        ></div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>