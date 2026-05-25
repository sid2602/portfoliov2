function setFaqOpen(trigger: HTMLButtonElement, open: boolean) {
	trigger.setAttribute("aria-expanded", String(open));
	trigger.dataset.open = String(open);

	const panel = trigger.querySelector("[data-faq-panel]");

	if (panel instanceof HTMLElement) {
		panel.setAttribute("aria-hidden", String(!open));
	}
}

export function initFaq(root: HTMLElement) {
	const triggers = root.querySelectorAll("[data-faq-trigger]");

	for (const trigger of triggers) {
		if (!(trigger instanceof HTMLButtonElement)) {
			continue;
		}

		setFaqOpen(trigger, false);

		trigger.addEventListener("click", (event) => {
			const target = event.target;

			if (
				target instanceof HTMLAnchorElement ||
				(target instanceof Element && target.closest("a"))
			) {
				return;
			}

			const open = trigger.getAttribute("aria-expanded") === "true";
			setFaqOpen(trigger, !open);
		});
	}
}
