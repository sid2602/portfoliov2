# Domain switch checklist (GitHub Pages -> kornausfilip.com)

This project is currently configured for **testing on GitHub Pages** (`site: https://sid2602.github.io`, `base: /portfoliov2/`) and uses **noindex**.

When you switch to the real domain **`https://kornausfilip.com/`**, do the following.

## 1) Update Astro config
Edit `astro.config.mjs`:

- Set:
  - `site: 'https://kornausfilip.com'`
  - `base: '/'`
- If you are no longer deploying via GitHub Pages, consider changing:
  - `outDir: './docs'` -> default (`dist`) or your hosting’s preferred output folder.

## 2) Allow indexing (remove staging blocks)
### `robots.txt`
Replace the current blocking rules in `public/robots.txt`:

```txt
User-agent: *
Disallow: /
```

with an allow + sitemap version:

```txt
User-agent: *
Allow: /

Sitemap: https://kornausfilip.com/sitemap-index.xml
```

### Meta robots (`noindex`)
In `src/layouts/Layout.astro` the default `noindex` is currently `true`.

For production indexing, flip the default to `false` (or pass `noindex={false}` from pages):
- Find the props default for `noindex` and change it to `false`.

## 3) Verify after deployment (quick checks)
After deploying to `kornausfilip.com`, check:

- **Canonical**
  - View page source and confirm:
    - `<link rel="canonical" href="https://kornausfilip.com/...">`
- **Robots**
  - `https://kornausfilip.com/robots.txt` is reachable and **does not** contain `Disallow: /`
- **Sitemap**
  - `https://kornausfilip.com/sitemap-index.xml` is reachable
  - Entries point to `kornausfilip.com` (not GitHub Pages)
- **OpenGraph/Twitter**
  - `og:url` uses `kornausfilip.com`
  - `og:image` resolves correctly on the new domain

## 4) Optional but recommended
- Add/update your site in **Google Search Console** for `kornausfilip.com`
- If the GitHub Pages test version is still public, keep it `noindex` so it doesn’t compete with production.

