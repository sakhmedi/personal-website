# saliima.dev — сайт-портфолио

Личный сайт-витрина: разработка сайтов для бизнеса в Астане.
Живёт на https://saliima.netlify.app/

## Стек

- [Astro 5](https://astro.build/) — статический генератор, отдаёт готовый HTML без лишнего JavaScript
- [Tailwind CSS 4](https://tailwindcss.com/) — подключён через `@tailwindcss/vite`, настройка живёт в `@theme` внутри `src/styles/global.css`
- TypeScript в строгом режиме
- Форма обратной связи — [Formspree](https://formspree.io/)

## Структура

```
docs/assignment.md   условия учебного задания, по которому сайт начинался
src/pages/           страницы, один файл = один адрес
src/components/      Header, Footer, Cards, Form
src/layouts/         общая обёртка страницы
src/data/            контакты и список работ
src/styles/          global.css с дизайн-токенами
src/assets/screens/  скриншоты работ, снятые scripts/screenshots.mjs
public/              файлы, попадающие в сборку как есть
netlify.toml         настройки сборки
```

## Локальный запуск

```bash
npm install
cp .env.example .env   # и подставить свой идентификатор Formspree
npm run dev      # http://localhost:4321
npm run build    # сборка в dist/
npm run preview  # посмотреть собранное
npm run screens  # переснять скриншоты работ
```

## Деплой

Netlify собирает сайт автоматически при пуше в `main`.
Команда сборки, папка публикации и версия Node заданы в `netlify.toml`.
Проект лежит в корне репозитория, поэтому поле Base directory
в панели Netlify должно быть пустым.
Переменная `PUBLIC_FORMSPREE_ID` задаётся там же, в Environment variables:
без неё сборка падает намеренно, чтобы форма не уехала в production мёртвой.
Каждый pull request получает свой deploy preview со ссылкой в комментарии.

## Как добавить работу в портфолио

Все работы лежат в `src/data/projects.ts`. Добавь в массив `projects`
ещё один объект — карточка появится сама, вёрстку править не надо.
`featured: true` выводит работу ещё и на главную; на `/projects` попадают все.

Статус работы (`концепт`, `учебный проект`) пишется прямо в `subtitle`
обычными словами: «Сайт кофейни, концепт». Если работа не клиентская,
человек читает об этом на карточке, а не догадывается сам.

Скриншот снимается командой `npm run screens` по адресу из `url`.
Три необязательных поля меняют кадр:

- `screenshotUrl` — снять другую страницу, а не ту, куда ведёт карточка;
- `screenshotScroll` — прокрутить страницу на столько пикселей перед снимком;
- `screenshotStorage` — что положить в `localStorage` сайта до загрузки
  (например `{ lang: "ru" }`, если язык хранится в браузере, а не в адресе).
