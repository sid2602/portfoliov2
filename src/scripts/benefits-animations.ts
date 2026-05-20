import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initBenefitsAnimations(root: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	const content = root.querySelector('[data-benefits-content]');
	const headingLines = root.querySelectorAll('[data-benefits-line]');
	const intro = root.querySelector('[data-benefits-intro]');
	const features = root.querySelectorAll('[data-benefits-feature]');

	if (!(content instanceof HTMLElement)) {
		return;
	}

	gsap.set(content, { autoAlpha: 0, y: 28 });
	gsap.set(headingLines, { autoAlpha: 0, y: 18 });
	gsap.set(intro, { autoAlpha: 0, y: 14 });
	gsap.set(features, { autoAlpha: 0, y: 20 });

	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: content,
			start: 'top 92%',
			once: true,
		},
		defaults: { ease: 'power2.out' },
	});

	timeline
		.to(content, { autoAlpha: 1, y: 0, duration: 0.5 })
		.to(
			headingLines,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.45,
				stagger: 0.06,
			},
			'-=0.32',
		)
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
			features,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.4,
				stagger: 0.07,
			},
			'-=0.22',
		);
}
