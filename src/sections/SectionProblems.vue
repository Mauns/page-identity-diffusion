<script setup>
import SectionProblemsOpener from "../modules/SectionProblemsOpener.vue";
import SectionProblemsCompanies from "../modules/SectionProblemsCompanies.vue";
import CardStatistical from "../components/CardStatistical.vue";
import WikiTip from "../components/WikiTip.vue";
import SectionProblemsSplitscreen from "../modules/SectionProblemsSplitscreen.vue";
import ArticleHeroStageCard from "../components/ArticleHeroStageCard.vue";
import { ref } from "vue";
import { normalizeMouseCoords } from "../utils/normalizedMousePosition";

const problemCardCoords = ref({ x: 0, y: 0 });
const problemCardElement = ref(null);

const setMouseCoordinates = (e) => {
  problemCardCoords.value = normalizeMouseCoords(e, problemCardElement.value);
};
</script>

<template>
  <section class="w-full">
    <div
      class="bg-surface-subdued-fade-from-bottom border-b border-border-neutral"
      style="background-image: var(--surface-subdued-fade-from-bottom);"
    >
      <SectionProblemsOpener></SectionProblemsOpener>
      <div class="container mx-auto">
        <div class="grid grid-cols-12 mb-40">
          <div class="col-span-12 md:col-span-6 md:col-start-4">
            <p class="text-text-neutral md-body-neutral">
              Das Internet ist aus der Gesellschaft nicht mehr wegzudenken.
              Viele Aufgaben, die früher analog und auch von Mensch zu Mensch
              erledigt wurden, können heute online erledigt werden. Dazu gehören
              beispielsweise die Kommunikation mit Freunden, Familie oder
              Arbeitskollegen sowie der Abschluss von Verträgen und die
              Eröffnung von Bankkonten.
            </p>
            <p class="text-text-neutral md-body-neutral mt-2">
              Seit langem wird in Deutschland & Europa bemängelt, dass es an
              Möglichkeiten und Anwendungen fehlt, sich digital auszuweisen und
              Behördengänge digital zu erledigen. Die Beantragung von
              Personalausweis & Reisepass, die Kfz-Zulassung oder die Ummeldung
              des Wohnsitzes erfordern in Deutschland immer noch den Besuch
              überfüllter und unflexibler Bürgerämter und die damit verbundenen
              Wartezeiten.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative container mx-auto z-10">
      <div class="grid grid-cols-12 mb-20">
        <div class="col-span-12 md:col-span-6 md:col-start-4">
          <div class="-mt-20 mb-20">
            <div
              class="w-full relative bg-surface-muted rounded-2xl border border-border-neutral outline outline-1 outline-border-inv-emphasized overflow-clip"
              ref="problemCardElement"
              @mousemove="setMouseCoordinates"
            >
              <div
                class="absolute right-0 -top-1/3 scale-125 pointer-events-none z-10"
              >
                <ArticleHeroStageCard
                  :mouseCoords="problemCardCoords"
                ></ArticleHeroStageCard>
              </div>
              <div
                class="relative p-8 flex flex-col gap-2 w-full md:w-2/3 z-20"
                style="background-image: var(--surface-hole-from-left);"
              >
                <div class="md-heading-heading-a">
                  Das <span class="md-heading-heading-b">Leiden</span> des
                  wartenden <span class="md-heading-heading-c">Wärters</span>
                </div>
                <p class="md-caption-neutral">
                  2021 mussten 511.102 Menschen auf Ihre Lizenz zum Picanha
                  strip steak tenderloin spare ribs chuck turkey fatback boudin
                  turducken ball tip. Jowl fatback capicola, cow strip steak ham
                  hock chislic turkey biltong chuck frankfurter andouille.
                </p>
              </div>
            </div>
          </div>
          <p class="text-text-neutral md-body-neutral">
            Sich im Netz auszuweisen und seine Identität zu bestätigen, ist
            derzeit oft nur mit Workarounds wie
            <WikiTip item="video-ident">Video-Ident</WikiTip> möglich. Dieses
            Verfahren kommt zum Beispiel bei der Eröffnung eines Bankkontos zum
            Einsatz, bei dem die Echtheit der Person per Video und durch
            Vorzeigen des Personalausweises in die Kamera überprüft wird. In
            Deutschland gibt es zwar den elektronischen Personalausweis der
            Bundesregierung, dieser wird aber bisher von der Bevölkerung
            flächendeckend abgelehnt. Bis heute ist es in Deutschland nicht
            möglich, den eigenen Wohnsitz zum Beispiel online umzumelden.
          </p>
        </div>
      </div>
      <!-- CARD COLLECTION -->
      <div class="grid gap-10 grid-cols-12 mt-40 mb-20">
        <!-- COL -->
        <div class="col-span-12 md:col-span-3 flex flex-col gap-10">
          <div class="md-title3-heading-a">
            <span class="md-title3-heading-c">Störfaktoren</span> bei
            nicht-<span class="md-title3-heading-b">digitalen</span> Anträgen
          </div>
          <div class="flex flex-col gap-2">
            <p class="md-caption-neutral">
              Viele Bürger:innen stören sich heutzutage an immer noch an
              nicht-digital verfügbaren Anträgen.
            </p>
            <p class="md-footnote-neutral text-text-muted">Studie IDnow 2023</p>
          </div>
        </div>
        <!-- COL -->
        <div class="col-span-12 md:col-span-3">
          <CardStatistical
            class="h-max"
            title="Lange <span class='md-subheading-heading-b'>Wartezeiten</span> bei Antragsbearbeitungen"
          >
            Gimme Some
          </CardStatistical>
        </div>
        <div class="col-span-12 md:col-span-3 md:mt-20">
          <CardStatistical
            class="h-max"
            title="<span class='md-subheading-heading-b'>Anreise</span> zum jeweiligen Ort"
          >
            Gimme Some
          </CardStatistical>
        </div>
        <div class="col-span-12 md:col-span-3 md:-mt-20">
          <CardStatistical
            class="h-max"
            title="Unflexible <span class='md-subheading-heading-b'>Termine</span> und beschränkte Öffnungszeiten"
          >
            Gimme Some
          </CardStatistical>
        </div>
      </div>
    </div>
    <SectionProblemsCompanies class="-z-0"></SectionProblemsCompanies>
    <SectionProblemsSplitscreen></SectionProblemsSplitscreen>
  </section>
</template>