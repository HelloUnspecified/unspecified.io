# CLAUDE.md

## Project

Astro 5.x marketing site for Unspecified Software Co. (unspecified.io). Static output, deployed to Cloudflare. Tailwind CSS 4, MDX for page metadata. The site exists so people who look up the company understand it is a real, independent software company whose mission is connecting people. Every road leads to Troth (jointroth.co); consulting (re/Human) is past work, not a pitch. The site also fields speaking inquiries for Clark.

## Commands

- `npm run dev` — dev server on localhost:4321
- `npm run build` — production build to ./dist/
- `npm run check` — `astro check` for type errors
- `npm run format` — prettier

## Key Patterns

- Astro components (.astro) only. No React or other UI framework is installed; the only client JS is the theme toggle, header scroll state, scroll reveal, and the contact form submit.
- Page metadata (title/description) lives in `src/content/pages/*.mdx` frontmatter, loaded via the Astro 5 Content Layer API (`getEntry("pages", "home")`)
- Company facts (name, email, location, founders, product URLs, every social handle) live in `src/config/site.ts`. Never hard-code these in components; import `SITE`. Clients/testimonials live in `src/config/clients.ts`; adding a `quote` to a person renders it as a testimonial automatically.
- Contact form posts to web3forms.com, gated on `PUBLIC_WEB3FORMS_KEY` (see `.env.example`)
- Legal pages (/privacy, /terms, /copyright) render from `src/content/legal/*.mdx` via `src/pages/[slug].astro`. The text is the company's 2018 policy, ported verbatim; only the contact email was updated.
- "Married N years" is computed at build time from `SITE.story.marriedIn` (`YEARS_MARRIED`). Rebuild after the anniversary.
- `public/_redirects` maps the 2020 site's URLs (/blog/_, /clark, /carrie, /legal/_) to the new pages; `public/_headers` sets security and cache headers on Cloudflare.
- Scroll reveal: add `data-reveal` to an element (and optionally `style="--reveal-delay:120ms"`). The observer in `Layout.astro` adds `.is-in`. No animation library.
- Pages compose sections from `src/components/<Page>/`; `src/components/functional/` holds Logo, Mark, SEO, Socials, TrothCard.
- Home order: Hero (with TrothCard) → Troth → Why → Clients → Founders → Speaking → Contact.
- SEO.astro always emits Organization + Clark (Person) + Troth (SoftwareApplication) + WebSite JSON-LD; a page's `jsonLd` graph is merged in, so pages only add their own WebPage entity.

## Style

- Use Tailwind classes for styling
- Sentence case for headings. No terminal/"SYS.MODULE" styling, no gradient blobs, no icon-card grids.
- Tone of copy: plain, specific, first person plural. Say true things about the company; don't invent history.

## Design System

### Brand Color Tokens (defined in `src/css/tailwind.css`)

All brand colors use the `us-` prefix. **Never use raw hex values** — always use these tokens. Red and brass are taken directly from the logo.

| Token                                     | Hex       | Usage                                       |
| ----------------------------------------- | --------- | ------------------------------------------- |
| `us-red`                                  | `#ce3240` | Primary accent, the one CTA per page, links |
| `us-red-deep`                             | `#a8202e` | Hover state for red                         |
| `us-brass`                                | `#c3996b` | Hairlines, eyebrow numerals, frame borders  |
| `us-ink`                                  | `#141416` | Dark background / light-mode text           |
| `us-coal`                                 | `#1d1d20` | Raised dark surface                         |
| `us-paper`                                | `#f4f1ea` | Light background / dark-mode text           |
| `us-cream`                                | `#ebe6db` | Raised light surface                        |
| `troth-rust`, `troth-wine`, `troth-linen` |           | Only when representing the Troth product    |

Body is `bg-us-paper text-us-ink dark:bg-us-ink dark:text-us-paper`. Theme follows the OS preference unless the user toggles it (stored as `us-theme`). Sections that change background must also set `--surface` so the `Frame` caption can cut its border.

### Fonts

| Token          | Font           | Usage                              |
| -------------- | -------------- | ---------------------------------- |
| `font-body`    | Inter          | Body copy                          |
| `font-heading` | Inter Tight    | Headings, semibold, tight tracking |
| `font-mono`    | JetBrains Mono | Eyebrows, captions, small labels   |
| `font-troth`   | Newsreader     | Only inside the Troth product card |

### Reusable Elements (`src/elements/`)

Always use these instead of raw markup for these patterns. All accept `class` and pass through extra attributes (so `data-reveal` works).

**`SectionLabel`** — mono eyebrow, optional brass numeral

```astro
<SectionLabel text="Why we exist" number="01" />
<SectionLabel text="About" />
```

**`Heading`** — `as` ("h1"|"h2"|"h3", default h2), `size` ("xl" hero | "lg" section | "md" subsection | "sm" card)

**`BodyText`** — `size` ("md" default | "lg" for leads)

**`CTAButton`** — `href`, `variant` ("solid" red | "contrast" ink/paper flip | "outline" brass hairline | "link" text + arrow). External hrefs open in a new tab automatically. One `solid` per page.

**`Socials`** (`components/functional`) — pill row for one group from `SITE.socials` (`links`, `compact`).

**`Frame`** — the open-bracket frame from the logo: brass hairline box with a caption sitting in a gap in the bottom edge (`caption`, optional `captionHref`). Use once or twice per page, not everywhere.

### Layout

- `container-default` = max 1240px, `px-6 md:px-10`
- Editorial two-column rhythm: label in `lg:col-span-4` (sticky), content in `lg:col-span-8`
- `hairline` utility = brass top rule for section breaks
