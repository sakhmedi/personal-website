---
target: home page
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\Windows 11\\personal-website\\src\\pages\\index.astro"
target_fingerprint: "sha256:d20ec5fbd90727d4ca895c049745a777071d7871b708869823dae21f8650dc93"
target_path: "C:\\Users\\Windows 11\\personal-website\\src\\pages\\index.astro"
timestamp: 2026-10-01T12-25-37Z
slug: src-pages-index-astro
---
# Critique: home page (src/pages/index.astro)
Method: dual-agent (separate design review and automated check)

## Design Health Score: 24/32 (75%, Good). Heuristics 7 and 10 n/a (persuasion landing page)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Invalid form fields show red text but no border change |
| 2 | Match with the real world | 3 | "Чтобы вам написали", "концепт/демо", "доступы" unexplained to a first-timer |
| 3 | User control and freedom | 3 | After a successful send the form disappears; no second request without reload |
| 4 | Consistency and standards | 3 | WhatsApp CTA in two colours (dark in hero and sticky bar, lavender in band), both on screen at once |
| 5 | Error prevention | 3 | Phone placeholder "+7 701 123 45 67" looks like a value already filled in |
| 6 | Recognition rather than recall | 3 | "предоплата в половину суммы" makes the visitor recall prices from a section above |
| 7 | Flexibility and efficiency | n/a | one-pass persuasion page |
| 8 | Aesthetic and minimalist design | 3 | Clean; process is 5 unmarked paragraphs; desktop gaps ~190px, right half empty |
| 9 | Recognising and recovering from errors | 3 | An empty phone field says "Проверьте номер" (blames the visitor) |
| 10 | Help and documentation | n/a | the process section acts as help |

## Design specificity
The copy is written for this product; the look could belong to any freelancer (Golos, indigo accent, grey sheet). The page says "phones", but the work cards show desktop screenshots. The avatar is a 44px illustration. "You own everything" has no visual moment of its own. Automated scan (CLI + in-browser): 0 findings.

## Priority issues
1. [P1] Work cards contradict the phone-first pitch: desktop screenshots are unreadable at 390px. Fix: mobile screenshots in a phone frame, WhatsApp button in view. /impeccable adapt
2. [P1] No person behind a 50% prepayment: illustration avatar, no bio, no paying clients. Fix: real photo plus 2–3 honest lines. /impeccable clarify, /impeccable layout
3. [P1] Prices answer "how much" but not "what's included, how long, and what it costs to run". Price text is the quietest text in the section. Fix: price at real weight, typical timeline, a line on domain and hosting in the client's name. /impeccable clarify + typeset
4. [P2] Process hides the money moments in 5 unmarked paragraphs. Fix: step markers, a bold lead per step, the payment at each step. /impeccable layout
5. [P2] Competing CTAs on mobile: the sticky bar overlaps the hero CTA, the band CTA and the form submit; GitHub is listed as a contact. Fix: hide the sticky bar while the hero CTA or #contacts is in view; move GitHub to the footer. /impeccable distill

## Persona red flags
- Jordan (first-timer): concept/demo labels unexplained; service name doesn't say "one-page site"; "доступы" undefined.
- Riley (stress tester): empty phone gives the wrong-cause message; "1111111111" passes; form gone after sending; Netlify badges in screenshots.
- Casey (distracted mobile): theme toggle takes a prime header spot; cards unreadable; two CTAs at the submit moment.
- Айгерим (café owner, WhatsApp in-app browser): "от 80 000 ₸" with no timeline or running costs; no face; no Kazakh, not even "скоро"; card links send her away for good.

## Minor
Price mixes mono digits with system "от" and "₸" at 15px. The hero has no "see the work ↓" path. "Отвечаю в течение дня" could sit by the hero CTA. The footer could carry the secondary contacts. On desktop the first card barely reaches the first screen.

## Questions
- What if the hero were the proof: a phone showing DALA COFFEE with its WhatsApp button?
- Why is the person the least visible thing on a "work with me personally" page?
- Why is "you own everything" the last sentence of step 5?
