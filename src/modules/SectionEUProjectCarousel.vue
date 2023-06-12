<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container gap-10">
      <div class="embla__slide flex-grow" v-for="(p, i) in projects" :key="i">
        <a class="flex h-full" :href="p.link" target="blank">
          <Card class="w-full h-full flex flex-col gap-2">
            <div class="flex gap-2">
              <h5 class="md-caption-strong flex-grow">{{ p.title }}</h5>
              <ArrowUpRightIcon class="w-5"></ArrowUpRightIcon>
            </div>
            <p class="md-caption-neutral text-text-muted">{{ p.body }}</p>
          </Card>
        </a>
      </div>
    </div>
  </div>
</template>
  
  <script>
import emblaCarouselVue from "embla-carousel-vue";
import Card from "../components/Card.vue";
import { ArrowUpRightIcon } from "@heroicons/vue/20/solid";

export default {
  setup() {
    const [emblaNode] = emblaCarouselVue({
      align: "start",
      skipSnaps: true,
    });
    return { emblaNode };
  },
  props: ["projects"],
  components: { Card, ArrowUpRightIcon },
};
</script>
  
<style lang="scss" scoped>
.embla {
  //   overflow: hidden;
}
.embla__container {
  position: relative;
  display: flex;
}
.embla__slide {
  flex: 0 0 50%;
  min-width: 0;
}
</style>

