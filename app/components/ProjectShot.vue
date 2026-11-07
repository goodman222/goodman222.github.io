<script setup lang="ts">
import type { Tint } from '~/data/site'

// Цветная рамка с «окном» внутри: окно браузера (desktop) или телефона (phone).
// В окне — скриншот проекта, а если его нет или файл не загрузился — псевдо-контент.
const props = defineProps<{
  tint: Tint
  image?: string
  alt?: string
  device?: 'desktop' | 'phone'
}>()

// Классы — статичные строки, чтобы Tailwind их нашёл
const tints: Record<Tint, { bg: string; bar: string }> = {
  indigo: { bg: 'from-indigo-100 to-indigo-200', bar: 'bg-indigo-600' },
  green: { bg: 'from-green-100 to-green-200', bar: 'bg-green-600' },
  orange: { bg: 'from-orange-100 to-orange-200', bar: 'bg-orange-600' },
  fuchsia: { bg: 'from-fuchsia-100 to-fuchsia-200', bar: 'bg-fuchsia-600' },
  sky: { bg: 'from-sky-100 to-sky-200', bar: 'bg-sky-600' },
}
const t = computed(() => tints[props.tint])

// Файл не найден → заглушка. onMounted ловит ошибку, случившуюся до гидрации.
const imgEl = ref<HTMLImageElement | null>(null)
const failed = ref(false)
onMounted(() => {
  const img = imgEl.value
  if (img && img.complete && img.naturalWidth === 0) failed.value = true
})
const showImage = computed(() => !!props.image && !failed.value)
</script>

<template>
  <!-- container-type: size — чтобы размеры скриншота считались от рамки (единицы cqw/cqh считаются от области внутри отступов) -->
  <div class="flex h-full w-full items-end justify-center bg-gradient-to-br px-[7%] pt-[6%] [container-type:size]" :class="t.bg">
    <!-- Телефон: крупный, «выглядывает» из рамки — виден верх экрана, низ уходит за край -->
    <div
      v-if="showImage && device === 'phone'"
      class="h-[100cqh] w-[64cqw] max-w-[260px] overflow-hidden rounded-t-[22px] border-[5px] border-b-0 border-zinc-900 bg-zinc-900 shadow-[0_16px_40px_-14px_rgba(0,0,0,.3)]"
    >
      <img
        ref="imgEl"
        :src="image"
        :alt="alt"
        loading="lazy"
        class="h-full w-full rounded-t-[17px] object-cover object-top"
        @error="failed = true"
      >
    </div>

    <!-- Браузер: скриншот виден целиком, окно подстраивается под его пропорции -->
    <div
      v-else-if="showImage"
      class="overflow-hidden rounded-t-xl bg-white shadow-[0_16px_40px_-14px_rgba(0,0,0,.25)]"
    >
      <div class="flex h-6 items-center gap-1.5 px-3">
        <span v-for="i in 3" :key="i" class="size-[7px] rounded-full bg-zinc-200" />
      </div>
      <img
        ref="imgEl"
        :src="image"
        :alt="alt"
        loading="lazy"
        class="block h-auto max-h-[calc(100cqh-24px)] w-auto max-w-[100cqw]"
        @error="failed = true"
      >
    </div>

    <!-- Заглушка с псевдо-контентом -->
    <div
      v-else
      class="h-[100cqh] w-full rounded-t-xl bg-white px-4 py-3.5 shadow-[0_16px_40px_-14px_rgba(0,0,0,.2)]"
    >
      <div class="mb-4 flex gap-1.5">
        <span v-for="i in 3" :key="i" class="size-[7px] rounded-full bg-zinc-200" />
      </div>
      <div class="h-3 w-1/2 rounded-md" :class="t.bar" />
      <div class="mt-2.5 h-[7px] w-[78%] rounded bg-zinc-100" />
      <div class="mt-2 h-[7px] w-[60%] rounded bg-zinc-100" />
      <div class="mt-4 grid grid-cols-3 gap-2">
        <i v-for="i in 3" :key="i" class="aspect-square rounded-lg bg-zinc-50" />
      </div>
    </div>
  </div>
</template>
