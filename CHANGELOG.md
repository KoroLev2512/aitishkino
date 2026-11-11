# Changelog

Все заметные изменения в проекте «Айтишкино» документируются в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
и проект придерживается [Семантического версионирования](https://semver.org/lang/ru/).

## [1.0.0] - 2026-11-11

### Добавлено

- **Архитектура ленивой загрузки анимаций (`LazyLottie`)**:
  - Компонент `src/components/ui/LazyLottie/LazyLottie.tsx` с отложенным `fetch()` по IntersectionObserver.
  - Постер первого кадра Hero-секции (`hero-poster.webp`, 1.8 КБ) для нулевого CLS.
  - Поддержка медиа-запроса `prefers-reduced-motion`.
- **Типизированный слой данных (`src/content/`)**:
  - `courses.ts`, `faq.ts`, `advantages.ts`, `platform.ts`, `students.ts`, `shop.ts` как единый источник правды.
- **Полноценная страница курса Python (`/courses/python`)**:
  - Семантическая верстка (`<article>`, `<header>`, `<h1>`, секции модулей, ожидаемые результаты).
  - Хлебные крошки и микроразметка Schema.org `Course` и `BreadcrumbList`.
- **Страница политики конфиденциальности (`/privacy`)**:
  - Шаблон документа в строгом соответствии с требованиями Федерального закона № 152-ФЗ РФ.
- **Инфраструктура тестирования**:
  - Unit и компонентные тесты на Vitest и React Testing Library (17 тестов в 4 файлах).
  - Сквозные smoke-тесты и автоматизированный аудит доступности WCAG AA на Playwright + Axe.
- **Инструменты контроля качества и CI/CD**:
  - Пайплайн GitHub Actions (`.github/workflows/ci.yml`) с проверкой линтинга, типов, тестов, сборки и Lighthouse CI.
  - Конфигурация регулярных обновлений Dependabot (`.github/dependabot.yml`).
  - Профиль проверок Lighthouse CI (`.lighthouserc.json`) с целевыми метриками ≥ 90-95.
  - Prettier, Husky pre-commit хуки и `lint-staged`.
- **Безопасность и эксплуатация**:
  - Заголовки безопасности в `vercel.json` (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS).
  - Брендированная страница 404 (`src/app/not-found.tsx`).
  - Долгосрочное кэширование статических ассетов (Cache-Control: immutable).
- **SEO-инфраструктура**:
  - Динамическая карта сайта `src/app/sitemap.ts` (`sitemap.xml`).
  - Файл управления индексацией `src/app/robots.ts` (`robots.txt`).
  - Микроразметка Schema.org (`Organization`, `WebSite`, `Course`, `FAQPage`, `BreadcrumbList`).
  - Высококачественное OpenGraph-изображение (1200x630, `public/images/og-image.jpg`).
- **Доступность (A11y)**:
  - Ссылка быстрого перехода к контенту (Skip to content).
  - Поддержка клавиатурной навигации и WAI-ARIA аккордеонов в FAQ (`aria-controls`, `aria-expanded`, `id`).
  - Закрытие мобильного меню по клавише Escape.
  - Выделенные `:focus-visible` стили для интерактивных элементов.
- **Архитектурная документация (ADR)**:
  - ADR 0001: Статический экспорт Next.js (`output: 'export'`).
  - ADR 0002: Типизированный слой данных как Single Source of Truth.
  - ADR 0003: Абстракция транспорта лидов и защита от спама (`submitLead`).
  - ADR 0004: Архитектура ленивой загрузки анимаций (`LazyLottie`).
  - ADR 0005: Многоуровневая стратегия тестирования (Vitest + Playwright + Axe).

### Изменено

- **Размер First Load JS главной страницы сокращен на ~99%**: с **15.1 МБ** до **172 КБ** (размер страницы `/` составляет 62.8 КБ).
- Переведена типографика на шрифт `Inter` с полной поддержкой кириллицы через `next/font/google`.
- Заменены растровые изображения учеников и логотипа на оптимизированные WebP-версии (размер логотипа уменьшен с 489 КБ до 12 КБ).
- Форма консультации переведена на React Hook Form + Zod с доступными inline-сообщениями об ошибках вместо `alert()`.
- Приведены в порядок и включены строгие правила компилятора TypeScript (`strict: true`, `noUncheckedIndexedAccess: true`).

### Исправлено

- Устранены ошибки компиляции TypeScript и предупреждения ESLint.
- Удалены подавляющие флаги `ignoreBuildErrors` и `ignoreDuringBuilds` из `next.config.ts`.
- Устранены 4x сетевые ошибки 404 при загрузке шрифтов SF Pro из-за мертвых `@font-face` правил в `globals.css`.
- Исправлена иерархия заголовков лендинга (устранены дублирующиеся `h1`, зафиксирован единственный `h1` в Hero-секции).
- Удалена мертвая директория `deploy/` (1.6 ГБ временных файлов и кэша).
- Удалены неиспользуемые и устаревшие зависимости (`pako`, `next-seo`, `file-loader`, `url-loader`).
