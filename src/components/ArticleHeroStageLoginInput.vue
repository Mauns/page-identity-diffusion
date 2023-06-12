<script setup>
import { ref, defineEmits } from "vue";

const valueModel = ref("");

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "Label",
  },
  placeholder: {
    type: String,
    default: "Placeholder",
  },
});

const emit = defineEmits(["change"]);

const emitOnUpdate = (e) => {
  emit("change", valueModel.value);
};
</script>

<template>
  <label>
    <div class="md-body-heading-c mb-2">{{ props.label }}</div>
    <input
      class="w-full h-[52px] placeholder:text-text-muted text-text-neutral items-center px-6 md-caption-neutral bg-border-inv-neutral rounded-lg border border-border-emphasized focus:outline-border-forced focus:outline-2"
      :placeholder="props.placeholder"
      :type="props.type"
      :value="valueModel"
      @change="emitOnUpdate"
    />
  </label>
</template>

<style lang="scss">
</style>