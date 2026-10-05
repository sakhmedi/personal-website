# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners of small businesses in Astana (a coffee shop, a dental clinic, a salon) who have never ordered a website. They speak Russian, and some speak Kazakh. They usually open the site on a phone, often from a link someone sent them in WhatsApp or Telegram. They want to know, quickly and without jargon, what they would get, what it costs, how the work goes, and how to get in touch.

## Product Purpose

saliima.dev (live at https://saliima.netlify.app/) is Salima's storefront as a freelance web developer. Its job is to win paying clients: a business owner should leave convinced enough to send a message in WhatsApp, or to fill in the request form. A message from a real prospect is success. The site started as a course assignment (`docs/assignment.md`), but the assignment no longer comes first.

## Positioning

- **Honest and plain.** Prices are printed where they can be seen. Each concept, demo, or study project says what it is right on its card. Salima will look at a site someone already has and tell them honestly whether to fix it or rebuild it. There are no "от" prices made up for work whose cost depends on scope.
- **The client owns everything.** At launch Salima hands over every login and account. The site belongs to the client, and moving to another developer later never means asking her for anything.

## Operating Context

- Visitors arrive mostly on phones, from links shared in messengers. The link preview (`public/og.png`) is part of the first impression.
- WhatsApp is the main way to get in touch. Telegram, email, GitHub, and the Formspree request form are the alternatives.
- How the work goes, as the site states it: a free first conversation, then a 50% prepayment. The client reviews the site on their own phone before launch, and two rounds of edits are included. The other 50% is paid on approval, then the site launches and every login is handed over.

## Capabilities and Constraints

- Stack: Astro 5 static site, Tailwind CSS 4 (tokens live in `@theme` in `src/styles/global.css`), strict TypeScript. Netlify deploys automatically from `main`. The build fails on purpose if `PUBLIC_FORMSPREE_ID` is missing.
- Pages: `/` (works, services, process, contacts), `/projects` (all works), `/404`. The old `/about` and `/contacts` pages redirect to sections of the home page.
- The home page is a sequence of six full screens in a fixed order (hero, works, prices, process, about, contacts), one section per screen with vertical scroll-snap. Content that does not fit a phone screen scrolls sideways inside its screen rather than stretching it. Texts, the form and the section order stay as they are when the look changes (decided 2026-10-05).
- Services and prices: a one-page site from 80 000 ₸, usually 2–3 days; a multi-page site from 150 000 ₸, usually about 7 days; improving an existing site, with price and timeline set after reviewing the site and agreeing on the list of changes.
- Domain and hosting: the client pays for them separately. They are registered in the client's name, and the client gets every login and password. Their cost is never quoted in advance because it depends on the domain and hosting chosen. For improvement work, Salima works with the client's existing domain and hosting and never promises to register or transfer them.
- Status terms: концепт = made on her own initiative, not commissioned, to show what a site for such a business could be (DALA COFFEE, Дентал Плюс); демо = shows how the product works on prepared examples (Shart AI); учебный проект = built while learning (Bloom).
- Portfolio entries are data in `src/data/projects.ts`. Screenshots are taken by `npm run screens` (Playwright, local only). All contact details live in `src/data/contacts.ts`.
- Language: the site is Russian only today. A Kazakh version is needed. **Undecided:** when it ships, and whether it covers every page.

## Brand Commitments

- Name: Салима, Astana. The voice is first person, warm, direct, and free of jargon. It describes what the client gets ("ваш клиент … пишет вам в WhatsApp"), not technology.
- Every work is labeled with its status (концепт, демо, учебный проект) on its own card, in plain words.

## Evidence on Hand

- Works: DALA COFFEE (coffee shop, concept), Дентал Плюс (dental clinic, concept), Shart AI (document assistant, demo with prepared answers), Bloom (flower guide, study project). Screenshots are in `src/assets/screens/`.
- Portrait: not provided yet. When it exists it goes to `src/assets/portrait.jpg` (or .jpeg/.png/.webp) and the site picks it up; the published build shows no placeholder. Link preview image: `public/og.png`, rendered by `npm run og`.
- None of the works are for paying clients, and there are no testimonials, client logos, or numbers. Future work must never invent them or present a concept as client work.

## Product Principles

1. Every claim must be true. Never imply clients, results, or scale that don't exist.
2. Get to a WhatsApp message with as little effort as possible, on a phone.
3. Talk to a business owner who has never ordered a site. Write about outcomes, prices, and steps, never about technology.
4. The work is the evidence. Show the real sites, honestly labeled, over anything said about them.
5. The client stays in control. Their site, their logins, and a clear price before any money changes hands.

## Accessibility & Inclusion

Phone-first with touch targets of at least 44px (already applied in the code). Both Russian- and Kazakh-speaking visitors need to be served as the Kazakh version arrives.
