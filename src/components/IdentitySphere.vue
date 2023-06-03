<script setup>
const props = defineProps({
  onDark: {
    type: Boolean,
    default: true,
  },
  showTexture: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div
    class="relative identity-sphere w-[136px] aspect-square rounded-full overflow-hidden border border-border-neutral outline-1 outline-border-inv-neutral"
    :class="[props.onDark ? 'bg-surface-subdued' : 'bg-surface-inv-neutral']"
  >
    <img
      src="../assets/imgs/identity-blur.png"
      class="identity-sphere__blur absolute m-auto object-cover select-none will-change-transform"
      alt=""
    />
    <div
      class="absolute identity-sphere__blur-dodge top-0 right-0 bottom-0 left-0 mix-blend-color-burn"
    ></div>
    <img
      src="../assets/imgs/identity-texture.png"
      class="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full mix-blend-lighten"
      alt=""
    />
    <img
      src="../assets/imgs/identity-gloss.png"
      class="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full mix-blend-lighten"
      alt=""
    />
  </div>
</template>

<style lang="scss">
.identity-sphere {
  img {
    user-drag: none;
    -webkit-user-drag: none;
  }

  &__blur-dodge {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(182, 182, 182, 0.5) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  &__blur {
    animation: spin 10s forwards infinite linear;
    transform: scale(1.33);

    transition: 2s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &:hover {
    // animation: shake 0.5s infinite;
    .identity-sphere__blur {
        opacity: .4;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg) scale(1.33);
  }
  100% {
    transform: rotate(-360deg) scale(1.33);
  }
}

@keyframes shake {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-4px, -2px);
  }
  20% {
    transform: translate(2px, -3px);
  }
  30% {
    transform: translate(-3px, 4px);
  }
  40% {
    transform: translate(4px, 2px);
  }
  50% {
    transform: translate(-2px, -4px);
  }
  60% {
    transform: translate(3px, -2px);
  }
  70% {
    transform: translate(-4px, 3px);
  }
  80% {
    transform: translate(2px, 4px);
  }
  90% {
    transform: translate(-3px, -3px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>