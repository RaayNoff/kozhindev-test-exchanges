declare type ConversionRateResponse = {
	base_code: CurrencyCode;
	target_code: CurrencyCode;
	conversion_rate: number;
	conversion_result: number;
};

declare type ConversionFullfiled = {
	inputVal: number;
	outputVal: number;
};
