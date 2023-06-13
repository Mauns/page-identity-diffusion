<script setup>
    import { PlayIcon, PauseIcon } from "@heroicons/vue/24/solid"

    const props = defineProps({
        isPlaying: false        
    })
</script>

<template>
    <div class="cursor-pointer group">
        <div class="bg-lime-neutral group-hover:brightness-90 border border-lime-emphasized w-20 aspec-t aspect-square rounded-full action-active flex align-center justify-center">
            <PlayIcon class="w-10 text-text-inv-neutral" v-if="!isPlaying"></PlayIcon>
            <PauseIcon class="w-10 text-text-inv-neutral" v-if="isPlaying"></PauseIcon>
        </div>
    </div>
</template>