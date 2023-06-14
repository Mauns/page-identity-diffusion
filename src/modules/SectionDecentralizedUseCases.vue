<script setup>
import { computed, ref } from "vue";
import Card from "../components/Card.vue";
import { useCaseCollection } from "../content/useCaseCollection";
import { useCase } from "../utils/useCases";
import UseCaseStep from "../components/UseCaseStep.vue";

const pickedCase = ref(useCase.banking);
const caseState = ref(0);

const setCaseState = (s) => {
  caseState.value = s;
};
const pickCase = (s) => {
  pickedCase.value = s;
  caseState.value = 0;
};
</script>

<template>
  <div class="container mx-auto">
    <Card class="w-full aspect-video">
      <div
        class="w-full flex justify-center border-b border-border-neutral px-16"
      >
        <div
          class="md-body-strong text-text-muted py-5 px-8"
          :class="[pickedCase === i ? 'text-text-neutral' : 'cursor-pointer']"
          v-for="(useCase, i) in useCaseCollection"
          :key="i"
          @click="pickCase(i)"
        >
          {{ useCase.title }}
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-span-5 max-h-min py-20 px-16 flex flex-col gap-8"
        >
          <UseCaseStep
            v-for="(step, i) in useCaseCollection[pickedCase].steps"
            :key="i"
            :isActive="caseState === i"
            :title="step.title"
            :body="step.body"
            @click="setCaseState(i)"
          ></UseCaseStep>
        </div>
        <div class="col-span-7 flex items-center justify-center aspect-square">
          <pre>{{ pickedCase }} · {{ caseState }}</pre>
        </div>
      </div>
    </Card>
  </div>
</template>