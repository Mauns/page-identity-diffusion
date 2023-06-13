<script setup>
import { ref, onMounted } from "vue";
import ArticleHeroStageLogin from "../components/ArticleHeroStageLogin.vue";
import ArticleHeroStageCard from "../components/ArticleHeroStageCard.vue";
import IdentitySphere from "../components/IdentitySphere.vue";
import { $heroStageCoords } from "../utils/store";
import { useStore } from "@nanostores/vue";
import { normalizeMouseCoords } from "../utils/normalizedMousePosition";
import ArticleHeroStageAudioPlayer from "../components/ArticleHeroStageAudioPlayer.vue";
import AppleButton from "../components/AppleButton.vue";
import AlDente from "../components/AlDente.vue";

const heroStageCoords = useStore($heroStageCoords);
const heroStageElement = ref(null);

const player = ref(null)
const login = ref(null)
const card = ref(null)

const setMouseCoordinates = (e) => {
  $heroStageCoords.set(normalizeMouseCoords(e, heroStageElement.value));
};
</script>

<template>
  <header
    class="article-hero-stage w-full aspect-video py-52"
    ref="heroStageElement"
    @mousemove="setMouseCoordinates"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-12">
        <div class="relative col-span-8">
          <!-- <AlDente :references="[player]"></AlDente> -->
          <ArticleHeroStageAudioPlayer
            ref="player"
            class="absolute -left-1/4 top-0"
            :mouseCoords="heroStageCoords"
          ></ArticleHeroStageAudioPlayer>
          <ArticleHeroStageCard
            ref="card"
            class="absolute -left-[22%] top-[45%]"
            :mouseCoords="heroStageCoords"
          ></ArticleHeroStageCard>
          <ArticleHeroStageLogin
            ref="login"
            class="absolute right-1/4 top-1/4"
            :mouseCoords="heroStageCoords"
          ></ArticleHeroStageLogin>
          <div
            class="absolute -left-1/4 top-3/4 rotate-12 blur-[3px] backdrop-blur-sm backdrop-saturate-200 rounded-full"
          >
            <div
              class="duration-[2000ms] ease-out"
              :style="`
              transform: perspective(var(--perspective)) translateX(${
                heroStageCoords.x * -12
              }px) translateY(${heroStageCoords.y * -24}px) rotateX(${
                0 + heroStageCoords.y * -20
              }deg) rotateY(${-10 + heroStageCoords.x * -20}deg) rotateZ(${
                heroStageCoords.y * 10
              }deg);
            `"
            >
              <AppleButton>Sign in with Apfel</AppleButton>
            </div>
          </div>
        </div>
        <div class="col-span-4">
          <div class="py-20">
            <div class="mb-20">
              <IdentitySphere></IdentitySphere>
            </div>
            <p class="md-body-heading-b">Digitale Identitätsdiffusion</p>
            <h1 class="mt-4 md-title2-heading-a">
              Deine <span class="md-title2-heading-b">Identität</span> liegt
              nicht in deiner <span class="md-title2-heading-c">Hand</span>?
            </h1>
            <p class="mt-10 md-body-neutral">
              <span class="md-body-strong"
                >Digitale Identität. Was ist das eigentlich?</span
              >
              In Deutschland und Europa können wir noch lange nicht von einem
              erfolgreichen digitalen Identitätsmanagement & Prozessen sprechen.
              Für die meisten Anliegen sind Behördengänge notwendig.
            </p>
            <p class="mt-2 md-body-neutral">
              Bei der Nutzung von digitalen Diensten hingegen sind digitale
              Identitäten bereits vorhanden. Wahrscheinlich Dutzende, die man
              nicht im Griff hat. Denn diese ergeben sich aus den Daten über
              dich, die Unternehmen im Laufe der Zeit sammeln.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.article-hero-stage {
  background: radial-gradient(
      64.64% 100% at 26.07% 0%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 30.9%,
      rgba(0, 0, 0, 0.8) 100%
    )
    var(--surface-subdued)
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
}
</style>