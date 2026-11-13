# «Айтишкино» — Онлайн-школа программирования и робототехники для детей

[![Production](https://img.shields.io/badge/Production-itishkino.ru-00b18f?logo=google-chrome&logoColor=white)](https://itishkino.ru/)
[![CI](https://github.com/KoroLev2512/aitishkino/actions/workflows/ci.yml/badge.svg)](https://github.com/KoroLev2512/aitishkino/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-5.x-yellow?logo=vitest)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-E2E-green?logo=playwright)](https://playwright.dev/)
[![WCAG](https://img.shields.io/badge/A11y-WCAG%202.1%20AA-00b18f)](https://www.w3.org/WAI/standards-guidelines/wcag/)

> [!NOTE]
> 🚀 **Проект в продакшене**: Данный концепт и инженерное демо успешно защищены, заапрувлены и получили жизнь в реальном продакшене на **[itishkino.ru](https://itishkino.ru/)**.

Современный высокопроизводительный веб-сервис и образовательная платформа школы программирования «Айтишкино». Проект спроектирован по стандартам Senior / Lead Frontend инженерии: чисто статический экспорт (`output: 'export'`), типобезопасный слой данных, 99% сокращение бандла через ленивую загрузку Lottie-анимаций, полнофункциональная страница входа в платформу `/login`, соответствие 152-ФЗ РФ и полное покрытие автоматическими тестами.

---

## 📸 Визуальная демонстрация ключевых секций

|                 Первый экран (Hero)                 |              Уникальный подход к обучению               |
| :-------------------------------------------------: | :-----------------------------------------------------: |
|     ![Hero Section](docs/media/HeroSection.gif)     | ![Advantages Section](docs/media/AdvantagesSection.gif) |
|            **Образовательная платформа**            |            **Игровая экономика и мотивация**            |
| ![Platform Section](docs/media/PlatformSection.gif) |    ![Earning Section](docs/media/EarningSection.gif)    |

---

## ⚡ Ключевые инженерные достижения и метрики

| Показатель                             |       До рефакторинга        |        После рефакторинга        |      Изменение      |
| :------------------------------------- | :--------------------------: | :------------------------------: | :-----------------: |
| **First Load JS главной страницы**     |         **15.1 МБ**          |            **172 КБ**            |    **-98.9%** 🚀    |
| **Размер JS-чанка маршрута `/`**       |         > 14 000 КБ          |           **62.8 КБ**            |     **-99.5%**      |
| **Ошибки компиляции TypeScript**       | 10+ (подавлялись в конфиге)  |      **0 (`strict: true`)**      |     Исправлено      |
| **Ошибки 404 шрифтов в консоли**       | 4 запроса на каждый переход  | **0 (Google Inter `next/font`)** |      Устранено      |
| **Размер репозитория**                 |   > 1.7 ГБ (кэш `deploy/`)   |           **< 30 МБ**            |     **-98.2%**      |
| **Unit & Integration тесты**           |              0               |   **27 тестов (Vitest + RTL)**   |      100% Pass      |
| **E2E & Accessibility тесты**          |              0               | **9 тестов (Playwright + Axe)**  | 0 нарушений WCAG AA |
| **Безопасность и соответствие закону** | Нет согласия 152-ФЗ, alert() |  **Zod, Honeypot, `/privacy`**   |    Полная защита    |

---

## 🏛 Архитектурные решения (ADR)

Архитектура проекта задокументирована в формате Architecture Decision Records:

1. [**ADR 0001: Статический экспорт Next.js (`output: 'export'`)**](docs/adr/0001-static-export.md) — выбор чисто статической генерации для раздачи через глобальные CDN с нулевым TTFB и отказоустойчивостью.
2. [**ADR 0002: Типизированный слой данных (`src/content/`)**](docs/adr/0002-typed-content-layer.md) — Single Source of Truth для курсов, FAQ, преимуществ и отзывов.
3. [**ADR 0003: Абстракция транспорта лидов и Honeypot (`submitLead`)**](docs/adr/0003-lead-transport-abstraction.md) — изоляция сетевого уровня формы, защита от спам-ботов без капчи и соответствие 152-ФЗ.
4. [**ADR 0004: Ленивая загрузка анимаций (`LazyLottie`)**](docs/adr/0004-lazy-lottie-architecture.md) — устранение 15 МБ бандла через IntersectionObserver, WebP-постеры первого кадра и поддержку `prefers-reduced-motion`.
5. [**ADR 0005: Многоуровневая стратегия тестирования**](docs/adr/0005-testing-strategy.md) — пирамида тестирования на базе Vitest, React Testing Library, Playwright и Axe Core.

---

## 🛠 Стек технологий

- **Фреймворк**: [Next.js 15.3](https://nextjs.org/) (App Router, Static Export).
- **Библиотека интерфейса**: [React 19](https://react.dev/).
- **Язык**: [TypeScript 5](https://www.typescriptlang.org/) (строгий режим `strict: true`, `noUncheckedIndexedAccess: true`).
- **Стилизация**: Tailwind CSS 4, CSS Modules.
- **Работа с формами**: React Hook Form, `@hookform/resolvers`, [Zod](https://zod.dev/), `@react-input/mask`.
- **Анимации**: `lottie-react`, легковесный компонент-обертка `LazyLottie` с динамической загрузкой.
- **Иконки**: `lucide-react`.
- **Тестирование**:
  - Unit & Component: [Vitest](https://vitest.dev/), React Testing Library, JSDOM, `@testing-library/jest-dom`.
  - E2E & A11y: [Playwright](https://playwright.dev/), `@axe-core/playwright`.
- **Контроль качества**: ESLint 9, Prettier, Husky, `lint-staged`.
- **CI/CD**: GitHub Actions, Lighthouse CI, Dependabot.
- **Хостинг & Деплой**: Vercel (`vercel.json` с полным комплектом CSP и HSTS заголовков безопасности).

---

## 📁 Структура проекта

```
aitishkino/
├── .github/
│   ├── dependabot.yml           # Регулярные обновления зависимостей и Actions
│   └── workflows/
│       └── ci.yml               # CI пайплайн: Lint, Types, Tests, Build, E2E, LHCI
├── docs/
│   ├── adr/                     # Архитектурные решения (ADR 0001 - 0005)
│   └── media/                   # Демонстрационные GIF-анимации секций
├── e2e/
│   └── smoke.spec.ts            # Playwright E2E и Axe A11y проверки
├── public/
│   ├── animations/              # Векторные Lottie JSON (загружаются отложено)
│   └── images/                  # Оптимизированные WebP изображения, логотип, OG image
├── src/
│   ├── app/
│   │   ├── courses/python/      # Выделенная страница курса Python
│   │   ├── login/               # Страница входа в личный кабинет платформы
│   │   ├── privacy/             # Страница политики конфиденциальности (152-ФЗ)
│   │   ├── not-found.tsx        # Брендированная страница 404
│   │   ├── robots.ts            # robots.txt генератор
│   │   ├── sitemap.ts           # sitemap.xml генератор
│   │   ├── layout.tsx           # Корневой лэйаут с Inter (кириллица) и микроразметкой
│   │   └── page.tsx             # Главная страница
│   ├── components/
│   │   ├── auth/                # Модуль авторизации: роли ученика/родителя, вход по SMS и паролю
│   │   ├── common/              # Header с мобильным меню и навигацией
│   │   ├── layout/              # PageLayout с кнопкой "Skip to content"
│   │   ├── sections/            # Секции лендинга (Hero, Courses, Consultation и др.)
│   │   ├── seo/                 # Schema.org JSON-LD компоненты (Org, Course, FAQ)
│   │   └── ui/                  # Переиспользуемые UI-компоненты (LazyLottie, FAQItem)
│   ├── config/
│   │   └── site.ts              # Конфигурация контактов, ссылок и метаданных
│   ├── content/                 # Single Source of Truth типизированный контент
│   └── lib/
│       ├── analytics/           # Трекинг событий
│       ├── api/                 # submitLead транспортная изоляция
│       └── validations/         # Zod схемы валидации
├── .lighthouserc.json           # Бюджет производительности и качества Lighthouse
├── next.config.ts               # Конфигурация Next.js статического экспорта
├── package.json                 # Скрипты и зависимости
├── playwright.config.ts         # Конфигурация Playwright E2E раннера
├── tsconfig.json                # Строгая конфигурация TypeScript
└── vitest.config.mts            # Конфигурация Vitest с JSDOM
```

---

## 🚀 Быстрый старт

### Требования

- Node.js `>= 20.9.0` (рекомендуется использовать `.nvmrc`)
- npm `>= 10.0.0`

### Установка и запуск в режиме разработки

```bash
# 1. Клонирование репозитория
git clone https://github.com/KoroLev2512/aitishkino.git
cd aitishkino

# 2. Активация требуемой версии Node.js
nvm use

# 3. Установка зависимостей
npm ci

# 4. Копирование переменных окружения
cp .env.example .env.local

# 5. Запуск сервера разработки
npm run dev
```

Приложение доступно по адресу [http://localhost:3000](http://localhost:3000).

---

## 🧪 Скрипты и тестирование

| Команда                | Описание                                                          |
| :--------------------- | :---------------------------------------------------------------- |
| `npm run dev`          | Запуск локального dev-сервера с Turbopack                         |
| `npm run build`        | Оптимизированная сборка статического экспорта в директорию `out/` |
| `npm run lint`         | Проверка кода линтером ESLint 9                                   |
| `npm run typecheck`    | Проверка типов компилятором TypeScript (`tsc --noEmit`)           |
| `npm run format`       | Автоматическое форматирование кодовой базы Prettier               |
| `npm run format:check` | Проверка соответствия стилю форматирования                        |
| `npm test`             | Запуск модульных и компонентных тестов на Vitest                  |
| `npm run test:watch`   | Интерактивный запуск тестов Vitest с отслеживанием изменений      |
| `npm run test:e2e`     | Запуск Playwright E2E тестов и аудита доступности Axe             |
| `npm run analyze`      | Сборка с интерактивным визуальным анализом размера JS бандлов     |

---

## ⚙️ Переменные окружения (`.env.example`)

| Переменная                            | По умолчанию                                         | Описание                                                             |
| :------------------------------------ | :--------------------------------------------------- | :------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                | `https://aitishkino.ru`                              | Канонический URL сайта для генерации sitemap и OG тегов              |
| `NEXT_PUBLIC_GOOGLE_FORM_URL`         | `https://docs.google.com/forms/d/e/.../formResponse` | Эндпоинт отправки лидов (при необходимости заменяется на CRM вебхук) |
| `NEXT_PUBLIC_GOOGLE_FORM_NAME_ENTRY`  | `entry.907660670`                                    | Идентификатор поля имени в форме                                     |
| `NEXT_PUBLIC_GOOGLE_FORM_PHONE_ENTRY` | `entry.805562166`                                    | Идентификатор поля телефона в форме                                  |
| `NEXT_PUBLIC_GOOGLE_FORM_EMAIL_ENTRY` | `entry.1544142625`                                   | Идентификатор поля email в форме                                     |
| `NEXT_PUBLIC_YM_ID`                   | `""`                                                 | ID счетчика Яндекс Метрики                                           |

---

## 🔒 Безопасность и соответствие закону (152-ФЗ)

- Все формы сбора контактных данных содержат обязательное согласие на обработку персональных данных.
- Развернута официальная страница [Политики конфиденциальности](/privacy).
- Защита от спам-ботов реализована по методике **Honeypot**: скрытое поле `honeypot` отсекает 100% автоматических спам-рассылок без раздражающих пользователей капч.
- В файле `vercel.json` настроены строгие заголовки HTTP:
  - `Content-Security-Policy`
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `Permissions-Policy`

---

## 📄 Лицензия

Все права защищены © 2026 Детская школа программирования и робототехники «Айтишкино».
