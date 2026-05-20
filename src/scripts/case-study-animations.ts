import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initCaseStudyAnimations(root: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	const headingLines = root.querySelectorAll('[data-case-study-line]');
	const lead = root.querySelector('[data-case-study-lead]');
	const body = root.querySelector('[data-case-study-body]');
	const cta = root.querySelector('[data-case-study-cta]');
	const media = root.querySelector('[data-case-study-media]');

	const trigger = root.querySelector('[data-case-study-content]');

	if (!(trigger instanceof HTMLElement)) {
		return;
	}

	gsap.set(headingLines, { autoAlpha: 0, y: 18 });
	gsap.set(lead, { autoAlpha: 0, y: 14 });
	gsap.set(body, { autoAlpha: 0, y: 14 });
	gsap.set(cta, { autoAlpha: 0, y: 12 });
	gsap.set(media, { autoAlpha: 0, y: 24 });

	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger,
			start: 'top 88%',
			once: true,
		},
		defaults: { ease: 'power2.out' },
	});

	timeline
		.to(media, {
			autoAlpha: 1,
			y: 0,
			duration: 0.5,
		})
		.to(
			headingLines,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.45,
				stagger: 0.06,
			},
			'-=0.35',
		)
		.to(
			lead,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.4,
			},
			'-=0.28',
		)
		.to(
			body,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.4,
			},
			'-=0.22',
		)
		.to(
			cta,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.35,
			},
			'-=0.18',
		);
}
