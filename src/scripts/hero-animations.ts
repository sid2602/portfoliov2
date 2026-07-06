import gsap from 'gsap';

export function initHeroAnimations(root: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	const headingLines = root.querySelectorAll('[data-hero-line]');
	const intro = root.querySelector('[data-hero-intro]');
	const ctaWraps = root.querySelectorAll('[data-hero-cta-wrap]');
	const portrait = root.querySelector('[data-hero-portrait]');
	const effects = root.querySelectorAll('[data-hero-effect]');
	const stats = root.querySelectorAll('[data-hero-stat]');

	gsap.set(
		[headingLines, intro, ctaWraps, effects, stats],
		{ autoAlpha: 0 },
	);

	gsap.set(portrait, { x: 24, scale: 0.97 });
	gsap.set(stats, { y: 16, scale: 0.94 });
	gsap.set(effects, { scale: 0.94 });
	gsap.set(headingLines, { y: 24 });
	gsap.set([intro, ctaWraps], { y: 14 });

	const timeline = gsap.timeline({
		defaults: { ease: 'power2.out' },
	});

	timeline
		.to(
			headingLines,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.06,
			},
			0,
		)
		.to(
			intro,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.4,
			},
			'-=0.3',
		)
		.to(
			ctaWraps,
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.35,
				stagger: 0.05,
			},
			'-=0.18',
		)
		.to(
			effects,
			{
				autoAlpha: 1,
				scale: 1,
				duration: 0.45,
				stagger: 0.06,
			},
			'-=0.35',
		)
		.to(
			portrait,
			{
				x: 0,
				scale: 1,
				duration: 0.55,
			},
			'-=0.4',
		)
		.to(
			stats,
			{
				autoAlpha: 1,
				y: 0,
				scale: 1,
				duration: 0.4,
				stagger: 0.06,
			},
			'-=0.3',
		);

	gsap.to(effects, {
		y: -8,
		duration: 2,
		ease: 'sine.inOut',
		yoyo: true,
		repeat: -1,
		stagger: 0.25,
		delay: 0.5,
	});
}
