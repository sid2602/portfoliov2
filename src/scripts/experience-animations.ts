import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initExperienceAnimations(root: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	const headingLines = root.querySelectorAll('[data-experience-line]');
	const intro = root.querySelector('[data-experience-intro]');
	const items = root.querySelectorAll('[data-experience-item]');

	const trigger = root.querySelector('[data-experience-content]');

	if (!(trigger instanceof HTMLElement)) {
		return;
	}

	gsap.set(headingLines, { autoAlpha: 0, y: 18 });
	gsap.set(intro, { autoAlpha: 0, y: 14 });
	gsap.set(items, { autoAlpha: 0, y: 24 });

	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger,
			start: 'top 88%',
			once: true,
		},
		defaults: { ease: 'power2.out' },
	});

	timeline
		.to(headingLines, {
			autoAlpha: 1,
			y: 0,
			duration: 0.45,
			stagger: 0.06,
		})
		.to(
			intro,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.4,
			},
			'-=0.28',
		)
		.to(
			items,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.45,
				stagger: 0.12,
			},
			'-=0.2',
		);
}
