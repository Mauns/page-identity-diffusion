<script setup>
import { computed, ref } from "vue";
import { FlagIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  milestones: {
    type: Array,
    default: [1960, 1982, 2002],
  },
});

const years = ref({
  start: 1960,
  end: 2023,
});

const timeSpan = computed(() => {
  let span = years.value.end - years.value.start;
  let timeSpanMap = new Map();
  for (let year = years.value.start; year <= years.value.end; year++) {
    const isMilestone = props.milestones.some((ms) => {
      return ms === year;
    });
    timeSpanMap.set(year, {
      year: year,
      isMilestone: isMilestone,
    });
  }

  return Object.fromEntries(timeSpanMap);
});

const is10 = (v) => {
  return v % 10 === 0;
};
</script>

<template>
  <div class="sm:w-full">
    <div
      class="w-full pt-1 border-b border-border-forced flex items-end justify-between"
    >
      <div
        v-for="(el, i) in timeSpan"
        :key="i"
        :class="[is10(i) && 'h-3', el.isMilestone && 'h-5']"
        class="relative w-px h-2 bg-border-forced"
      >
        <div v-if="el.isMilestone" class="absolute -left-0.5 bottom-8">
          <div class="flex gap-0.5">
            <FlagIcon class="w-4 text-lime-neutral"></FlagIcon>
            <div class="md-caption-strong">{{ el.year }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>