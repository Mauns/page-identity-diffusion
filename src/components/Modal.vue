<script setup>
import { useStore } from "@nanostores/vue";
import { $showModal } from "../utils/store";
import { toggleModal } from "../utils/modalUtils";
import Card from "../components/Card.vue";

const showModal = useStore($showModal);
</script>

<template>
  <transition name="modal">
    <div
      class="z-50 fixed top-0 right-0 bottom-0 h-full left-0"
      v-show="showModal"
      @click.self="toggleModal"
    >
      <div
        class="z-10 container mx-auto h-full w-full flex flex-col gap-10 items-center justify-around py-24"
      >
        <div class="flex gap-2 items-center cursor-pointer p-4" @click="toggleModal">
            <span class="md-caption-strong text-text-muted">Escape oder</span>
        </div>
        <div class="w-full grid grid-cols-12">
          <card class="p-0 lg:col-span-6 lg:col-start-4">
            <slot></slot>
          </card>
        </div>
        <div class="flex gap-2 items-center">Ciao</div>
      </div>
      <div class="-z-10 absolute top-0 right-0 bottom-0 w-full h-full bg-border-inv-emphasized backdrop-blur-md"></div>
    </div>
  </transition>
</template>