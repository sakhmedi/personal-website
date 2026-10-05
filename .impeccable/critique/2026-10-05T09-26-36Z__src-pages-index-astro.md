---
target: главная src/pages/index.astro
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\Windows 11\\personal-website\\src\\pages\\index.astro"
target_fingerprint: "sha256:81c9c8582b4c2faebc5b715a4165100d56f0b301505f8c704496836822b7fbea"
target_path: "C:\\Users\\Windows 11\\personal-website\\src\\pages\\index.astro"
timestamp: 2026-10-05T09-26-36Z
slug: src-pages-index-astro
closed: true
---
# Critique: главная (src/pages/index.astro), витрина
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score: 26/32 (81%, Good). Heuristics 7 and 10 are n/a (persuasion landing)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Leaves are closed when the page first draws, so the works look disabled for about a second |
| 2 | Match with the real world | 4 | Plain language; the prepayment has a worked example |
| 3 | User control and freedom | 3 | target=_blank from WhatsApp's in-app browser |
| 4 | Consistency and standards | 3 | The «Вы платите» column mixes 0 ₸, 50%, a dash and «Доступы у вас» |
| 5 | Error prevention | 3 | A message must be at least 10 characters, which rejects «нужен сайт» |
| 6 | Recognition rather than recall | 4 | Each card shows its status; prices are all in one place |
| 7 | Flexibility and efficiency | n/a | single-pass persuasion page |
| 8 | Aesthetic and minimalist design | 3 | «Что входит» repeats 4 of its 5 points; the lower door on desktop is empty |
| 9 | Error recovery | 3 | Errors are specific; no summary; WhatsApp fallback when sending fails |
| 10 | Help | n/a | the process section does the job of help |

## Design specificity
Authored work, not a template: door, plates, tags on strings, phones in the window, a single sticker. The weak spot is the empty glass in the lower half of the door on desktop when there is no photo.
Detector: markup 0 findings; global.css 4 findings. side-tab 506/511 is the frame between the window leaves (FP). #000 in the mask (FP). 1rem on .plate-title is real token drift. In the browser: line-length ~117 characters in the domain/hosting note (real); all-caps/cramped on the sticker and sr-only text (FP); nested-cards/occlusion on the photo placeholder (an artefact of the missing photo).

## Priority issues
1. [P1] Little trust at the 50% prepayment: «Обо мне» is a name and two sentences, with no photo and nothing on how payment works or what happens if the deadline is missed. Fix: portrait plus one true line each on payment method/receipt/contract and on a missed deadline; a short version on the Предоплата row. /impeccable clarify
2. [P1] The yellow sticky bar «Написать в WhatsApp» stays on screen under «Отправить» while the form is being filled (Header.astro: it hides only for [data-cta]). Fix: also hide it while the form is in view or on focusin. /impeccable distill
3. [P2] The «Вы платите» column has mixed units, and «Доступы у вас» is as loud as the prices. Fix: amounts only; access goes into the step text; rename step 4 «Приёмка». /impeccable clarify
4. [P2] Closed leaves when the page first draws: on mobile, «РАБОТЫ» at the fold is greyed out, and on desktop the works are tinted for about a second. Fix: if the window is in view on load, open it straight away; play the animation only when it scrolls in from below. /impeccable animate
5. [P3] Empty lower door on desktop and a 117-character line in the price note. Fix: photo or a door sized to its content; max-width ~65ch. /impeccable layout

## Persona red flags
Jordan: never told who writes the copy and takes the photos; «круг правок» and «домен и хостинг» are not explained. Riley: the 10-character message minimum; no skip link; KZ number check is loose. Casey: the whole card is a link, so a tap while scrolling opens someone else's site. Owner from WhatsApp: no photo, so no answer to «is she a real person?»; no Kazakh.

## Minor observations
- Dotted price leader disappears when the service name wraps (mobile).
- «"От" значит, что дешевле не бывает» → «Меньше этой суммы не будет».
- GitHub in the footer means nothing to this audience.

## Questions
- Should prospects get the link before the portrait exists?
- Is the form needed as a fourth route, or is WhatsApp plus «оставьте номер» enough?
- Should the leaves play on a phone at all?
