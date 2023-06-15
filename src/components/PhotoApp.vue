<script setup>
import { ArrowPathIcon } from "@heroicons/vue/24/solid";
import { computed, ref, watch, defineEmits, onMounted } from "vue";
import PhotoAppImage from "./PhotoAppImage.vue";

const emits = defineEmits(["currentPhoto"])

const props = defineProps({
  photos: {
    type: Array,
    default: ["./src/assets/imgs/problems/photo-app-1.png"],
  },
  shootingType: {
    type: String,
    default: "break",
  },
});

const currentPhoto = ref(0);
const photoBlend = ref(false);
const isDisabled = ref(false);

onMounted(() => { emitCurrentPhoto() })

const shootPhoto = () => {
  if (!isDisabled.value) {
    if (currentPhoto.value < [props.photos.length - 1]) {
      photoBlend.value = true;
      currentPhoto.value++;
    } else {
      if (props.shootingType === "break") {
        photoBlend.value = true;
        currentPhoto.value++;
        isDisabled.value = true;
      }
    }
  }

  emitCurrentPhoto()
};

watch(photoBlend, (newVal, oldVal) => {
  if (newVal) {
    setTimeout(() => {
      photoBlend.value = false;
    }, 100);
  }
});

const galleryPhoto = computed(() => {
  const lastPhoto = props.photos[currentPhoto.value - 1];
  const setPhoto = lastPhoto !== undefined ? lastPhoto : "";
  return setPhoto;
});

const emitCurrentPhoto = () => {
    emits("currentPhoto", {
        index: currentPhoto.value,
        src: props.photos[currentPhoto.value]
    })
}
</script>

<template>
  <div>
    <div
      class="relative photo-app before:rounded-2xl rounded-2xl bg-black w-64 aspect-[61/108] overflow-clip"
    >
      <div class="photo-app__image w-full h-full object-cover">
        <img
          :src="photo"
          :class="{
            'scale-95 duration-75 ease-out opacity-0': isDisabled,
          }"
          v-for="(photo, index) in props.photos"
          :key="index"
          v-show="currentPhoto === index"
        />
        <div
          class="photo-app__blend absolute top-0 left-0 w-full h-full z-0"
          :class="{
            'photo-app__blend--active': photoBlend,
          }"
        ></div>
      </div>
      <div
        class="photo-app__controls absolute flex flex-col items-center justify-center left-0 right-0 bottom-0 bg-black bg-opacity-75 backdrop-saturate-[666%] backdrop-blur-2xl px-3 pb-2"
      >
        <div
          class="photo-app__functions flex gap-2 py-1 duration-75 ease-out flex-nowrap uppercase md-footnote-neutral"
          :class="{
            'opacity-40 pointer-events-none': isDisabled,
          }"
        >
          <div
            class="inline-flex break-keep hyphens-none whitespace-nowrap action-active cursor-default"
          >
            Slo-Mo
          </div>
          <div
            class="inline-flex break-keep hyphens-none whitespace-nowrap action-active cursor-default"
          >
            Video
          </div>
          <div
            class="inline-flex break-keep hyphens-none whitespace-nowrap action-active cursor-default text-lime-neutral"
          >
            Foto
          </div>
          <div
            class="inline-flex break-keep hyphens-none whitespace-nowrap action-active cursor-default"
          >
            Porträt
          </div>
          <div
            class="inline-flex break-keep hyphens-none whitespace-nowrap action-active cursor-default"
          >
            Pano
          </div>
        </div>
        <div class="w-full flex items-center justify-between">
          <div class="photo-app__gallery">
            <PhotoAppImage
              class="w-8"
              :src="galleryPhoto"
              :class="{ 'saturate-0 brightness-50': isDisabled }"
            >
              <div
                class="photo-app__blend absolute top-0 left-0 w-full h-full z-0"
                :class="{
                  'photo-app__blend--active': photoBlend,
                }"
              ></div>
            </PhotoAppImage>
          </div>
          <div
            class="photo-app__button action-active relative w-10 aspect-square cursor-pointer"
            :class="{
              'pointer-events-none shadow-none bg-surface-subdued border-border-neutral':
                isDisabled,
            }"
            @click="shootPhoto"
          ></div>
          <div
            class="w-7 aspect-square flex items-center justify-center rounded-full bg-black bg-opacity-60"
          >
            <ArrowPathIcon class="w-4 text-text-neutral"></ArrowPathIcon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.photo-app {
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.33), 0px 48px 80px -16px #000;

  &::before {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: inset 0 0 0 1px var(--border-neutral);
    z-index: 90;
  }

  &__blend {
    transition: all 700ms cubic-bezier(0.25, 1, 0.5, 1);
    // opacity: 0;
    backdrop-filter: saturate(100%);
    background-color: rgba(black, 0);
    &--active {
      // opacity: 1;
      backdrop-filter: saturate(500%);
      transition: all 0ms;
      background-color: rgba(black, 1);
      //   opacity: 1;
    }
  }

  &__functions {
    mask-image: linear-gradient(
      90deg,
      rgba(217, 217, 217, 0) 0%,
      #d9d9d9 33.33%,
      #d9d9d9 66.67%,
      rgba(217, 217, 217, 0) 100%
    );
    mask-size: cover;
  }

  &__button {
    background: linear-gradient(
        360deg,
        rgba(14, 13, 12, 0) 0%,
        rgba(14, 13, 12, 0) 50%,
        rgba(14, 13, 12, 0.07) 100%
      ),
      #f0f0f0;
    border: 1px solid #ffffff;
    box-shadow: 0px 10px 7px -8px #fffad0, 2px 14px 16px -3px #f1a1ff,
      -4px 16px 32px 12px rgba(151, 71, 255, 0.6), 0px 36px 96px #9747ff;
    border-radius: 999px;
  }
}

@keyframes blend {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>