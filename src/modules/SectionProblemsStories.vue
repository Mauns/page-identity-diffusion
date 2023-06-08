<script setup>
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import SectionProblemsNetworkAvatar from "../components/SectionProblemsNetworkAvatar.vue";
import { toggleModal } from "../utils/modalUtils";

import { normalizeMouseCoords } from "../utils/normalizedMousePosition";

const pointedAtStory = ref(0);
const mousePosition = ref({
  x: 0,
  y: 0,
});

const pointingAtStory = (story) => {
  pointedAtStory.value = story;
};

const setMousePosition = (e) => {
  mousePosition.value = normalizeMouseCoords(e, e.target);
};
</script>

<template>
  <card
    class="problems-network relative w-full mx-auto aspect-[3/1] overflow-hidden"
    bg="bg-surface-neutral"
    @mousemove.self="setMousePosition"
  >
    <img
      src="../assets/imgs/network/id.png"
      class="absolute w-full aspect-square -right-1/3 -top-3/4 duration-1000 ease-out transform-gpu pointer-events-none"
      :style="`transform: rotateZ(${
        pointedAtStory * -120 + mousePosition.x * -90
      }deg) scale(1.3);`"
    />
    <section-problems-network-avatar
      @mouseenter="pointingAtStory(1)"
      @click="toggleModal('p1')"
      img="./src/assets/imgs/network/image-01.png"
      isStory
      class="absolute left-[4%] top-[60%]"
    >
      <div class="md-body-heading-c">Zugang</div>
      verweigert
    </section-problems-network-avatar>
    <section-problems-network-avatar
      img="./src/assets/imgs/network/image-03.png"
      class="absolute left-[23%] top-[75%]"
    ></section-problems-network-avatar>
    <section-problems-network-avatar
      img="./src/assets/imgs/network/image-02.png"
      class="absolute left-[8%] top-[20%]"
    ></section-problems-network-avatar>
    <section-problems-network-avatar
      img="./src/assets/imgs/network/image-04.png"
      class="absolute left-[27%] top-[10%]"
    ></section-problems-network-avatar>
    <section-problems-network-avatar
      img="./src/assets/imgs/network/image-05.png"
      class="absolute left-[33%] top-[43%]"
    ></section-problems-network-avatar>
    <section-problems-network-avatar
      img="./src/assets/imgs/network/image-06.png"
      width="w-24"
      class="absolute left-[34%] top-[21%]"
    ></section-problems-network-avatar>
    <section-problems-network-avatar
      @mouseenter="pointingAtStory(2)"
      @click="toggleModal"
      img="./src/assets/imgs/network/image-07.png"
      isStory
      class="absolute left-[42%] top-[60%]"
    >
      Provider
      <div class="md-body-heading-c">liest</div>
      E-Mails mit
    </section-problems-network-avatar>
    <section-problems-network-avatar
      img="./src/assets/imgs/network/image-08.png"
      class="absolute left-[47%] mx-auto top-[12%]"
    ></section-problems-network-avatar>
    <section-problems-network-avatar
      img="./src/assets/imgs/network/image-09.png"
      class="absolute left-[60%] top-[33%]"
    ></section-problems-network-avatar>
    <section-problems-network-avatar
      @mouseenter="pointingAtStory(3)"
      @click="toggleModal"
      img="./src/assets/imgs/network/image-10.png"
      isStory
      class="absolute left-[72%] top-[16%]"
    >
      Meinungs<span class="md-body-heading-b">maschine</span>
    </section-problems-network-avatar>
    <section-problems-network-avatar
      img="./src/assets/imgs/network/image-11.png"
      class="absolute left-[77%] top-[67%]"
    ></section-problems-network-avatar>
    <section-problems-network-avatar
      img="./src/assets/imgs/network/image-12.png"
      class="absolute left-[79%] top-[57%]"
    ></section-problems-network-avatar>
    <section-problems-network-avatar
      img="./src/assets/imgs/network/image-13.png"
      class="absolute left-[90%] top-[30%]"
    ></section-problems-network-avatar>
  </card>
</template>

<style lang="scss">
.problems-network {
  img {
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -webkit-user-select: none;
  }
}
</style>