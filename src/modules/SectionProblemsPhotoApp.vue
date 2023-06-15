<script setup>
import PhotoApp from "../components/PhotoApp.vue";
import PhotoAppImage from "../components/PhotoAppImage.vue";
import PhotoAppGallery from "../components/PhotoAppGallery.vue";

const handleCurrentPhoto = (v) => {
  console.log("current photo received: ", v);
};
</script>

<template>
  <div>
    <PhotoAppImage class="w-14"></PhotoAppImage>
    <PhotoAppGallery
      :photos="[
        './src/assets/imgs/problems/gallery/photo-app-random-01.png',
        './src/assets/imgs/problems/gallery/photo-app-random-02.png',
        './src/assets/imgs/problems/gallery/photo-app-random-03.png',
        './src/assets/imgs/problems/gallery/photo-app-random-04.png',
        './src/assets/imgs/problems/gallery/photo-app-random-05.png',
        './src/assets/imgs/problems/gallery/photo-app-random-06.png',
        './src/assets/imgs/problems/gallery/photo-app-random-07.png',
        './src/assets/imgs/problems/gallery/photo-app-random-08.png',
        './src/assets/imgs/problems/gallery/photo-app-random-09.png',
        './src/assets/imgs/problems/gallery/photo-app-random-10.png',
        './src/assets/imgs/problems/gallery/photo-app-random-11.png',
        './src/assets/imgs/problems/gallery/photo-app-random-12.png',
        './src/assets/imgs/problems/gallery/photo-app-random-13.png',
        './src/assets/imgs/problems/gallery/photo-app-random-14.png',
        './src/assets/imgs/problems/gallery/photo-app-random-15.png',
        './src/assets/imgs/problems/gallery/photo-app-random-16.png',
        './src/assets/imgs/problems/gallery/photo-app-random-17.png',
        './src/assets/imgs/problems/gallery/photo-app-random-18.png',
        './src/assets/imgs/problems/gallery/photo-app-random-19.png',
        './src/assets/imgs/problems/gallery/photo-app-random-20.png',
        './src/assets/imgs/problems/gallery/photo-app-random-21.png',
        './src/assets/imgs/problems/gallery/photo-app-random-22.png',
        './src/assets/imgs/problems/gallery/photo-app-random-23.png',
      ]"
    >
      <PhotoApp
        v-on:currentPhoto="handleCurrentPhoto"
        class="-rotate-[5.1deg]"
        :photos="[
          './src/assets/imgs/problems/photo-app-1.png',
          './src/assets/imgs/problems/photo-app-2.png',
          './src/assets/imgs/problems/photo-app-3.png',
          './src/assets/imgs/problems/photo-app-4.png',
        ]"
      ></PhotoApp>
    </PhotoAppGallery>
  </div>
</template>