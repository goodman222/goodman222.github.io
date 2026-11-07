import tailwindcss from '@tailwindcss/vite'
import { profile } from './app/data/site'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  // public/fitnes — отдельный готовый сайт (демо проекта), Nuxt его не пререндерит
  nitro: {
    prerender: {
      ignore: ['/fitnes'],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: `${profile.name} — веб-разработчик`,
      meta: [
        { name: 'description', content: 'Портфолио веб-разработчика: лендинги, интернет-магазины, веб-приложения.' },
        { name: 'theme-color', content: '#f1f2f4' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap' },
      ],
    },
  },
})
