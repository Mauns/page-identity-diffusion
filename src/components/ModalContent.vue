<script setup>
import { computed, onMounted, ref, watch } from "vue";
import Markdoc from "@markdoc/markdoc";
import { modalContent, modalContentType } from "../content/modalContent";
import { $modalContent, $showModal } from "../utils/store";
import { useStore } from "@nanostores/vue";

const contentId = useStore($modalContent);
const showModal = useStore($showModal);

const content = computed(() => {
  let body = "";
  let title = "";
  let subtitle = "";

  const doc = modalContent.filter((mc) => {
    return mc.id === contentId;
  })[0];

  console.log(doc)

  if (doc && doc.title) {
    title = doc.title
  }

  if (doc && doc.body !== undefined) {
    const ast = Markdoc.parse(doc.body);
    const content = Markdoc.transform(ast);
    body = Markdoc.renderers.html(content);
  }

  return {
    title: title,
    subtitle: "",
    body: body,
    id: contentId,
  };
});
</script>

<template>
  <div class="w-full flex flex-col">
    <div
      class="aspect-[2/1] border-b border-border-neutral bg-surface-subdued"
    ></div>
    <div>
      <div class="pb-8">
        <pre>{{ content }} {{ contentId }} {{ setContent }}</pre>
        <div
          class="md-title3-heading-a"
          v-if="content.title"
          v-html="content.title"
        ></div>
        <div
          class="md-body-heading-a"
          v-if="content.subtitle"
          v-html="content.subtitle"
        ></div>
      </div>
      <div v-html="content.body" v-if="content.body"></div>
    </div>
  </div>
</template>