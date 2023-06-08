<script setup>
import Splitscreen from "../components/Splitscreen.vue";
</script>

<template>
  <Splitscreen>
    <template v-slot:text>
      <div
        class="col-span-6 col-start-4 h-screen flex flex-col justify-center md-body-neutral"
      >
        <p>
          Sowohl im staatlichen als auch im kommerziellen Fall handelt es sich
          um digitale Identitäten. Der Unterschied besteht darin, dass es im
          staatlichen Fall um den Nachweis bzw. die Bestätigung der eigenen
          Identität geht.
        </p>
        <p class="mt-3">
          Bei der kommerziellen Form kann man schon eher sagen, dass es zwar in
          erster Linie um die Authentifizierung gegenüber einer Plattform geht,
          aber vor allem auch um die Erfassung der Identität durch die
          entsprechende Plattform.
        </p>
      </div>
      <div
        class="col-span-6 col-start-4 h-screen flex flex-col justify-center md-body-neutral"
      >
        <p>
          <span class="md-body-strong">Was ist damit gemeint?</span> Nun,
          Identität kann im Netz auf viele Arten dargestellt werden. TikToks For
          You Page, Suchhistorien, hochgeladene Fotos, gestreamte Musik & Filme,
          Einkäufe, Transaktionshistorien (Banking), Standortdaten, IP-Adressen,
          Likes, Chatverläufe oder E-Mail-Inhalte sind meist sehr individuell
          und können Teile und Vorlieben (deiner) Identität abbilden.
        </p>
        <p class="mt-3">
          Die Dienste, bei denen wir angemeldet sind, nutzen natürlich viele
          dieser Daten, um Angebote personalisieren zu können. Viel wichtiger
          ist jedoch, dass diese Daten auch missbraucht, gestohlen oder sogar
          entwendet werden können.
        </p>
      </div>
      <div
        class="col-span-6 col-start-4 h-screen flex flex-col justify-center md-body-neutral"
      >
        <p>
          In einer Zeit, in der die digitale Welt in immer mehr Lebensbereichen
          Einzug erhält; in welcher vielleicht ganze Generationen wichtige Teile
          ihrer eigenen Geschichte und Erinnerungen online erleben oder
          dokumentieren, ist es umso kritischer, dass die Kontrolle über die
          eigenen Daten in den allermeisten Fällen nicht in den eigenen Händen
          gehalten wird. Bedenklich dabei ist vor allem auch, dass über
          Single-Sign-Ons viele dieser Daten mehr oder weniger für
          Tech-Giganten, die gar nichts mit der eigentlichen genutzten App zu
          tun haben, zugänglich sein können.
        </p>
      </div>
    </template>
  </Splitscreen>
</template>