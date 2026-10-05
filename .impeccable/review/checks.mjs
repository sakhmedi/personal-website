// Механические проверки на 390 и 1440: цели касания, размер текста,
// заголовки, alt, состояние липкой наклейки.
import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h] of [[390, 844], [1440, 900]]) {
  const p = await b.newPage({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 });
  await p.goto('http://localhost:4399/', { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => {
    const vis = (e) => { const s = getComputedStyle(e); const r = e.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0; };
    const small = [...document.querySelectorAll('a,button,input,textarea')].filter(vis).filter(e => { const r = e.getBoundingClientRect(); return (r.height < 44 && e.tagName !== 'INPUT') || r.width < 44; }).map(e => e.tagName + ':' + (e.textContent || e.name || '').trim().slice(0, 30) + ' ' + Math.round(e.getBoundingClientRect().width) + 'x' + Math.round(e.getBoundingClientRect().height));
    const tiny = [...document.querySelectorAll('p,span,a,li,label')].filter(vis).filter(e => e.childNodes.length && [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())).filter(e => parseFloat(getComputedStyle(e).fontSize) < 14).map(e => e.textContent.trim().slice(0, 30));
    const heads = [...document.querySelectorAll('h1,h2,h3')].map(h => h.tagName + ' ' + h.textContent.trim().slice(0, 28));
    const noAlt = [...document.images].filter(i => !i.hasAttribute('alt')).length;
    const sticky = document.getElementById('stickyCta');
    return { small, tiny: [...new Set(tiny)], h1: heads.filter(x => x.startsWith('H1')).length, heads: heads.length, noAlt, stickyHiddenAtTop: sticky?.classList.contains('is-hidden') ?? null, overflow: document.documentElement.scrollWidth - innerWidth };
  });
  console.log(w, JSON.stringify(r));
}
await b.close();
