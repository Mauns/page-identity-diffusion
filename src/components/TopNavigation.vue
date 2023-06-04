<script setup>
import TopNavigationItem from "./TopNavigationItem.vue";
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50">
    <div class="h-[52px] bg-surface-muted border-b border-border-neutral">
      <div
        class="container mx-auto w-full h-full flex justify-between items-center"
      >
        <div class="text-text-neutral md-body-heading-b">
          Digitale Identitätsdiffusion
        </div>
        <div class="gap-6">
          <div class="gap-2 flex items-center">
            <div
              class="w-7 h-7 rounded-full border border-border-neutral bg-surface-subdued overflow-hidden"
            >
              <img
                class="object-cover"
                src="https://s3-alpha-sig.figma.com/img/8611/c1ce/f2dbaef49dfc2123b8db0acb316b5503?Expires=1686528000&Signature=kfSg-aMRX2FQxWsF2a-dJ4XAQ5~MBxfqRtQfp8aS9oqjmXWETX7raB7UwlWp-QDSvv91A37gLH4wMpJEarVfk7i42dCKJiioV7ZJaTQ1ITaxPA1VQ9HLPxu-eOi6bJFSnuQGFxjq2iWHZiw4rMINionc3TvGmPen6uRvvnyv23tuxxL25NNUrrB1-QBIoOQmhlO42204QVnYsdT8wJIMdhYgnAy~gSuNVk-Dmz4XdTWTjcULmpqbl89TmfK9yw8T8tfROW0M-dZnmJj-mofT9FeAO-ZkmTXTcHo27U8feOP~xkvxAhQrpvjo3eLifTOMokWqzPi4rMmOWJk5C4XisQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div class="md-caption-neutral text-text-neutral">Marvin Bruns</div>
          </div>
          <div class="w-[50px]"></div>
        </div>
      </div>
    </div>
    <div class="h-10 bg-surface-neutral border-b border-border-neutral">
      <div class="container mx-auto">
        <div class="-mx-4 flex items-center">
            <TopNavigationItem>Start</TopNavigationItem>
            <TopNavigationItem href="#intro">Intro</TopNavigationItem>
            <TopNavigationItem>Identität zurückgewinnen</TopNavigationItem>
            <TopNavigationItem>Digitale Identitäten für alle?</TopNavigationItem>
            <TopNavigationItem>Schwierigkeiten</TopNavigationItem>
        </div>
      </div>
    </div>
  </nav>
</template>