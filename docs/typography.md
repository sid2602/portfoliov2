# Typography

Font sizes use the [Tailwind default scale](https://tailwindcss.com/docs/font-size). Prefer named utilities (`text-6xl`, `text-base`) over arbitrary values (`text-[48px]`) so line-height and spacing stay consistent.

## Required scale

Use these defaults for every new page and section unless there is a documented exception below.

| Role | HTML | Tailwind | Size (rem) | Approx. px |
|------|------|----------|------------|------------|
| Page / section title | `h1` | `text-6xl` | 3.75rem | 60px |
| Section subtitle | `h2` | `text-5xl` | 3rem | 48px |
| Body, lists, labels, buttons | `p`, `li`, `a`, `span` | `text-base` | 1rem | 16px |

### Weight and line-height (with the sizes above)

| Element | Typical utilities |
|---------|-------------------|
| `h1` | `font-extrabold leading-tight tracking-tight` |
| `h2` | `font-bold leading-tight tracking-tight` |
| Body | `font-normal leading-relaxed` |
| Button / CTA | `text-base font-bold` or `font-semibold` |
| Emphasis in body | `font-semibold` on a `span` (keep `text-base` on the parent) |

## Special cases (`text-xl`, `text-2xl`)

Some blocks need slightly larger copy than body text but should stay smaller than `h2`. Use these only when the content has a clear reason to stand out (not as a default for every paragraph).

| Tailwind | Approx. px | When to use |
|----------|------------|-------------|
| `text-xl` | 20px | Lead / intro paragraph under a headline, short callouts, featured one-liners |
| `text-2xl` | 24px | Pull quotes, highlight boxes, short sub-blurbs, emphasis blocks that are not section titles |

Rules:

- Do not use `text-xl` or `text-2xl` on `h1` / `h2` — headings keep `text-6xl` / `text-5xl`.
- Prefer `text-base` first; step up only when the design needs extra emphasis.
- Pair with the same weight rules as body (`font-normal` for paragraphs, `font-semibold` for short highlights).

```html
<!-- Hero or section intro (special case) -->
<p class="text-xl leading-relaxed text-black/55">Lead paragraph under the headline.</p>

<!-- Highlight / quote block (special case) -->
<p class="text-2xl font-semibold leading-snug text-black/80">A short emphasized statement.</p>
```

## Optional scale

Reach for these only when the required scale and special cases above are not enough. Do not skip straight to arbitrary pixel classes.

| Role | Tailwind | Approx. px | Example use |
|------|----------|------------|-------------|
| Large display number | `text-3xl` | 30px | Stat values (e.g. `23%`) |
| Subheading | `text-4xl` | 36px | `h3` in a dense section |
| Small heading | `text-3xl` | 30px | `h4`, card titles |
| UI chrome | `text-sm` | 14px | Nav links, captions, meta |
| Fine print | `text-xs` | 12px | Legal, footnotes |

## Fonts

| Usage | Font stack |
|-------|------------|
| Headlines (`h1`, `h2`) | `font-[Montserrat,system-ui,sans-serif]` |
| Everything else | `Inter, system-ui, sans-serif` (set on `body` in `Layout.astro`) |

## Examples

```html
<!-- Section -->
<h1 class="font-[Montserrat,system-ui,sans-serif] text-black">Page title</h1>
<h2 class="font-[Montserrat,system-ui,sans-serif] text-black">Section title</h2>
<p class="text-black/55">Normal paragraph copy.</p>

<!-- Hero checklist: stay on text-base -->
<li class="flex gap-3 text-base">
  <p class="font-semibold text-black/55">
    <span>Lead phrase</span>
    <span class="font-normal text-[#45464d]">supporting detail</span>
  </p>
</li>

<!-- Stat card -->
<p class="text-3xl font-bold text-black/80">23%</p>
<p class="text-base text-black/55">More Revenue</p>
```

## Base styles

Global defaults live in `src/styles/global.css` (`@layer base`):

- `h1` → `text-6xl`
- `h2` → `text-5xl`
- `p` → `text-base`

You still add color, font family, and layout classes in components. Do not re-specify font size on `h1` / `h2` / `p` unless you have a documented exception (including `text-xl` / `text-2xl` special cases).

## Checklist for new components

1. Use semantic tags (`h1`, `h2`, `p`) instead of styled `div`s.
2. Default copy to `text-base`.
3. One `h1` per page; section titles use `h2`.
4. Lead intros or highlight blocks may use `text-xl` or `text-2xl` (see special cases).
5. Nav / meta may use `text-sm` (see optional scale).
6. Stat or metric highlights may use `text-3xl` for the number and `text-base` for the label.
