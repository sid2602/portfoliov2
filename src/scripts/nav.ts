const SECTION_IDS = [
	'benefits',
	'services',
	'process',
	'work',
	'experience',
	'contact',
	'faq',
] as const;

function setMenuOpen(nav: HTMLElement, open: boolean) {
	const toggle = nav.querySelector('[data-nav-toggle]');
	const menu = nav.querySelector('[data-nav-menu]');
	const iconMenu = nav.querySelector('[data-nav-icon-menu]');
	const iconClose = nav.querySelector('[data-nav-icon-close]');

	if (
		!(toggle instanceof HTMLButtonElement) ||
		!(menu instanceof HTMLElement) ||
		!(iconMenu instanceof HTMLElement) ||
		!(iconClose instanceof HTMLElement)
	) {
		return;
	}

	toggle.setAttribute('aria-expanded', String(open));
	toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');

	if (open) {
		menu.hidden = false;
		menu.style.gridTemplateRows = '1fr';
		iconMenu.classList.add('hidden');
		iconClose.classList.remove('hidden');
		document.body.style.overflow = 'hidden';
	} else {
		menu.style.gridTemplateRows = '0fr';
		iconMenu.classList.remove('hidden');
		iconClose.classList.add('hidden');
		document.body.style.overflow = '';

		const onEnd = () => {
			if (menu.style.gridTemplateRows === '0fr') {
				menu.hidden = true;
			}
			menu.removeEventListener('transitionend', onEnd);
		};
		menu.addEventListener('transitionend', onEnd);
	}
}

function setActiveLink(nav: HTMLElement, id: string) {
	const links = nav.querySelectorAll('[data-nav-link]');

	for (const link of links) {
		if (link instanceof HTMLElement) {
			const isActive = link.dataset.navLink === id;
			link.toggleAttribute('data-nav-active', isActive);
			if (isActive) {
				link.setAttribute('aria-current', 'true');
			} else {
				link.removeAttribute('aria-current');
			}
		}
	}
}

export function initNav() {
	const nav = document.querySelector('[data-nav]');

	if (!(nav instanceof HTMLElement)) {
		return;
	}

	const toggle = nav.querySelector('[data-nav-toggle]');
	const menu = nav.querySelector('[data-nav-menu]');
	let menuOpen = false;

	const updateScrollState = () => {
		nav.toggleAttribute('data-nav-scrolled', window.scrollY > 8);
	};

	updateScrollState();
	window.addEventListener('scroll', updateScrollState, { passive: true });

	if (toggle instanceof HTMLButtonElement) {
		toggle.addEventListener('click', () => {
			menuOpen = !menuOpen;
			setMenuOpen(nav, menuOpen);
		});
	}

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && menuOpen) {
			menuOpen = false;
			setMenuOpen(nav, false);
		}
	});

	nav.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', () => {
			if (menuOpen) {
				menuOpen = false;
				setMenuOpen(nav, false);
			}
		});
	});

	const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
		(section): section is HTMLElement => section instanceof HTMLElement,
	);

	if (sections.length === 0) {
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			const visible = entries
				.filter((entry) => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

			const top = visible[0]?.target;

			if (top instanceof HTMLElement && top.id) {
				setActiveLink(nav, top.id);
			}
		},
		{
			rootMargin: '-40% 0px -45% 0px',
			threshold: [0, 0.15, 0.35, 0.5],
		},
	);

	for (const section of sections) {
		observer.observe(section);
	}

	if (!(menu instanceof HTMLElement)) {
		return;
	}

	menu.hidden = true;
}
