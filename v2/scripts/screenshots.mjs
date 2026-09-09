// Снимает первый экран каждой работы из src/data/projects.ts.
//
// Playwright запускает настоящий браузер Chromium без окна ("headless"):
// он открывает страницу, выполняет её JavaScript, грузит шрифты и картинки —
// и только потом отдаёт снимок. Поэтому на скриншот попадает то же, что
// увидит человек, а не голый HTML.
//
// Запуск: npm run screens

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

// Node 24 умеет импортировать .ts напрямую, поэтому список работ берём
// из того же файла, что и сайт. Второго списка адресов не существует.
import { projects } from '../src/data/projects.ts';

const VIEWPORT = { width: 1440, height: 900 };
const DEVICE_SCALE_FACTOR = 2;
const TIMEOUT = 45_000;

const outDir = path.join(import.meta.dirname, '..', 'src', 'assets', 'screens');
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: VIEWPORT,
  // 2 означает, что снимок выйдет 2880x1800: с запасом для экранов
  // с высокой плотностью пикселей. Размер под вёрстку подберёт Astro.
  deviceScaleFactor: DEVICE_SCALE_FACTOR,
  locale: 'ru-RU',
});

const failed = [];

for (const project of projects) {
  const page = await context.newPage();
  const file = path.join(outDir, `${project.id}.png`);

  // У некоторых работ первый экран почти пустой, и снимать лучше
  // внутреннюю страницу. Ссылка с карточки при этом ведёт на url.
  const target = project.screenshotUrl ?? project.url;

  try {
    // networkidle — ждём, пока страница перестанет что-либо догружать.
    const response = await page.goto(target, { waitUntil: 'networkidle', timeout: TIMEOUT });

    // Страница 404 тоже отрисуется и снимется как ни в чём не бывало,
    // поэтому проверяем код ответа явно.
    if (response && !response.ok()) {
      throw new Error(`сервер ответил ${response.status()}`);
    }
    // Шрифты приезжают отдельно от разметки; без этой строки текст
    // на снимке может оказаться системным.
    await page.evaluate(() => document.fonts.ready);
    // Запас на анимации появления.
    await page.waitForTimeout(1000);

    // Без fullPage: нужен именно первый экран, а не страница целиком.
    await page.screenshot({ path: file });
    console.log(`готово   ${project.id}  ←  ${target}`);
  } catch (error) {
    failed.push({ id: project.id, url: target, message: error.message });
    console.error(`ошибка   ${project.id}  ←  ${project.url}\n         ${error.message}`);
  } finally {
    await page.close();
  }
}

await context.close();
await browser.close();

if (failed.length > 0) {
  console.error(`\nНе удалось снять: ${failed.map((item) => item.id).join(', ')}`);
  console.error('Эти скриншоты придётся сделать вручную.');
  process.exitCode = 1;
} else {
  console.log(`\nВсе снимки лежат в src/assets/screens/`);
}
