export const statsBlocks = [
	{
		title: "Więcej zapytań z tej samej liczby odwiedzin",
		text: "Przemyślany układ i treści pod realne obiekcje klientów podnoszą konwersję nawet o 200%. Więcej wizyt zamienia się w telefony i rezerwacje, bez dokładania budżetu na reklamę.",
		sources: [
			{
				label: "Unbounce: CRO best practices",
				href: "https://unbounce.com/conversion-rate-optimization/cro-best-practices/",
			},
		],
	},
	{
		title: "Widoczność tam, gdzie szukają",
		text: "97% osób szuka firm online. Strona dopasowana do Twojej branży i okolicy sprawia, że znajdują Ciebie, zanim trafią do konkurencji.",
		sources: [
			{
				label: "BIA/Kelsey i ConStat (PR Newswire)",
				href: "https://www.prnewswire.com/news-releases/nearly-all-consumers-97-now-use-online-media-to-shop-locally-according-to-biakelsey-and-constat-87221242.html",
			},
		],
	},
	{
		title: "Zaufanie od pierwszego spojrzenia",
		text: "75% osób ocenia wiarygodność firmy po stronie www. Masz około 50 milisekund na dobre pierwsze wrażenie: albo zostają, albo odchodzą.",
		sources: [
			{
				label: "Stanford Web Credibility Project",
				href: "https://credibility.stanford.edu/pdf/How_Do_People_Evaluate_a_Web_Site%27s_Credibility_v37.pdf",
			},
			{
				label: "Lindgaard et al.: 50 ms first impression",
				href: "https://www.tandfonline.com/doi/abs/10.1080/01449290500330448",
			},
		],
	},
] as const;

export type FaqTextItem = {
	kind: "text";
	question: string;
	answer: string;
};

export type FaqStatsItem = {
	kind: "stats";
	question: string;
	/** Plain-text answer for FAQPage JSON-LD */
	schemaAnswer: string;
};

export type FaqItem = FaqTextItem | FaqStatsItem;

export const faqItems: FaqItem[] = [
	{
		kind: "text",
		question: "Dla kogo jest taka współpraca?",
		answer:
			"Dla firm i usług, które chcą więcej zapytań z internetu: lokalnych biznesów, specjalistów, B2B i marek osobistych. Jeśli klienci sprawdzają Cię online, zanim zadzwonią, taka strona ma sens.",
	},
	{
		kind: "text",
		question: "Ile trwa zrobienie strony?",
		answer:
			"Standardowo około 14 dni od ustalenia zakresu, o ile szybko dostanę od Ciebie materiały i feedback. Dokładny termin ustalamy na początku, żebyś wiedział, kiedy liczyć na start.",
	},
	{
		kind: "text",
		question: "Co dokładnie dostaję?",
		answer:
			"Komplet pod pozyskiwanie klientów: projekt i kod, treści sprzedażowe, SEO, analitykę, architekturę pod konwersję oraz opiekę po wdrożeniu. Nie oddaję „gołego” szablonu, tylko narzędzie gotowe do pracy.",
	},
	{
		kind: "stats",
		question: "Skąd biorą się statystyki na stronie?",
		schemaAnswer:
			"Liczby z sekcji korzyści opieram na badaniach branżowych i UX, m.in. Unbounce (CRO), BIA/Kelsey (97% konsumentów szuka online), Stanford Web Credibility Project (75% ocenia wiarygodność po stronie www) oraz Lindgaard et al. (pierwsze wrażenie w ok. 50 ms). Wynik zależy od branży, ruchu i punktu startowego — to kierunek z badań, a nie gwarancja identycznego efektu w każdym projekcie.",
	},
	{
		kind: "text",
		question: "Czy muszę sam przygotować teksty i zdjęcia?",
		answer:
			"Teksty współtworzymy: Ty znasz biznes, ja pomagam ułożyć je tak, by sprzedawały. Jeśli masz zdjęcia lub logo, świetnie. Jeśli nie, ustalimy na starcie, co trzeba dosłać lub uzupełnić, żeby strona wyglądała profesjonalnie.",
	},
	{
		kind: "text",
		question: "Jak wyglądają poprawki?",
		answer:
			"W projekcie są maksymalnie 2 rundy zbiorczych poprawek. W każdej rundzie zbierasz wszystkie uwagi i przesyłasz je jednorazowo. Dzięki temu zmiany wchodzą sprawnie i nie rozjeżdżamy terminu.",
	},
	{
		kind: "text",
		question: "Ile to kosztuje?",
		answer:
			"Cena zależy od zakresu: liczby podstron, treści, integracji i tego, czy startujemy od zera, czy przebudowujemy istniejącą stronę. Po krótkiej rozmowie dostajesz jasną wycenę, bez ukrytych pozycji.",
	},
	{
		kind: "text",
		question: "Czym to się różni od szablonu na Wixie lub WordPressie?",
		answer:
			"Szablon jest „dla wszystkich”. Ja układam stronę pod Twojego klienta i jego decyzję: co ma zobaczyć, co ma kliknąć i dlaczego ma się do Ciebie odezwać. To nie tylko wygląd, ale cała ścieżka do kontaktu.",
	},
	{
		kind: "text",
		question: "Czy zajmujesz się hostingiem i domeną?",
		answer:
			"Domenę i hosting wykupujesz Ty, żeby zostały na Twoją firmę. Możesz też przekazać mi dostęp do konta u dostawcy, a ja je skonfiguruję, podepnę stronę i sprawdzę, czy wszystko działa po uruchomieniu. Na życzenie podpowiem, u kogo warto to kupić.",
	},
	{
		kind: "text",
		question: "Co dzieje się po uruchomieniu strony?",
		answer:
			"Nie kończę na publikacji. W ramach współpracy masz opiekę po wdrożeniu: aktualizacje, poprawki i rozwój strony wraz z Twoim biznesem. Zakres i warunki ustalamy przy wycenie.",
	},
	{
		kind: "text",
		question: "Mam już stronę. Czy robisz przebudowę?",
		answer:
			"Tak. Jeśli obecna witryna nie zbiera zapytań albo wygląda nieaktualnie, możemy zrobić przebudowę pod ten sam cel: więcej kontaktu i lepszą widoczność w Google. Na rozmowie sprawdzę, co warto zachować, a co zrobić od nowa.",
	},
	{
		kind: "text",
		question: "Jak zacząć?",
		answer:
			"Wypełnij formularz kontaktowy lub umów darmową rozmowę. Krótko opisz firmę i cel strony. Odpowiem zwykle w ciągu jednego dnia roboczego i ustalimy kolejne kroki.",
	},
];

function faqItemAnswer(item: FaqItem): string {
	return item.kind === "text" ? item.answer : item.schemaAnswer;
}

export function buildFaqPageSchema(pageUrl: string) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqItems.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faqItemAnswer(item),
			},
		})),
		url: pageUrl,
	};
}
