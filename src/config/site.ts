/** Inbox for form notifications — set the same address in the Web3Forms dashboard. */
export const contactEmail = "kornaus.filip@gmail.com";

export const siteName = "Filip Kornaus";

/** Hostname of self-hosted Umami (for privacy policy). Update if env is unset. */
export const analyticsHostname =
	typeof import.meta.env.PUBLIC_UMAMI_SCRIPT_URL === "string" &&
	import.meta.env.PUBLIC_UMAMI_SCRIPT_URL.length > 0
		? new URL(import.meta.env.PUBLIC_UMAMI_SCRIPT_URL).hostname
		: "analytics.twoja-domena.pl";

/** How long Umami analytics data is retained — keep in sync with server settings. */
export const analyticsRetentionMonths = 24;

/** How long contact form correspondence is kept. */
export const contactDataRetentionMonths = 12;
