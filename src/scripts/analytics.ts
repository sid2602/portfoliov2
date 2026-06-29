const TRACKED_SECTIONS = [
	'hero',
	'benefits',
	'about',
	'services',
	'process',
	'work',
	'experience',
	'contact',
	'faq',
] as const;

type TrackedSection = (typeof TRACKED_SECTIONS)[number];
type SectionReachData = { section: TrackedSection };

type UmamiClient = {
	track: (
		event: string,
		data?: Record<string, string | number | boolean>,
	) => void;
};

declare global {
	interface Window {
		umami?: UmamiClient;
	}
}

const reachedSections = new Set<TrackedSection>();

function isTrackedSection(id: string): id is TrackedSection {
	return (TRACKED_SECTIONS as readonly string[]).includes(id);
}

export function track(
	event: string,
	data?: Record<string, string | number | boolean>,
) {
	if (typeof window.umami?.track === 'function') {
		window.umami.track(event, data);
	}
}

function trackSectionReach(section: TrackedSection) {
	if (reachedSections.has(section)) {
		return;
	}

	reachedSections.add(section);
	track('section-reach', { section });
}

export function initSectionTracking() {
	const sections = TRACKED_SECTIONS.map((id) => document.getElementById(id)).filter(
		(section): section is HTMLElement => section instanceof HTMLElement,
	);

	if (sections.length === 0) {
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) {
					continue;
				}

				const { id } = entry.target;

				if (isTrackedSection(id)) {
					trackSectionReach(id);
				}
			}
		},
		{
			rootMargin: '0px',
			threshold: 0,
		},
	);

	for (const section of sections) {
		observer.observe(section);
	}
}
