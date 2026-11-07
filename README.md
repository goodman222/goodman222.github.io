# Портфолио

Nuxt 4 + Vue 3 + Tailwind CSS 4. Дизайн — бенто-сетка.

## Запуск

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # статическая сборка в .output/public
```

## Где что менять

| Что | Где |
|---|---|
| Тексты, проекты, услуги, контакты | `app/data/site.ts` |
| Цвета, шрифт, скругления | `app/assets/css/main.css` (блок `@theme`) |
| Скриншоты проектов | `public/projects/` + поле `image` у проекта |
| Секции страницы | `app/components/*` , порядок — `app/pages/index.vue` |

### Добавить проект

В `app/data/site.ts` допишите объект в массив `projects`:

```ts
{
  title: 'Название',
  description: 'Одно-два предложения о задаче и результате.',
  tags: ['Vue', 'Tailwind'],
  url: 'https://site.ru',
  image: '/projects/name.webp', // скриншот 1600×1000, можно не указывать
  tint: 'sky',                  // цвет заглушки, если нет скриншота
  featured: true,               // широкая карточка (лучше одна)
}
```

## Деплой

`npm run generate` → папку `.output/public` можно залить на Netlify, Vercel, GitHub Pages или любой хостинг.
