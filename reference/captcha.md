# Captcha (hCaptcha) — how to re-enable

Currently **captcha is disabled** in this project (both UI and client-side checks were removed) to simplify the contact form flow.

## What was removed

- `src/components/Contact.astro`
  - Removed the hCaptcha widget container (`<div class="h-captcha" data-captcha="true">…</div>`)
  - Removed the captcha-specific error message block (`data-contact-captcha-error`)
- `src/scripts/contact-form.ts`
  - Removed the check for `textarea[name="h-captcha-response"]`
  - Removed the reset call to `window.hcaptcha?.reset()`
- `src/env.d.ts`
  - Removed the global `window.hcaptcha` typing

## How to implement it back

### 1) Add the widget back to the form markup

In `src/components/Contact.astro`, add the captcha container back near the submit button:

```astro
<div data-contact-captcha>
  <div class="h-captcha" data-captcha="true"></div>
</div>
```

Also re-add the captcha error message block:

```astro
<p
  class="hidden text-base text-red-600"
  role="alert"
  aria-live="assertive"
  data-contact-captcha-error
>
  Potwierdź captcha przed wysłaniem wiadomości.
</p>
```

### 2) Re-enable client-side guarding in the submit handler

In `src/scripts/contact-form.ts`:

- Query the captcha error element again (`[data-contact-captcha-error]`)
- Before sending, verify that `textarea[name="h-captcha-response"]` has a non-empty value
- After success, optionally reset the widget using `window.hcaptcha?.reset()`

The signal to check is the hidden textarea named `h-captcha-response` that hCaptcha populates.

### 3) Re-add TypeScript typing for `window.hcaptcha`

In `src/env.d.ts`:

```ts
interface HCaptchaApi {
  reset: (widgetId?: string) => void;
}

interface Window {
  hcaptcha?: HCaptchaApi;
}
```

### 4) Ensure the provider script is present

This project already loads Web3Forms' client script in `Contact.astro`:

- `https://web3forms.com/client/script.js`

That script is what renders the captcha when it sees `data-captcha="true"`. If you switch providers (Turnstile/Recaptcha/etc.), you’ll need to load the provider script instead and adjust the form fields accordingly.

### 5) Update the built output (if you publish `docs/`)

If you deploy the prebuilt site from `docs/`, run the build after re-enabling captcha so `docs/` reflects the updated markup/scripts.

