// Весь контент сайта в одном месте. Чтобы добавить проект — допишите объект в `projects`.
// Скриншоты кладите в /public/projects/ и указывайте путь в поле `image`, например '/projects/crm.png'.
// Если файла нет (или `image` не задан), вместо скриншота показывается цветная заглушка (`tint`).
// `url` можно не указывать — тогда карточка не кликабельна.

export type Tint = 'indigo' | 'green' | 'orange' | 'fuchsia' | 'sky'

export interface Project {
  title: string
  description: string
  tags: string[]
  url?: string
  image?: string
  tint: Tint
  meta?: string // подпись над заголовком, например «Frontend»
  featured?: boolean // широкая карточка
  device?: 'desktop' | 'phone' // рамка для скриншота: окно браузера (по умолчанию) или телефон
}

export interface Service {
  title: string
  description: string
  price: string
  icon: 'bolt' | 'cart' | 'app' | 'wrench'
}

export const profile = {
  name: 'Марк Храбрый',
  initials: 'МХ',
  // Фото: положите файл в public/avatar.jpg и впишите сюда '/avatar.jpg'. Пока пусто — показываются инициалы.
  photo: '/avatar.jpg',
  title: 'Привет! Я делаю',
  titleAccent: 'быстрые и удобные',
  titleEnd: 'сайты для бизнеса',
  about: 'Веб-разработчик, 3+ года в разработке. Делаю сайты и веб-приложения под ключ: вёрстка, фронтенд на Vue и Nuxt, бэкенд на Node.js и запуск.',
  available: true,
  availableText: 'Беру новые проекты и рассматриваю вакансии',
  experience: '3+ года',
  stack: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'Git', 'Node.js', 'Express'],
}

export const contacts = {
  telegram: 'https://t.me/NSIB_MARK_KHRABRYI',
  email: 'mark.hrabryi90@gmail.com',
  avito: 'https://www.avito.ru/novosibirsk/predlozheniya_uslug/razrabotka_saytov_verstka_i_dorabotka_pod_klyuch_2612890500',
  github: 'https://github.com/goodman222',
  vk: 'https://vk.ru/mkhrabry',
}

export const projects: Project[] = [
  {
    title: 'Система онлайн-анкетирования для HR',
    description: 'Веб-приложение для сбора анкет с проверкой введённых данных. Сервер формирует PDF-документ и отправляет его HR-специалисту через Telegram-бота, с резервной отправкой на электронную почту.',
    tags: ['Vue 3', 'Node.js', 'Telegram Bot API', 'PDF'],
    image: '/projects/questionnaire.png',
    url: 'https://xn----8sbatwcu2aaq.xn--p1ai/',
    tint: 'indigo',
    meta: 'Коммерческий проект',
    featured: true,
  },
  {
    title: 'Бот для сбора карточек товаров Ozon',
    description: 'Бот, разработанный с помощью AI-инструментов: собирает карточки товаров Ozon по заданным критериям и автоматизирует поиск подходящих предложений.',
    tags: ['Ozon', 'AI-инструменты'],
    image: '/projects/ozon-bot.png',
    device: 'phone',
    tint: 'sky',
    meta: 'AI / Автоматизация',
  },
  {
    title: 'Интерактивная карта объявлений',
    description: 'Карта с объявлениями, группировкой маркеров и синхронизацией со списком объектов. Карточки и метки подсвечивают друг друга при наведении.',
    tags: ['JavaScript', 'Yandex Maps API 3.0', 'PHP'],
    url: 'https://xn--80adalrj8bbcp5h.xn--80asehdb/map?',
    image: '/projects/real-estate-map.png',
    tint: 'green',
    meta: 'Frontend',
  },
  {
    title: 'Административная панель фитнес-клуба',
    description: 'Учебное веб-приложение для управления материалами фитнес-клуба: загрузка и работа с файлами и фотографиями через интерфейс и серверную часть.',
    tags: ['Vue 3', 'Node.js', 'JavaScript'],
    url: '/fitnes/',
    image: '/projects/fitness-admin.png',
    tint: 'orange',
    meta: 'Fullstack',
  },
]

export const services: Service[] = [
  { title: 'Лендинг', description: 'Продающая страница под рекламу.', price: 'от 15 000 ₽', icon: 'bolt' },
  { title: 'Интернет-магазин', description: 'Каталог, корзина, оплата, доставка.', price: 'от 40 000 ₽', icon: 'cart' },
  { title: 'Веб-приложение', description: 'CRM, личные кабинеты, сервисы.', price: 'по задаче', icon: 'app' },
  { title: 'Поддержка', description: 'Доработки, ускорение, исправления.', price: 'от 1 500 ₽/ч', icon: 'wrench' },
]
