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
v2/                  сам сайт (Astro-проект)
  src/pages/         страницы, один файл = один адрес
  src/components/    Header, Footer, Cards, Form
  src/layouts/       общая обёртка страницы
  src/styles/        global.css с дизайн-токенами
  public/            файлы, попадающие в сборку как есть
  netlify.toml       настройки сборки
```

## Локальный запуск

```bash
cd v2
npm install
npm run dev      # http://localhost:4321
npm run build    # сборка в v2/dist
npm run preview  # посмотреть собранное
```

## Деплой

Netlify собирает сайт автоматически при пуше в `main`.
Команда сборки, папка публикации и версия Node заданы в `v2/netlify.toml`;
поле Base directory (`v2`) задано в панели Netlify.
Каждый pull request получает свой deploy preview со ссылкой в комментарии.

## Как добавить работу в портфолио

Все работы лежат в `v2/src/data/projects.ts`. Добавь в массив `projects`
ещё один объект — карточка появится сама, вёрстку править не надо.
`featured: true` выводит работу ещё и на главную; на `/projects` попадают все.

Первый тег в `tags` — это статус работы (`Концепт`, `Учебный проект`).
Он рисуется заливкой и сразу виден: если работа не клиентская, об этом
честно написано на самой карточке.
