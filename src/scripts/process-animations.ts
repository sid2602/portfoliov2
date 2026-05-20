import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initProcessAnimations(root: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	const headingLines = root.querySelectorAll('[data-process-line]');
	const steps = root.querySelectorAll('[data-process-step]');

	const trigger = root.querySelector('[data-process-content]');

	if (!(trigger instanceof HTMLElement)) {
		return;
	}

	gsap.set(headingLines, { autoAlpha: 0, y: 18 });
	gsap.set(steps, { autoAlpha: 0, y: 20 });

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
			steps,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.45,
				stagger: 0.1,
			},
			'-=0.2',
		);
}
