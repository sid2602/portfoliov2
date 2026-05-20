import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initBenefits2Animations(root: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	const headingLines = root.querySelectorAll('[data-benefits2-line]');
	const intro = root.querySelector('[data-benefits2-intro]');
	const media = root.querySelector('[data-benefits2-media]');
	const card = root.querySelector('[data-benefits2-card]');

	const trigger = root.querySelector('[data-benefits2-content]');

	if (!(trigger instanceof HTMLElement)) {
		return;
	}

	gsap.set(headingLines, { autoAlpha: 0, y: 18 });
	gsap.set(intro, { autoAlpha: 0, y: 14 });
	gsap.set([media, card], { autoAlpha: 0, y: 24 });

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
			media,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.5,
			},
			'-=0.2',
		)
		.to(
			card,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.5,
			},
			'-=0.35',
		);
}
