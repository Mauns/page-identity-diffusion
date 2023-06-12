<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <div class="container mx-auto py-56">
    <div class="grid grid-cols-12">
      <div class="col-span-12 lg:col-span-4">
        <div class="flex flex-col gap-8">
          <h4 class="md-title3-heading-a">
            Was sind die <span class="md-title3-heading-b">Bausteine</span> der
            <span class="md-title3-heading-c">Self</span>-Sovereign
            <span class="md-title3-heading-c">Identity</span>?
          </h4>
          <p class="md-body-neutral">
            Dazu werden derzeit weltweit technische Grundlagen, Ökosysteme und
            Spezifikationen definiert, um dieses Konzept Realität werden zu
            lassen. Sollte dies gelingen und sich das Konzept der dezentralen
            Identität durchsetzen, ist davon auszugehen, dass dies einen enormen
            Einfluss auf die Art und Weise haben wird, wie wir mit digitalen
            Diensten und Ausweispflichten umgehen. Die EU und Deutschland haben
            sich frühzeitig auf den Weg gemacht, um auf diesen technischen
            Konzepten aufzubauen.
          </p>
          <p class="md-caption-neutral text-text-muted">
            Der Kern des Konzeptes ist das Zusammenspiel zwischen den
            Teilnehmenden in einem dezentralen Netzwerk.
          </p>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-7 lg:col-start-6 flex gap-3">
        <Card class="w-full h-full flex items-end">
          <div class="flex flex-col gap-3 px-8 pb-8 pt-14">
            <h6 class="md-footnote-strong text-text-muted">
              Eine Art neue URL
            </h6>
            <h5 class="md-heading-heading-a">
              <span class="md-heading-heading-b">Decentralized</span>
              Identifiers
            </h5>
          </div>
        </Card>
        <div class="w-full flex flex-col gap-3">
          <Card class="w-full flex-grow flex items-end">
            <div class="flex flex-col gap-3 px-8 pb-8 pt-14">
              <h6 class="md-footnote-strong text-text-muted">
                Die neuen Ausweise
              </h6>
              <h5 class="md-heading-heading-a">
                Verifiable <span class="md-heading-heading-c">Credentials</span>
              </h5>
            </div>
          </Card>
          <Card class="w-full aspect-[2/1] flex items-end">
            <div class="flex flex-col gap-3 px-8 pb-8 pt-14">
              <h6 class="md-footnote-strong text-text-muted">
                Mehrere Synchronisierte Datenbanken
              </h6>
              <h5 class="md-heading-heading-a">
                Distributed <span class="md-heading-heading-b">Ledger</span>
              </h5>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>