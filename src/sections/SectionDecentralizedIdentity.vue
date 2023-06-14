<script setup>
import Splitscreen from "../components/Splitscreen.vue";
import WikiTip from "../components/WikiTip.vue";
import SectionDecentralizedTimeline from "../modules/SectionDecentralizedTimeline.vue";
import SectionDecentralizedUseCases from "../modules/SectionDecentralizedUseCases.vue";
import SectionDecentralizedTech from "../modules/SectionDecentralizedTech.vue";
</script>

<template>
  <section class="w-full border-t border-border-neutral">
    <div
      class="relative flex flex-col items-center justify-center bg-surface-subdued w-full aspect-[2/1] py-72"
    >
      <div class="container mx-auto">
        <h2 class="md-large-title-heading-a text-center -mt-80">
          <span class="md-large-title-heading-c">Identität</span> zurückgewinnen
          durch <span class="md-large-title-heading-b">dezentralisieren</span>
        </h2>
      </div>
      <img
        src="../assets/imgs/decentralized/decentralized_hero.png"
        class="absolute w-full bottom-0 object-cover"
        alt=""
      />
    </div>
    <Splitscreen>
      <template v-slot:gfx>
        <div class="bg-surface-subdued w-full h-full flex items-center justify-center">
          <div class="w-full grid grid-cols-12">
            <div class="col-span-10 col-start-2">
              <img src="../assets/imgs/decentralized/flow-chart.png" alt="">
            </div>
          </div>
        </div>
      </template>
      <template v-slot:text>
        <div
          data-split
          class="col-span-6 col-start-4 h-screen flex flex-col justify-center md-body-neutral"
        >
          <div
            class="absolute left-0 right-0 top-0 bottom-0"
            style="background-image: var(--surface-subdued-fade-from-bottom)"
          ></div>
          <p class="z-10">
            Am technologischen Horizont zeichnet sich jedoch etwas ab, das es
            den Menschen ermöglichen könnte, durch das Prinzip der
            <WikiTip item="dezentralisierung">Dezentralisierung</WikiTip> die
            Kontrolle über ihre digitalen und verteilten Identitäten
            zurückzugewinnen und sich gleichzeitig bequemer (als bisher)
            selbstbestimmt und identitätsgeschützt gegenüber anderen Personen,
            Unternehmen oder Organisationen online zu identifizieren. Der Kern
            des Konzeptes nutzt einen Aufbau, den man auch das Trust Triangle
            nennt. Im Grunde sind bei jeglicher Form von Transaktionen immer
            drei Parteien beteiligt. Allerdings unabhängig von einander und eben
            dezentral. Ein Beispiel. Du möchtest dich digital ummelden. Du hast
            eine digitale Meldebescheinigung erhalten und dein Personalausweis
            wurde dir vom Staat ebenfalls digital ausgestellt. Mit deiner
            digitalen Brieftasche könntest du dich nun bei der zuständigen
            Behörde anmelden. Dort würdest du einfach deine neue Adresse
            angeben. Die Behörde würde schließlich deinen Personalausweis
            überprüfen, indem sie mit dem Aussteller deines digitalen
            Personalausweises, dem Staat, interagiert, der der Behörde
            versichert, dass deine persönlichen Daten korrekt sind.
          </p>
        </div>
      </template>
    </Splitscreen>
    <div class="w-full" style="background-image: var(--surface-subdued-fade-from-top);">
      <SectionDecentralizedTimeline></SectionDecentralizedTimeline>
    </div>
    <div class="container mx-auto mt-32 mb-14">
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
          <div class="w-full md-caption-strong mb-5">
            Self-Sovereign Identity
          </div>
          <div class="w-full md-subheading-heading-a">
            Identitätsmanagement mit Self-Sovereign
            <span class="md-subheading-heading-c">Identity</span><br />Wie
            könnten
            <span class="md-subheading-heading-b">Anwendungsfälle</span> in
            Zukunft aussehen?
          </div>
        </div>
      </div>
    </div>
    <SectionDecentralizedUseCases></SectionDecentralizedUseCases>
    <SectionDecentralizedTech></SectionDecentralizedTech>
  </section>
</template>