import type { ImageMetadata } from 'astro';

/**
 * Всё, что сайт говорит о Салиме лично.
 *
 * bio — только подтверждённые факты, каждое предложение отдельной
 * строкой массива. Ничего не дописывать от себя.
 *
 * Фото: положи файл в src/assets/portrait.jpg (подойдут .jpeg, .png,
 * .webp). Лучше вертикальное, при дневном свете. Сайт найдёт его сам.
 * Пока фото нет, в режиме разработки на его месте стоит заглушка,
 * а в сборке для публикации места под фото просто нет: сборка не
 * падает, и заглушка к клиентам не попадёт.
 */
export const bio: string[] = [
  "Я делаю сайты для бизнеса, сама нахожусь в Астане.",
  "Мне важно, чтобы дизайн был понятным, цены — честными, а все доступы оставались у клиента.",
];

const portraits = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/portrait.{jpg,jpeg,png,webp}',
  { eager: true }
);

export const portrait: ImageMetadata | undefined =
  Object.values(portraits)[0]?.default;

/** Показывать ли заглушку вместо фото: только при разработке. */
export const showPortraitPlaceholder = !portrait && import.meta.env.DEV;
