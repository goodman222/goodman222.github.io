<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<template>
  <div class="mt-22 mb-6 flex flex-wrap items-end justify-between gap-4">
    <h2 class="text-[clamp(30px,3.6vw,44px)] font-bold tracking-[-0.03em]">{{ title }}</h2>
    <p v-if="subtitle" class="text-muted">{{ subtitle }}</p>
  </div>
</template>
