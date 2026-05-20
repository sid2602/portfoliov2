import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initContactAnimations(root: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	const headingLines = root.querySelectorAll('[data-contact-line]');
	const lead = root.querySelector('[data-contact-lead]');
	const body = root.querySelector('[data-contact-body]');
	const highlights = root.querySelector('[data-contact-highlights]');
	const formWrap = root.querySelector('[data-contact-form-wrap]');

	const trigger = root.querySelector('[data-contact-content]');

	if (!(trigger instanceof HTMLElement)) {
		return;
	}

	gsap.set(headingLines, { autoAlpha: 0, y: 18 });
	gsap.set(lead, { autoAlpha: 0, y: 14 });
	gsap.set(body, { autoAlpha: 0, y: 14 });
	gsap.set(highlights, { autoAlpha: 0, y: 14 });
	gsap.set(formWrap, { autoAlpha: 0, y: 24 });

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
			highlights,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.4,
			},
			'-=0.18',
		)
		.to(
			formWrap,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.5,
			},
			'-=0.25',
		);
}
