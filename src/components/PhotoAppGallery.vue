<script setup>
import { computed, onMounted, ref } from "vue";
import PhotoAppImage from "./PhotoAppImage.vue";

const props = defineProps({
  photos: {
    type: Array,
    default: [
      "./src/assets/imgs/problems/photo-app-1.png",
      "./src/assets/imgs/problems/photo-app-2.png",
      "./src/assets/imgs/problems/photo-app-3.png",
      "./src/assets/imgs/problems/photo-app-4.png",
    ],
  },
});

const rect = ref(null);
const coordinates = ref([]);

const elem = onMounted(async () => {
  coordinates.value = getCoordinates(rect.value, props.photos);
});

const getCoordinates = (element, countArray) => {
  const rect = element.getBoundingClientRect();
  const coordinates = [];

  for (let i = 0; i < countArray.length; i++) {
    const count = countArray.length;
    for (let j = 0; j < count; j++) {
      const distance = 0; // the distance around the element to place the coordinates
      const x =
        rect.left -
        distance +
        Math.random() * (rect.width + distance * 2) -
        rect.width;
      const y =
        rect.top -
        distance +
        Math.random() * (rect.height + distance * 2) -
        rect.height;

      coordinates.push({
        x,
        y,
        rotation: Math.random() * 15 - 30,
      });
    }
  }

  return coordinates;
};
</script>

<template>
  <div>
    <div class="relative">
      <PhotoAppImage
        v-for="(photo, index) in props.photos"
        :src="photo"
        :key="index"
        class="absolute w-14"
        :style="`top: ${
          coordinates[index]?.y !== undefined ? coordinates[index].y : 0
        }px; left: ${
          coordinates[index]?.x !== undefined ? coordinates[index].x : 0
        }px;
            transform: rotate(${coordinates[index]?.rotation}deg);
        `"
      ></PhotoAppImage>
      <div ref="rect" class="z-10"><slot></slot></div>
    </div>
  </div>
</template>