<script setup>
import { defineEmits, ref, watchEffect } from "vue";

const emits = defineEmits(["click"]);

const disabled = ref(false);
const variant = ref("primary");
const ariaLabel = ref("");

const handleClick = () => {
  if (!disabled.value) {
    emits("click");
  }
};

watchEffect(() => {
  if (disabled.value) {
    ariaLabel.value = "Button is disabled";
  } else {
    ariaLabel.value = "";
  }
});
</script>

<template>
  <button
    ref="button"
    @click="handleClick"
    :disabled="disabled"
    class="action-active inline-flex items-center justify-center"
    :class="{
      'button--primary bg-black bg-opacity-60 rounded-full border border-border-emphasized backdrop-blur-xl backdrop-saturate-200 px-8 py-5 h-[60px]':
        variant === 'primary',
      'button--secondary': variant === 'secondary',
      'button--disabled': disabled,
    }"
    :aria-label="ariaLabel"
    :aria-disabled="disabled"
  >
    <span
      :class="{
        'button--primary md-body-heading-c': variant === 'primary',
      }"
      ><slot></slot
    ></span>
  </button>
</template>
  
  <style scoped>
.button {
  /* Your button styles here */
}
.button--primary {
  /* Your primary button styles here */
}
.button--secondary {
  /* Your secondary button styles here */
}
.button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
  