<script setup>
import { useVModel, useStore } from "@nanostores/vue";
import { computed } from "vue";
import { $username, $heroStageCoords } from "../utils/store";
import ArticleHeroStageLoginInput from "./ArticleHeroStageLoginInput.vue";
import InternetButton from "./InternetButton.vue";

const username = useVModel($username);

const props = defineProps({
  mouseCoords: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
  },
});

const mouseCoords = computed(() => {
  return props.mouseCoords;
});
</script>

<template>
  <div
    class="article-hero-stage-login flex flex-col w-[360px] rounded-sm p-6 gap-4 overflow-hidden border border-border-neutral duration-[2000ms] ease-out"
    :style="`transform: perspective(var(--perspective)) rotateX(${
      30 + mouseCoords.y * 5
    }deg) rotateY(${-15 + mouseCoords.x * 3}deg) rotateZ(${
      15 + mouseCoords.x * -3
    }deg);
    `"
  >
    <div
      class="article-hero-stage-login__app-bar flex py-2 w-full gap-3 items-center justify-center"
    >
      <div
        class="article-hero-stage-login__app-icon w-9 h-9 rounded-xl border-t border-l border-border-neutral"
      ></div>
      <div class="article-hero-stage-logon__app-icon-title md-body-heading-b">
        Irgendeine App
      </div>
    </div>

    <form class="flex flex-col gap-6">
      <ArticleHeroStageLoginInput
        class="w-full"
        label="Nutzer:innenname"
        placeholder="Wähle einen Namen"
        type="text"
        v-model="username"
      ></ArticleHeroStageLoginInput>
      <ArticleHeroStageLoginInput
        class="w-full"
        label="Passwort"
        placeholder="Setze ein Passwort"
        type="password"
      ></ArticleHeroStageLoginInput>
      <InternetButton class="article-hero-stage-login__internet-button"
        >Jetzt <span class="md-body-heading-b">einloggen</span></InternetButton
      >
    </form>
  </div>
</template>

<style lang="scss" scoped>
.article-hero-stage-login {
  transform-style: preserve-3d;
  perspective: var(--perspective);

  background: linear-gradient(
      157.78deg,
      rgba(255, 255, 255, 0.1) 3.51%,
      rgba(255, 255, 255, 0.02) 44.5%,
      rgba(255, 255, 255, 0.01) 85.5%
    ),
    #0a0a0a;
  box-shadow: 4px 19px 0px #101010, 3px 12px 0px #101010, 2px 4px 0px #101010,
    5px 20px 0px var(--border-neutral);

  &__app-bar {
    // filter: drop-shadow(4px 4px 12px #000000)
    //   drop-shadow(13px 16px 20px #000000);
    transform: translateZ(40px);
  }

  &__app-icon {
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 9.31%,
        rgba(255, 255, 255, 0.01) 91.15%
      ),
      linear-gradient(0deg, #fd6915, #fd6915), #101010;
  }

  &__app-icon-title {
    background: linear-gradient(
        300.98deg,
        rgba(0, 0, 0, 0.15) 39.54%,
        rgba(0, 0, 0, 0) 75.34%
      ),
      var(--text-neutral);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  // &__internet-button {
  //   transform-origin: center;
  //   transform-style: preserve-3d;
  //   perspective: var(--perspective);
  //   transform: translate3d(0, 0, 40px);
  // }
}
</style>