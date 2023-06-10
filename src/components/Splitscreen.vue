<script setup>
import { onMounted, ref } from "vue";
import { watchDataAttrChanges } from "../utils/lenis/intersectionObserver";
import { thresholds } from "../utils/lenis/thresholds";

const triggers = ref(new Map());

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      const dataSplit = entry.target.getAttribute("data-split");
      if (entry.boundingClientRect.y > 0) {
        triggers.value.set(dataSplit, {
          id: dataSplit,
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio.toFixed(2),
        });
      }
    });
  },
  { threshold: thresholds }
);

// observe elements with 'data-split' attribute
const intersectionObserver = () => {
  const splitElems = document.querySelectorAll("[data-split]");
  splitElems.forEach((elem, index) => {
    elem.setAttribute("data-split", index);
    observer.observe(elem);
    triggers.value.set(index, {});
  });
};

onMounted(() => {
  intersectionObserver();
});
</script>

<template>
  <div class="w-full border-t border-border-neutral">
    <div class="grid grid-cols-12">
      <div class="col-span-6 min-h-screen max-h-fit">
        <div
          class="sticky top-0 bottom-0 w-full h-screen flex items-center justify-center"
        >
          <pre>
            {{ triggers }}
          </pre>
          <slot name="gfx"></slot>
        </div>
      </div>
      <div
        class="col-span-6 bg-surface-neutral min-h-screen border-l border-border-neutral flex items-center justify-center"
      >
        <div class="grid grid-cols-12">
          <slot name="text"></slot>
        </div>
      </div>
    </div>
  </div>
</template>