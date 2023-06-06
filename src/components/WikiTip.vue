<script setup>
import Card from "./Card.vue";
import Markdoc from "@markdoc/markdoc";
import { config } from "./WikiConfig";
import { computed, ref } from "vue";

import { doc } from "../content/wiki";

const props = defineProps({
  item: {
    type: String,
    default: "fallback",
  },
});

const slot = ref(null);

const wikiContent = computed(() => {
  const pickedDoc = doc.filter((d) => {
    return d.title.toLowerCase() === props.item.toLowerCase();
  })[0];

  const ast = Markdoc.parse(pickedDoc.content);
  const content = Markdoc.transform(ast, config);
  const html = Markdoc.renderers.html(content);
  return html;
});
</script>

<template>
  <div class="relative inline group cursor-help">
    <Card
      class="wiki-card -left-[120px] bottom-10 w-[360px] will-change-auto group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-150 ease-out"
      v-html="wikiContent"
    ></Card>
    <span
      class="border-b-2 border-spacing-y-0 border-dashed border-lime-neutral"
      ><slot ref="slot"></slot>
    </span>
  </div>
</template>

<style lang="scss">
.wiki-card {
  position: absolute !important;
  visibility: hidden;
  transition-property: all;

  heading {
    font-family: "Gambetta Variable";
    font-weight: 300;
    line-height: 1.5rem;
    font-size: 1.3125rem;
    letter-spacing: -0.04em;
    text-transform: none;
    text-decoration: none;
    font-style: normal;
    font-feature-settings: "tnum";

    display: flex;
    margin-bottom: 0.75rem;
  }

  p {
    font-family: "Public Sans";
    font-weight: 300;
    line-height: 1.5rem;
    font-size: 0.9375rem;
    letter-spacing: 0.01em;
    text-transform: none;
    text-decoration: none;
    font-style: normal;
    font-feature-settings: "tnum";
  }
}
</style>