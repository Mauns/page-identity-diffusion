<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="internet-button hover:bg-border-forced action-active relative inline-flex gap-2 h-[52px] px-5 py-4 rounded-lg bg-surface-inv-neutral border border-border-forced items-center justify-center"
    :disabled="props.disabled"
  >
    <span class="md-body-heading-c text-text-inv-neutral">
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss">
.internet-button {
  box-shadow: 0px 10px 7px -8px #fffad0, 2px 14px 16px -3px #f1a1ff,
    -4px 16px 32px 12px rgba(151, 71, 255, 0.6), 0px 36px 96px #9747ff;
}
</style>