import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initOfferAnimations(root: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	const headingLines = root.querySelectorAll('[data-offer-line]');
	const items = root.querySelectorAll('[data-offer-item]');

	const trigger = root.querySelector('[data-offer-content]');

	if (!(trigger instanceof HTMLElement)) {
		return;
	}

	gsap.set(headingLines, { autoAlpha: 0, y: 18 });
	gsap.set(items, { autoAlpha: 0, y: 20 });

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
			items,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.4,
				stagger: 0.06,
			},
			'-=0.22',
		)
		;
}
