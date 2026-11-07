<script setup lang="ts">
import type { Project } from '~/data/site'

const props = defineProps<{ project: Project }>()

const linkAttrs = computed(() =>
  props.project.url ? { href: props.project.url, target: '_blank', rel: 'noopener' } : {},
)
</script>

<template>
  <component
    :is="project.url ? 'a' : 'div'"
    v-bind="linkAttrs"
    class="card group flex flex-col !p-3"
    :class="[
      project.featured && 'md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[1.5fr_1fr]',
      project.url && 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(20,20,60,.18)]',
    ]"
  >
    <div
      class="aspect-[16/10] overflow-hidden rounded-2xl"
      :class="project.featured && 'lg:aspect-auto lg:h-full lg:min-h-[360px]'"
    >
      <ProjectShot :tint="project.tint" :image="project.image" :alt="project.title" :device="project.device" />
    </div>

    <div class="flex flex-1 flex-col px-3.5 pt-4.5 pb-3" :class="project.featured && 'lg:justify-center lg:px-8'">
      <span v-if="project.meta" class="label mb-2">{{ project.meta }}</span>
      <h3 class="flex justify-between gap-3 text-xl font-semibold tracking-tight" :class="project.featured && 'lg:text-2xl'">
        {{ project.title }}
        <span
          v-if="project.url"
          class="grid size-[34px] flex-none place-items-center rounded-full bg-bg text-[15px] transition-colors group-hover:bg-accent group-hover:text-white"
        >↗</span>
      </h3>
      <p class="mt-1.5 mb-4 text-[15px] text-muted" :class="!project.featured && 'flex-1'">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </component>
</template>
