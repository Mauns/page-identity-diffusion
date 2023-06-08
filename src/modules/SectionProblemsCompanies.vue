<script setup>
import WikiTip from "../components/WikiTip.vue"
import SectionProblemsStories from "../modules/SectionProblemsStories.vue"
</script>

<template>
  <div
    class="pb-52 md:pt-[33.5rem] md:-mt-72 bg-surface-subdued border-t border-border-neutral"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-12 mb-32">
        <div class="col-span-4"></div>
        <div class="col-span-4">
          <p class="md-body-neutral">
            Im Gegensatz dazu sind viele digitale kommerzielle Dienste, die
            täglich und bequem online genutzt werden, oft bequem. Menschen
            tauschen Nachrichten und Fotos aus, teilen Erinnerungen, streamen
            Musik und Serien, suchen nach Dingen, kaufen ein und nutzen für all
            diese Interaktionen Dienste wie Google Search, Spotify, Instagram,
            TikTok oder auch kleine Apps, die nur den Schlaf oder
            Gesundheitsdaten aufzeichnen sollen.
          </p>
          <p class="md-body-neutral mt-2">
            Je nachdem, wie intensiv man digitale Dienste nutzt, fallen so im
            Laufe der Jahre eine Vielzahl von Zugriffs- und Nutzungsdaten an.
            Hier den Überblick zu behalten, kann für die eine oder andere Person
            zu einer schwierigen oder gar unmöglichen Herausforderung werden.
            Jemand sagt, er habe noch nie ein Passwort vergessen? Red Flag - die
            Person ist sehr wahrscheinlich ein Lügner:in.
          </p>
          <p class="md-body-neutral mt-2">
            Um dem entgegenzuwirken, gibt es verschiedene Möglichkeiten. Zum
            Beispiel Passwortmanager oder die Möglichkeit, Apple, Google,
            Facebook, Microsoft und Co. als sogenannte
            <wiki-tip item="identity provider">Identity Provider</wiki-tip> zu
            nutzen. Dieses Prinzip wird auch als Single-Sign-On bezeichnet. So
            können mit den Zugangsdaten zu den Diensten dieser Unternehmen ganz
            einfach weitere Dienste genutzt werden.
          </p>
        </div>
        <div class="col-span-4"></div>
      </div>
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-8 lg:col-start-3">
            <SectionProblemsStories></SectionProblemsStories>
        </div>
      </div>
    </div>
  </div>
</template>