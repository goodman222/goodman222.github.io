<script setup lang="ts">
import { projects } from '~/data/site'
</script>

<template>
  <section id="work">
    <SectionHead title="Проекты" subtitle="Избранные работы" />
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
    </div>
  </section>
</template>
