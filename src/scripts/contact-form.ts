export function initContactForm(root: HTMLElement) {
	const form = root.querySelector('[data-contact-form]');
	const success = root.querySelector('[data-contact-success]');

	if (!(form instanceof HTMLFormElement) || !(success instanceof HTMLElement)) {
		return;
	}

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		success.classList.remove('hidden');
		form.reset();
	});
}
