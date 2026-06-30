# Portfolio — Filip Kornaus

Portfolio site built with **Astro 6** + Tailwind CSS 4. Production: **https://kornausfilip.com** (VPS + Traefik).

## Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server (`localhost:4321`) |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview build locally |

## Environment variables

Copy `.env.example` to `.env` (local) or `.env.production` (server):

- `WEB3FORMS_ACCESS_KEY` — contact form
- `PUBLIC_UMAMI_WEBSITE_ID` / `PUBLIC_UMAMI_SCRIPT_URL` — analytics (optional)

## Deploy

VPS hosting — details in [DEPLOY.md](DEPLOY.md).

Workflow: `git push` → on server `git pull` + `npm run build`.

## SEO

The site is intentionally not indexed. Checklist for enabling indexing: [DOMAIN_SWITCH.md](DOMAIN_SWITCH.md).
