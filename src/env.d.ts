interface HCaptchaApi {
	reset: (widgetId?: string) => void;
}

interface Window {
	hcaptcha?: HCaptchaApi;
}
