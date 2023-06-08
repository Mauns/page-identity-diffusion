<script setup>
</script>

<template>
  <div class="w-full border-t border-border-neutral" data-lenis>
    <div class="grid grid-cols-12">
        <div class="col-span-6 bg-surface-muted min-h-screen max-h-fit">
            <div class="sticky top-0 bottom-0 w-full h-screen flex items-center justify-center">gogo</div>
        </div>
        <div class="col-span-6 bg-surface-neutral min-h-screen border-l border-border-neutral flex items-center justify-center">
            <div class="grid grid-cols-12">
                <slot name="text"></slot>
            </div>
        </div>
    </div>
  </div>
</template>