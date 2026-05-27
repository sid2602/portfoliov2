# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./docs/` (GitHub Pages) |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## GitHub Pages (no Actions)

This repo is a [project site](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-types): **https://sid2602.github.io/portfoliov2/**

1. **Settings → Pages** in [sid2602/portfoliov2](https://github.com/sid2602/portfoliov2): set **Source** to **Deploy from a branch**, branch **`main`**, folder **`/docs`**.
2. After changing the site, run `npm run build`, commit the updated `docs/` folder, and push to `main`.

`public/.nojekyll` is copied into `docs/` on each build so GitHub Pages does not run Jekyll (which would otherwise ignore the `_astro/` CSS and JS folder).

`site` and `base` are set in [`astro.config.mjs`](astro.config.mjs) for that URL. For a root domain later, set `base: '/'` and change `site` accordingly.

Optional: put `WEB3FORMS_ACCESS_KEY` in `.env` (not committed) before `npm run build` so the contact form works on the deployed site.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
