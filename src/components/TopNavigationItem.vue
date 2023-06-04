<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "#"
  }
});
</script>

<template>
  <a :href="props.href" class="relative inline-flex items-center justify-center px-4 py-3 h-9 cursor-pointer group" :class="[props.isActive ? 'text-text-neutral' : 'text-text-muted']">
    <div class="md-footnote-strong group-hover:text-text-neutral">
        <slot></slot>
    </div>
  </a>
</template>