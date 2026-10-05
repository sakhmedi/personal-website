// Рисует картинку для карточки ссылки (public/og.png, 1200x630) в стиле
// сайта: кобальтовое поле, заголовок широким гротеском, кромка из плиток
// и жёлтая плитка "написать". В ленте мессенджера она видна размером
// с ноготь, поэтому на ней только главное: что я делаю и кто я.
//
// Запуск: npm run og

import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.join(import.meta.dirname, '..');
const font = async (pkg, file) =>
  (await readFile(path.join(root, 'node_modules', '@fontsource-variable', pkg, 'files', file))).toString('base64');

// Кириллица и латиница лежат в разных файлах: "WhatsApp" без латинского
// набора нарисовал бы системный шрифт.
const display = await font('unbounded', 'unbounded-cyrillic-wght-normal.woff2');
const displayLatin = await font('unbounded', 'unbounded-latin-wght-normal.woff2');
const text = await font('onest', 'onest-cyrillic-wght-normal.woff2');

// Кромка панно: тот же порядок цветов, что на сайте, без жёлтого.
const tones = ['#eef0f2', '#0f2459', '#c4532d', 'transparent', '#0f2459', '#eef0f2', 'transparent', '#c4532d'];
const tiles = Array.from({ length: 12 }, (_, i) => `<span style="background:${tones[(i * 5 + 1) % tones.length]}"></span>`).join('');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: Display; src: url(data:font/woff2;base64,${display}) format('woff2'); unicode-range: U+0400-04FF; font-weight: 200 900; }
  @font-face { font-family: Display; src: url(data:font/woff2;base64,${displayLatin}) format('woff2'); unicode-range: U+0000-00FF; font-weight: 200 900; }
  @font-face { font-family: Text; src: url(data:font/woff2;base64,${text}) format('woff2'); font-weight: 100 900; }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; background: #1b3a8a; padding: 64px 72px 60px; display: flex; gap: 48px; }
  main { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
  h1 { font: 700 86px/1.04 Display; color: #fff; letter-spacing: -0.01em; }
  .row { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .who { font: 500 32px Text; color: #c3cdea; }
  .smalt { font: 700 32px/1 Display; color: #1c1800; background: #ffd31a; border-radius: 3px; padding: 26px 34px; }
  .edge { width: 132px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; align-content: start; }
  .edge span { aspect-ratio: 1; border-radius: 3px; }
</style></head><body>
  <main>
    <h1>Делаю сайты<br>для бизнеса<br>в Астане</h1>
    <div class="row"><p class="who">Салима · Астана</p><p class="smalt">Написать в WhatsApp</p></div>
  </main>
  <div class="edge">${tiles}</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(root, 'public', 'og.png') });
await browser.close();
console.log('готово  public/og.png');
