import { contactEmail, siteName } from "./site";

export const personJobTitle =
	"Twórca stron i landing page pod pozyskiwanie klientów";

export const linkedInUrl = "https://www.linkedin.com/in/kornausfilip";

export const personSameAs = [
	linkedInUrl,
	"https://cvcreatorhub.com/pl",
] as const;

export const personKnowsAbout = [
	"Tworzenie stron www",
	"Landing page",
	"SEO",
	"GEO",
	"Optymalizacja pod wyszukiwarki AI",
	"Aplikacje webowe",
	"UX i konwersja",
	"Analityka webowa",
] as const;

type BuildPersonSchemaInput = {
	pageUrl: string;
	imageUrl: string;
	description: string;
};

export function buildPersonSchema({
	pageUrl,
	imageUrl,
	description,
}: BuildPersonSchemaInput) {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: siteName,
		url: pageUrl,
		image: imageUrl,
		jobTitle: personJobTitle,
		description,
		email: contactEmail,
		sameAs: [...personSameAs],
		knowsAbout: [...personKnowsAbout],
	};
}

export function buildPersonProviderRef(pageUrl: string) {
	return {
		"@type": "Person" as const,
		name: siteName,
		url: pageUrl,
		sameAs: [...personSameAs],
	};
}
