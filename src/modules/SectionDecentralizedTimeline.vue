<script setup>
import Card from "../components/Card.vue";
import Timeline from "../components/Timeline.vue";
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-12 gap-10">
      <div
        class="md:col-span-3 max-h-fit border-b border-border-neutral flex flex-col gap-8"
      >
        <div class="md-title3-heading-a">
          Ein <span class="md-title3-heading-c">Rückblick</span>
        </div>
        <div class="md-caption-neutral">
          Alles basiert auf dem Konzept des Passwortes. Wie haben sich die
          Formen des Identitätsmanagements bis heute hin verändert?
        </div>
      </div>
      <div class="grid grid-cols-9 md:col-span-9 gap-10">
        <div class="md:col-span-3 flex flex-col gap-8">
          <Card class="relative flex aspect-[2/1] items-end overflow-hidden action-active">
            <img
              class="absolute top-0 left-0 w-full h-full object-cover"
              src="../assets/imgs/decentralized/decentralized_timeline-1.png"
              alt=""
            />
            <div class="flex pt-14 px-5 pb-5 z-10">
              <div class="md-subheading-heading-a">
                Das <span class="md-subheading-heading-b">Passwort</span>
              </div>
            </div>
          </Card>
        </div>
        <div class="md:col-span-3 flex flex-col gap-8">
          <Card class="relative flex aspect-[2/1] items-end overflow-hidden action-active">
            <img
              class="absolute top-0 left-0 w-full h-full object-cover"
              src="../assets/imgs/decentralized/decentralized_timeline-2.png"
              alt=""
            />
            <div class="flex pt-14 px-5 pb-5 z-10">
              <div class="md-subheading-heading-a">
                Zentralisierte
                <span class="md-subheading-heading-c">Identität</span>
              </div>
            </div>
          </Card>
        </div>
        <div class="md:col-span-3 flex flex-col gap-8">
          <Card class="relative flex aspect-[2/1] items-end overflow-hidden action-active">
            <img
              class="absolute top-0 left-0 w-full h-full object-cover"
              src="../assets/imgs/decentralized/decentralized_timeline-3.png"
              alt=""
            />
            <div class="flex pt-14 px-5 pb-5 z-10">
              <div class="md-subheading-heading-a">
                Föderierte
                <span class="md-subheading-heading-c">Identität</span>
              </div>
            </div>
          </Card>
        </div>
        <div class="md:col-span-9">
          <Timeline></Timeline>
        </div>
      </div>
    </div>
  </div>
</template>