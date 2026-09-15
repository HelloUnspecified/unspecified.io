# unspecified.io

Marketing site for [Unspecified Software Co.](https://unspecified.io), built with Astro 7, Tailwind CSS 4, and MDX. Fully static; deployed to Cloudflare as static assets (`wrangler.jsonc`, no adapter or worker).

## Commands

| Command           | Action                         |
| :---------------- | :----------------------------- |
| `npm install`     | Install dependencies           |
| `npm run dev`     | Dev server at `localhost:4321` |
| `npm run build`   | Production build to `./dist/`  |
| `npm run preview` | Preview the production build   |
| `npm run check`   | Type-check `.astro` files      |
| `npm run format`  | Prettier                       |

## Where things live

- `src/config/site.ts` — company facts (email, phone, founders, product URLs). Change once, updates everywhere including JSON-LD.
- `src/content/pages/*.mdx` — per-page `<title>` and meta description.
- `src/elements/` — the design system primitives (`Heading`, `BodyText`, `SectionLabel`, `CTAButton`, `Frame`).
- `src/components/Index|About|Contact/` — page sections.
- `src/css/tailwind.css` — brand tokens (`us-red`, `us-brass`, `us-ink`, `us-paper`, …) and fonts.
- `public/assets/img/logo/unspecified-logo.svg` — the wordmark. Favicons and `og-image.png` are derived from it.

## Contact form

The form on `/contact` posts to [web3forms](https://web3forms.com). Copy `.env.example` to `.env` and set `PUBLIC_WEB3FORMS_KEY`. Without a key the page shows the direct channels only.
