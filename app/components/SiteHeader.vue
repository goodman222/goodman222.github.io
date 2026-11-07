<script setup lang="ts">
import { profile } from '~/data/site'

const links = [
  { href: '#work', label: 'Работы' },
  { href: '#services', label: 'Услуги' },
  { href: '#contact', label: 'Контакты' },
]
</script>

<template>
  <header class="sticky top-4 z-10 mx-auto mt-4 max-w-[1200px] px-4 sm:px-6">
    <div class="flex items-center justify-between rounded-full bg-white/80 py-2 pr-2 pl-5.5 shadow-sm backdrop-blur-md">
      <a href="#" class="font-bold">{{ profile.name }}</a>
      <nav class="hidden gap-1 md:flex">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="rounded-full px-4 py-2 text-[14.5px] text-muted transition-colors hover:bg-bg hover:text-ink"
        >{{ l.label }}</a>
      </nav>
      <a href="#contact" class="btn">Обсудить проект</a>
    </div>
  </header>
</template>
