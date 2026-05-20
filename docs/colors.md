# Colors

Default palette lives in `src/styles/global.css` (`@theme`). Use Tailwind utilities instead of hardcoded hex values.

| Token | Hex | Utilities |
|-------|-----|-----------|
| `primary` | `#0051d5` | `text-primary`, `bg-primary`, `border-primary`, … |
| `icon` | `#dfeafc` | `text-icon`, `stroke-icon` (SVG via `stroke="currentColor"` + `text-icon`), … |
| `background` | `#ffffff` | `bg-background` (also applied on `body` in base styles) |
| `background-secondary` | `#f5f9ff` | `bg-background-secondary` |

## Examples

```html
<!-- Section on tinted background -->
<section class="bg-background-secondary">…</section>

<!-- Primary accent -->
<span class="text-primary">Business Grow</span>

<!-- Icon stroke (SVG) -->
<svg class="text-icon" stroke="currentColor">…</svg>

<!-- Card on white -->
<article class="bg-background shadow-sm">…</article>
```

## Changing the palette

Edit the `--color-*` values in `@theme` in `global.css`. All components using the utilities above update together.
