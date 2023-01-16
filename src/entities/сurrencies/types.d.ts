declare type CurrencyResponse = {
	base_code: string;
	conversion_rates: {
		[key in CurrencyCode]: number;
	};
};

declare type CurrencyCode =
	| "RUB"
	| "UAH"
	| "USD"
	| "CNY"
	| "GBP"
	| "KZT"
	| "BYN"
	| "EUR"
	| "PLN"
	| "TRY";

declare type Currency = {
	code: string;
	name: string;
	toRUB: number;
	toUSD: number;
	toEUR: number;
	toCNY: number;
};
