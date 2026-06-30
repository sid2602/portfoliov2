# SEO indexing checklist

The site runs at **https://kornausfilip.com/** (VPS) but is **intentionally not indexed** (`noindex`, `robots.txt: Disallow: /`).

When you decide to enable search engine indexing, follow these steps.

## 1) `robots.txt`

In [`public/robots.txt`](public/robots.txt), replace:

```txt
User-agent: *
Disallow: /
```

with:

```txt
User-agent: *
Allow: /

Sitemap: https://kornausfilip.com/sitemap-index.xml
```

## 2) Meta robots (`noindex`)

In [`src/layouts/Layout.astro`](src/layouts/Layout.astro), change the default `noindex = true` to `noindex = false` (the props default line).

## 3) Deploy and verify

On the server: `git pull` + `docker compose up -d --build`.

Check:

- **Canonical** — `<link rel="canonical" href="https://kornausfilip.com/...">`
- **Robots** — `https://kornausfilip.com/robots.txt` does not contain `Disallow: /`
- **Sitemap** — `https://kornausfilip.com/sitemap-index.xml` with entries on `kornausfilip.com`
- **OpenGraph** — `og:url` and `og:image` on the production domain

## 4) Optional

- Add the site in **Google Search Console** (`kornausfilip.com`)
- Submit the sitemap
