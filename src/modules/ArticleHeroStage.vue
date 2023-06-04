<script setup>
import { ref, onMounted } from "vue";
import ArticleHeroStageLogin from "../components/ArticleHeroStageLogin.vue";
import IdentitySphere from "../components/IdentitySphere.vue";
import { normalizedMousePosition } from "../utils/normalizedMousePosition";

const heroStageElement = ref(null);

onMounted(() => {
  console.log("hi");
  // heroStageElement.value.addEventListener("mousemove", (event) => {
  //   const normalizedCursor = normalizedMousePosition(
  //     event,
  //     heroStageElement.value
  //   );
  //   console.log(normalizedCursor);
  // });
});
</script>

<template>
  <header
    class="article-hero-stage w-full aspect-video py-52"
    ref="heroStageElement"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-12">
        <div class="col-span-8">
          <ArticleHeroStageLogin></ArticleHeroStageLogin>
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
              Für die meisten Anliegen sind Behördengänge notwendig. Bei der
              Nutzung von digitalen Diensten hingegen sind digitale Identitäten
              bereits vorhanden. Wahrscheinlich Dutzende, die man nicht im Griff
              hat. Denn diese ergeben sich aus den Daten über dich, die
              Unternehmen im Laufe der Zeit sammeln.
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