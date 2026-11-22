# OctaSpace — Website

Лендинг [OctaSpace](https://octa.space) — децентрализованной GPU-облачной платформы для AI, рендеринга и cloud-вычислений. Построен на базе шаблона **Launch UI**.

## Стек технологий

- **Next.js** `^15.4.3` (App Router, статический экспорт `output: 'export'`)
- **React** `19.1.1` / **React DOM** `19.1.1`
- **TypeScript** `^5`
- **Tailwind CSS** `^4.0.12` (конфигурация через CSS `@theme`, без `tailwind.config.ts`)
- **Radix UI**: dialog (мобильное меню), tabs, slot
- **shadcn/ui** (стиль `new-york`, база `zinc`)
- **lucide-react** — иконки
- **next-sitemap** — генерация `sitemap.xml` и `robots.txt`

## Требования

- **Node.js** 20+
- **npm**

## Установка

```bash
git clone <repo-url>
cd website
npm install
```

## Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно на [http://localhost:3000](http://localhost:3000). Дев-сервер запускается с `--turbopack`.

## Сборка проекта

```bash
npm run build
```

Собирает статический экспорт сайта в директорию `./out` и автоматически генерирует `sitemap.xml`/`robots.txt` (`postbuild` → `next-sitemap`).

## Локальный просмотр собранной версии

Проект собирается как статический экспорт (`output: 'export'` в `next.config.mjs`), поэтому `npm run start` (`next start`) **не работает** — он рассчитан на серверный билд Next.js, а тут его нет. Чтобы посмотреть именно то, что задеплоится на GitHub Pages, нужно поднять папку `./out` как обычную статику:

```bash
npm run build
npx serve out
```

или

```bash
cd out && python3 -m http.server 8000
```

Это точнее отражает продакшен, чем `npm run dev` — например, покажет проблемы с относительными путями или серверными фичами, которые в статическом экспорте недоступны.

## Линтинг

```bash
npm run lint
```

## Данные сети

Цифры и цены берутся из публичного API платформы (`https://api.octa.space`, сервис oas):
`GET /network` (GPU, ноды, страны, TFLOPS, пользователи, отрендеренные кадры) и
`GET /stats/gpu/current` (цены за GPU-час по моделям, в micro-USD). Запрос идёт при сборке и
ещё раз в браузере при открытии страницы, при ошибке показываются заглушки
(`lib/octa-network.ts`).

## Структура проекта

```text
app/                    # Страницы (App Router): главная, privacy и т.д.
components/
  sections/             # Секции лендинга по категориям (hero, feature, pricing, navbar, footer, ...)
  ui/                    # Переиспользуемые примитивы (Section, Mockup, Navbar, PricingColumn и др.)
  illustrations/         # Декоративные SVG-иллюстрации
  logos/                 # Логотипы (бренды, соцсети)
config/site.ts          # Метаданные сайта, URL API, ссылки на console.octa.space и соцсети
lib/                    # Утилиты, включая получение live-данных сети OctaSpace
styles/                 # Глобальные стили и тема (CSS custom properties, OKLCH-палитры)
public/                 # Статические ассеты (изображения, видео, favicon)
```

## Деплой

Сайт собирается как статический экспорт и публикуется на GitHub Pages через workflow `.github/workflows/gh-pages.yml` при пуше тега вида `v*`.
