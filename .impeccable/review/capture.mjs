// Снимки для проверки: главная, /projects и 404 на 1440 и 390.
import { chromium } from 'playwright';
const out = process.argv[2] ?? '.impeccable/review';
const b = await chromium.launch();
for (const [name, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1, hasTouch: name === 'mobile', isMobile: name === 'mobile' });
  for (const [route, file] of [['/', name], ['/projects', `${name}-projects`], ['/nope', `${name}-404`]]) {
    await p.goto('http://localhost:4399' + route, { waitUntil: 'networkidle' });
    await p.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: `${out}/${file}-first.png` });
    if (file === 'desktop') { await p.waitForTimeout(2400); await p.screenshot({ path: `${out}/desktop-first-opened.png` }); await p.mouse.wheel(0, -40); }
    await p.evaluate(() => document.querySelector('.js-window')?.classList.add('is-open'));
    await p.waitForTimeout(1300);
    await p.screenshot({ path: `${out}/${file}.png`, fullPage: true });
    const o = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    console.log(file, 'overflow', o);
  }
}
await b.close();
