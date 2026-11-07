<script setup lang="ts">
import { services } from '~/data/site'

// Иконки — простые SVG-контуры, чтобы не тянуть библиотеку
const icons: Record<string, string> = {
  bolt: 'M11 2 4 12h6l-1 6 7-10h-6l1-6Z',
  cart: 'M3 4h2l2 9h9l2-7H6M8 17h.01M15 17h.01',
  app: 'M6 3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3ZM3 8h14M8 8v9',
  wrench: 'M14 3a4 4 0 0 0-4 5L3 15l2 2 7-7a4 4 0 0 0 5-4l-2 2-2-1-1-2 2-2Z',
}
</script>

<template>
  <section id="services">
    <SectionHead title="Услуги" subtitle="Цены — ориентир, точнее после брифа" />
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="s in services" :key="s.title" class="card">
        <div class="mb-10 grid size-11 place-items-center rounded-[14px] bg-accent-soft text-accent">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path :d="icons[s.icon]" />
          </svg>
        </div>
        <h3 class="mb-1.5 text-lg font-semibold">{{ s.title }}</h3>
        <p class="text-[14.5px] text-muted">{{ s.description }}</p>
        <div class="mt-4.5 text-[15px] font-semibold">{{ s.price }}</div>
      </div>
    </div>
  </section>
</template>
