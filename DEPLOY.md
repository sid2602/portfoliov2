# Deploy on VPS (kornausfilip.com)

Static Astro site hosted on a self-managed VPS behind Traefik. No CI/CD — manual deploy via `git pull` on the server.

## Server requirements

- Node.js >= 22.12
- Docker + Docker Compose
- Traefik (network `cvcreator_cvcreator-network`, cert resolver `letsencrypt`)
- DNS `A` record for `kornausfilip.com` → VPS IP

## Initial setup

```bash
git clone https://github.com/sid2602/portfoliov2.git /opt/portfolio
cd /opt/portfolio

cp .env.example .env.production
# Fill in: WEB3FORMS_ACCESS_KEY, PUBLIC_UMAMI_WEBSITE_ID
# PUBLIC_UMAMI_SCRIPT_URL=https://analytics.kornausfilip.com/script.js

npm ci
npm run build
docker compose up -d
```

`.env.production` is not committed — Astro loads it during `npm run build`.

## Updating the site

After `git push` to GitHub, on the server:

```bash
cd /opt/portfolio
git pull
npm ci          # only when dependencies changed
npm run build
```

A Docker restart is **not required** — the Caddy container mounts `dist/` and serves new files immediately after the build.

If you still see the old version in the browser, hard-refresh (Ctrl+Shift+R).

## Disable GitHub Pages

In [sid2602/portfoliov2](https://github.com/sid2602/portfoliov2): **Settings → Pages → Source: None**.

## Related services

| Service | Notes |
|---------|-------|
| **Umami** | Website URL in dashboard: `https://kornausfilip.com` |
| **Web3Forms** | `WEB3FORMS_ACCESS_KEY` in `.env.production` on the server |

## Verification

- `https://kornausfilip.com/` — page and assets load correctly
- Contact form — send test submission
- Umami dashboard — pageview from the new domain

The site is intentionally **not indexed** (`noindex`, `robots.txt: Disallow: /`). To enable SEO, see [DOMAIN_SWITCH.md](DOMAIN_SWITCH.md).
