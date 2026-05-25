const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

type Web3FormsResponse = {
	success: boolean;
	message?: string;
};

function getHCaptchaResponse(form: HTMLFormElement): string {
	const captchaField = form.querySelector('textarea[name="h-captcha-response"]');

	if (!(captchaField instanceof HTMLTextAreaElement)) {
		return "";
	}

	return captchaField.value.trim();
}

function resetHCaptcha() {
	window.hcaptcha?.reset();
}

export function initContactForm(root: HTMLElement) {
	const form = root.querySelector("[data-contact-form]");
	const success = root.querySelector("[data-contact-success]");
	const error = root.querySelector("[data-contact-error]");
	const captchaError = root.querySelector("[data-contact-captcha-error]");
	const submitButton = root.querySelector("[data-contact-submit]");

	if (!(form instanceof HTMLFormElement) || !(success instanceof HTMLElement)) {
		return;
	}

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		if (!(error instanceof HTMLElement) || !(captchaError instanceof HTMLElement)) {
			return;
		}

		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		success.classList.add("hidden");
		error.classList.add("hidden");
		captchaError.classList.add("hidden");

		if (!getHCaptchaResponse(form)) {
			captchaError.classList.remove("hidden");
			return;
		}

		if (submitButton instanceof HTMLButtonElement) {
			submitButton.disabled = true;
		}

		try {
			const formData = new FormData(form);
			const name = formData.get("name");
			const email = formData.get("email");

			const subject = `Nowe zapytanie: ${name?.toString().trim() ?? ""} ${email?.toString().trim() ?? ""}`;

			formData.set("subject", subject);

			const response = await fetch(WEB3FORMS_SUBMIT_URL, {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json",
				},
			});

			const result = (await response.json()) as Web3FormsResponse;

			if (!response.ok || !result.success) {
				throw new Error(result.message ?? "Submission failed");
			}

			success.classList.remove("hidden");
			form.reset();
			resetHCaptcha();
		} catch {
			error.classList.remove("hidden");
		} finally {
			if (submitButton instanceof HTMLButtonElement) {
				submitButton.disabled = false;
			}
		}
	});
}
