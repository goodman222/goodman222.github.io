<script setup lang="ts">
import { contacts, profile } from '~/data/site'
</script>

<template>
  <section class="mt-10 grid auto-rows-[minmax(150px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <!-- Знакомство -->
    <div class="card flex flex-col justify-between gap-8 !p-7 sm:col-span-2 sm:!p-10 lg:col-span-3 lg:row-span-2">
      <div class="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <h1 class="max-w-[720px] text-[clamp(34px,4.6vw,58px)] leading-[1.05] font-bold tracking-[-0.035em]">
          {{ profile.title }} <span class="text-accent">{{ profile.titleAccent }}</span> {{ profile.titleEnd }}
        </h1>
        <img
          v-if="profile.photo"
          :src="profile.photo"
          :alt="profile.name"
          class="h-auto max-h-24 w-auto max-w-[60%] flex-none self-start rounded-3xl sm:max-h-36 sm:max-w-[40%] lg:max-h-44"
        >
        <div
          v-else
          class="grid size-24 flex-none place-items-center rounded-3xl bg-gradient-to-br from-indigo-400 to-pink-400 text-[32px] font-bold text-white sm:size-36 sm:text-[44px] lg:size-44 lg:text-[52px]"
        >
          {{ profile.initials }}
        </div>
      </div>
      <div>
        <p class="max-w-[520px] text-[17px] text-muted">{{ profile.about }}</p>
        <div class="mt-8 flex flex-wrap gap-2.5">
          <a href="#work" class="btn">Смотреть работы</a>
          <a :href="contacts.telegram" target="_blank" rel="noopener" class="btn btn-light">Telegram ↗</a>
        </div>
      </div>
    </div>

    <!-- Статус -->
    <div class="card flex flex-col justify-between gap-8 bg-accent-soft sm:col-span-2 lg:col-span-1 lg:row-span-2">
      <div>
        <span class="inline-flex items-center gap-2 text-[15px] font-semibold">
          <span
            class="size-[9px] rounded-full ring-5"
            :class="profile.available ? 'bg-ok ring-ok/15' : 'bg-orange-500 ring-orange-500/15'"
          />
          {{ profile.available ? 'Свободен' : 'Занят' }}
        </span>
        <p class="mt-2.5 text-sm text-muted">{{ profile.availableText }}</p>
      </div>
      <div>
        <span class="label">В разработке</span>
        <b class="mt-2 block text-[40px] leading-none font-bold tracking-[-0.04em]">{{ profile.experience }}</b>
      </div>
    </div>

    <!-- Стек -->
    <div class="card flex flex-wrap items-center gap-5 !px-7 !py-5 sm:col-span-2 lg:col-span-4">
      <span class="label">Стек</span>
      <div class="flex flex-wrap gap-2">
        <span v-for="s in profile.stack" :key="s" class="tag">{{ s }}</span>
      </div>
    </div>
  </section>
</template>
