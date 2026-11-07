<script setup lang="ts">
import { contacts } from '~/data/site'

const links = [
  { label: 'Email', hint: contacts.email, href: `mailto:${contacts.email}`, external: false },
  { label: 'ВКонтакте', hint: 'написать ↗', href: contacts.vk, external: true },
  { label: 'Авито', hint: 'отзывы клиентов ↗', href: contacts.avito, external: true },
  { label: 'GitHub', hint: 'код проектов ↗', href: contacts.github, external: true },
]
</script>

<template>
  <section id="contact" class="mt-22 mb-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
    <div class="card bg-ink !p-7 text-white sm:!p-12">
      <h2 class="text-[clamp(30px,4vw,48px)] leading-[1.1] font-bold tracking-[-0.03em]">Есть задача или вакансия?</h2>
      <p class="mt-3.5 mb-8 max-w-[420px] text-zinc-400">Опишите проект в паре предложений — отвечу в течение нескольких часов.</p>
      <a :href="contacts.telegram" target="_blank" rel="noopener" class="btn bg-white !text-ink hover:bg-accent hover:!text-white">Написать в Telegram ↗</a>
    </div>
    <div class="grid gap-4">
      <a
        v-for="l in links"
        :key="l.label"
        :href="l.href"
        :target="l.external ? '_blank' : undefined"
        :rel="l.external ? 'noopener' : undefined"
        class="card flex items-center justify-between gap-4 !px-6.5 !py-5.5 transition-colors hover:bg-accent-soft"
      >
        <b class="font-semibold">{{ l.label }}</b>
        <span class="text-sm text-muted">{{ l.hint }}</span>
      </a>
    </div>
  </section>
</template>
