// Рисует картинку для карточки ссылки (public/og.png, 1200x630) в стиле
// сайта: тёмное стекло, надпись плёнкой и жёлтая наклейка. В ленте
// мессенджера она видна размером с ноготь, поэтому на ней только
// главное: что я делаю и кто я.
//
// Запуск: npm run og

import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.join(import.meta.dirname, '..');
const font = async (pkg, file) =>
  (await readFile(path.join(root, 'node_modules', '@fontsource', pkg, 'files', file))).toString('base64');

// Кириллица и латиница лежат в разных файлах: "WhatsApp" без латинского
// набора нарисовал бы системный шрифт.
const sign = await font('fira-sans-extra-condensed', 'fira-sans-extra-condensed-cyrillic-800-normal.woff2');
const signLatin = await font('fira-sans-extra-condensed', 'fira-sans-extra-condensed-latin-800-normal.woff2');
const text = await font('fira-sans', 'fira-sans-cyrillic-500-normal.woff2');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: Sign; src: url(data:font/woff2;base64,${sign}) format('woff2'); unicode-range: U+0400-04FF; }
  @font-face { font-family: Sign; src: url(data:font/woff2;base64,${signLatin}) format('woff2'); unicode-range: U+0000-00FF; }
  @font-face { font-family: Text; src: url(data:font/woff2;base64,${text}) format('woff2'); }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; background: #09191c; padding: 28px; }
  .door { position: relative; height: 100%; background: #0e2a2f; border: 10px solid #5d7f84;
          border-radius: 6px; padding: 48px 72px 44px; display: flex; flex-direction: column; justify-content: space-between; }
  h1 { font: 800 104px/1.02 Sign; color: #fff; text-transform: uppercase; letter-spacing: 0.01em; }
  .row { display: flex; align-items: center; justify-content: space-between; }
  .who { font: 500 34px Text; color: #a9c4c6; }
  .sticker { font: 800 38px/1 Sign; text-transform: uppercase; letter-spacing: 0.02em; color: #1c1800;
             background: #ffd31a; border: 5px solid #fff; border-radius: 16px; padding: 22px 34px; }
  .handle { position: absolute; right: 26px; top: 170px; width: 14px; height: 200px; border-radius: 7px; background: #5d7f84; }
</style></head><body><div class="door">
  <div class="handle"></div>
  <h1>Делаю сайты<br>для бизнеса<br>в Астане</h1>
  <div class="row"><p class="who">Салима · Астана</p><p class="sticker">Написать в WhatsApp</p></div>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(root, 'public', 'og.png') });
await browser.close();
console.log('готово  public/og.png');
