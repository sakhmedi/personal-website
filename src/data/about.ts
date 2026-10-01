import type { ImageMetadata } from 'astro';

/**
 * Всё, что сайт говорит о Салиме лично.
 *
 * Фото: положи файл в src/assets/portrait.jpg (подойдут .jpeg, .png,
 * .webp). Лучше вертикальное, при дневном свете. Сайт найдёт его сам.
 *
 * bio: два-три предложения от первого лица, каждое отдельной строкой
 * массива. Только факты: как пришла в разработку, где училась,
 * сколько делаешь сайты.
 *
 * Пока чего-то нет, на сайте стоит заглушка, а сборка для публикации
 * падает: заглушка не должна уехать к клиентам.
 */
export const bio: string[] | null = null;

const portraits = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/portrait.{jpg,jpeg,png,webp}',
  { eager: true }
);

export const portrait: ImageMetadata | undefined =
  Object.values(portraits)[0]?.default;

const missing = [
  portrait ? null : 'фото в src/assets/portrait.jpg',
  bio ? null : 'bio в src/data/about.ts',
].filter(Boolean);

if (import.meta.env.PROD && missing.length > 0) {
  throw new Error(`Не хватает данных о себе: ${missing.join(', ')}.`);
}
