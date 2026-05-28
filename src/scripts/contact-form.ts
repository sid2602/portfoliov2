const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

type Web3FormsResponse = {
	success: boolean;
	message?: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}

function parseWeb3FormsResponse(value: unknown): Web3FormsResponse {
	if (!isRecord(value)) {
		return { success: false, message: "Invalid response" };
	}

	const success = value.success;
	const message = value.message;

	return {
		success: typeof success === "boolean" ? success : false,
		message: typeof message === "string" ? message : undefined,
	};
}

export function initContactForm(root: HTMLElement) {
	const form = root.querySelector("[data-contact-form]");
	const success = root.querySelector("[data-contact-success]");
	const error = root.querySelector("[data-contact-error]");
	const submitButton = root.querySelector("[data-contact-submit]");

	if (!(form instanceof HTMLFormElement) || !(success instanceof HTMLElement)) {
		return;
	}

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		if (!(error instanceof HTMLElement)) {
			return;
		}

		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		success.classList.add("hidden");
		error.classList.add("hidden");

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

			const result = parseWeb3FormsResponse(await response.json());

			if (!response.ok || !result.success) {
				throw new Error(result.message ?? "Submission failed");
			}

			success.classList.remove("hidden");
			form.reset();
		} catch {
			error.classList.remove("hidden");
		} finally {
			if (submitButton instanceof HTMLButtonElement) {
				submitButton.disabled = false;
			}
		}
	});
}
