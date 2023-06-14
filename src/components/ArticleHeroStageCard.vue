<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "@nanostores/vue";
import { $heroStageCoords, $username } from "../utils/store";

const username = useStore($username);

const props = defineProps({
  mouseCoords: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
  },
});

const mouseCoords = computed(() => {
  return props.mouseCoords
})

const card = ref(null);

// const overCard = (e) => {
//   const boundings = document
//     .querySelector(".holo-card")
//     .getBoundingClientRect();
//   const mouseX = mouseCoords.value.x;
//   const mouseY = mouseCoords.value.y;
//   const rotateX = (mouseY / boundings.height) * 20 - 10;
//   const rotateY = (mouseX / boundings.width) * 20 - 10;
//   const rotateXOffset = -(rotateX / 10) * boundings.width;
//   const rotateYOffset = -(rotateY / 20) * boundings.height;
//   const holoOpac = Math.abs(
//     (mouseX / boundings.width + mouseX / boundings.width - 1) * 2
//   );

//   console.log(rotateX, rotateY);
//   setStyle("--rotateX", `${rotateX}deg`);
//   setStyle("--rotateY", `${rotateY}deg`);
//   setStyle("--rotateXOffset", `${rotateXOffset}px`);
//   setStyle("--rotateYOffset", `${rotateYOffset}px`);
//   setStyle("--holo-opac", `${holoOpac}`);
// };

// const setStyle = (cssVar, cssVal) => {
//   document.documentElement.style.setProperty(cssVar, cssVal);
// };
</script>

<template>
  <div>
    <div
      class="holo-card"
      ref="card"
      :style="`
      transform: perspective(var(--perspective))
      rotateY(${45 + mouseCoords.x * 5}deg)
      rotateZ(${-35 + mouseCoords.y * 5}deg)
      rotateX(${mouseCoords.y * 15}deg);
      `"
    >
      <div class="holo-name">{{ username }}</div>
      <div
        class="holo-effect"
        :style="`background-position: ${150 + mouseCoords.x * 250}px ${
          -100 + mouseCoords.y * -200
        }px`"
      ></div>
      <div
        class="holo-light"
        :style="`
            transform: translateX(${
              mouseCoords.x * 40 + mouseCoords.y * 20
            }%) translateY(${mouseCoords.y * -20}%);
        opacity: ${((mouseCoords.x + mouseCoords.y) / 1.25) * 0.1}
        `"
      ></div>
    </div>
  </div>
</template>

<style>
/* 640px old size */

:root {
  --rotateX: 0deg;
  --rotateY: 0deg;
  --holo-opac: 0;
  --perspective: 10000px;
}

.holo-card {
  background: var(--surface-muted);
  background-image: url("../assets/imgs/hero-stage/personalausweis.png");
  background-size: cover;
  /* border: 1px rgba(240, 240, 240, 0.12) solid; */
  box-shadow: inset 16px -96px 80px -24px rgba(0, 0, 0, 0.6);
  filter: drop-shadow(-1px 0px 0px #000000)
    drop-shadow(0px -1px 0px rgba(240, 240, 240, 0.2));
  border-radius: 21px;
  border-top: 1px var(--surface-subdued) solid;
  border-right: 1px var(--surface-subdued) solid;
  overflow: hidden;
  position: relative;
  width: 512px;
  aspect-ratio: 16/10;

  transition: all 1000ms cubic-bezier(0.25, 1, 0.5, 1);

  will-change: transform;
}

/* .holo-card:hover {
  transform: perspective(var(--perspective)) rotateX(var(--rotateX))
    rotateY(var(--rotateY));
} */

.holo-card:hover .holo-light {
  transform: perspective(var(--perspective)) translateX(var(--rotateYOffset))
    translateY(var(--rotateXOffset));

  opacity: 0.1;
}

/* .holo-card:hover .holo-effect {
  background-position: var(--rotateYOffset) calc(var(--rotateXOffset) / 2);
  opacity: var(--holo-opac);
} */

.holo-light {
  aspect-ratio: 3/2;
  background: #f0f0f0;
  border-radius: 999px;
  filter: blur(160px);
  opacity: 0.1;
  width: 512px;
  position: absolute;

  will-change: opacity transform;
  transition: all 1000ms cubic-bezier(0.25, 1, 0.5, 1);

  z-index: 1;
}

.holo-effect {
  background: linear-gradient(
    47.56deg,
    #c3fa2a 0%,
    rgba(42, 250, 137, 0.31) 26.45%,
    rgba(245, 42, 250, 0.15) 39.81%,
    rgba(250, 42, 42, 0) 49.31%
  );
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(50px);
  mix-blend-mode: color-dodge;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  /* opacity: 0; */
  -webkit-mask-image: url("../assets/imgs/hero-stage/personalausweis-holo-mask.png");
  mask-image: url("../assets/imgs/hero-stage/personalausweis-holo-mask.png");
  mask-size: cover;
  transition: all 1000ms cubic-bezier(0.25, 1, 0.5, 1);
  will-change: opacity background-position;
  z-index: 2;
}

.holo-name {
  position: absolute;
  left: calc(435px / 1.575);
  top: calc(89px * 1.5);
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 300;
  font-size: calc(34px / 1.6666);
  line-height: 100%;
  text-transform: uppercase;
}
</style>
