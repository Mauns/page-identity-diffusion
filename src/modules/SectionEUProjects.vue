<script setup>
import SectionEUProjectCarousel from "../modules/SectionEUProjectCarousel.vue";
import { euProjects } from "../content/euProjects";
import { deProjects } from "../content/deProjects";
</script>

<template>
  <div class="py-32 overflow-hidden bg-surface-neutral border-y border-border-neutral">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-10">
        <div
          class="flex gap-3 col-span-full lg:col-span-6 lg:col-start-4 items-center"
        >
          <div class="md-heading-heading-a">Piloten & Projekte — Europa</div>
        </div>
        <SectionEUProjectCarousel
          :projects="euProjects"
          class="col-span-12 lg:col-span-6 lg:col-start-4"
        ></SectionEUProjectCarousel>
      </div>
      <div class="grid grid-cols-12 gap-10 mt-20">
        <div
          class="flex gap-3 col-span-full lg:col-span-6 lg:col-start-4 items-center"
        >
          <div class="md-heading-heading-a">
            Piloten & Projekte — Deutschland
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-10 mt-6">
        <div
          class="flex gap-3 col-span-full lg:col-span-6 lg:col-start-4 items-center"
        >
          <p class="md-body-neutral">
            Deutschland ist bei dem Thema große Mitwirkende Instanz. Dort wird
            bereits an Ökosystemen und Apps entwickelt, um dem Thema mehr
            Momentum zu verleihen. Das Ökosystem soll dabei vor allem Europaweit
            funktionieren und als Vorlage für Mitgliedsstaaten dienen. Denn die
            Selbstbestimmte Identitäten würden auch dem Entwurf des
            Onlinezugangsgesetzes näherkommen.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-10 mt-8">
        <SectionEUProjectCarousel
          :projects="deProjects"
          class="col-span-12 lg:col-span-6 lg:col-start-4"
        ></SectionEUProjectCarousel>
      </div>
    </div>
  </div>
</template>