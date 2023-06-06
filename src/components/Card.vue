<script setup>
    const props = defineProps({
        bg: {
            default: "bg-surface-subdued"
        }
    })
</script>

<template>
    <div class="relative p-5 border border-border-neutral rounded-2xl outline outline-1 outline-border-inv-emphasized" :class="props.bg">
        <slot></slot>
    </div>
</template>