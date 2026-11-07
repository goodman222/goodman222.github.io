<script setup lang="ts">
import { profile } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="pt-6 pb-10 text-center text-sm text-muted">
    © {{ year }} {{ profile.name }} · Веб-разработка
  </footer>
</template>
