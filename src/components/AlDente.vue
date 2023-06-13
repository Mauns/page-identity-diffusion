<script setup>
import { ref, defineProps, watchEffect, onMounted, computed, toRefs } from "vue";

const props = defineProps({
  references: {
    type: Array,
    required: true,
  },
});

const references = computed(() => {
  return toRefs(props.references);
});

const curves = ref([]);

// watchEffect(() => {
//     console.log(references.value)
//     curves.value = references.map((ref) => {
//   console.log(ref);
//     const start = { x: 0, y: 0 }; // starting point
//     const end = ref.getBoundingClientRect(); // location of referenced component
//     const controlPoint1 = { x: start.x + (end.x - start.x) / 2, y: start.y };
//     const controlPoint2 = { x: end.x - (end.x - start.x) / 2, y: end.y };
//     const curvePoints = [start, controlPoint1, controlPoint2, end];
//     const path = `M${curvePoints[0].x},${curvePoints[0].y} C${curvePoints[1].x},${curvePoints[1].y} ${curvePoints[2].x},${curvePoints[2].y} ${curvePoints[3].x},${curvePoints[3].y}`;
//     return { path };
//     });
// });
</script>


<template>
  <svg>
    <!-- <path
      v-for="(curve, index) in curves"
      :key="index"
      :d="curve.path"
      stroke="black"
      fill="none"
    /> -->
  </svg>
</template>
