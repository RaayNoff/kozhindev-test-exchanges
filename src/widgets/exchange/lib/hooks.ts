import { selectConvert, useConvertActions } from "entities/convert";
import { useSelector } from "react-redux";
import { SingleValue } from "react-select";
import { useDebounce } from "shared";

export const useExchangeHandlers = () => {
	const { inputCurrency, outputCurrency } = useSelector(selectConvert);
	const {
		setInputCurrency,
		setOutputCurrency,
		getConversion,
		setInputAmount,
		setOutputAmount,
		resetAmounts,
	} = useConvertActions();
	const getDebouncedConversion = useDebounce(getConversion, 500);

	const handleInputSelect = (selectedOption: SingleValue<SelectedOption>) => {
		if (selectedOption?.value) {
			setInputCurrency(selectedOption.value);
			resetAmounts();
		}
	};
	const handleOutputSelect = (selectedOption: SingleValue<SelectedOption>) => {
		if (selectedOption?.value) {
			setOutputCurrency(selectedOption.value);
			resetAmounts();
		}
	};

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target;

		const currentValue = Number(target.value);
		setInputAmount(currentValue);

		getDebouncedConversion({
			amount: currentValue,
			inputCurrency: inputCurrency,
			outputCurrency: outputCurrency,
			isOutput: false,
		});
	};
	const onChangeOutput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target;

		const currentValue = Number(target.value);
		setOutputAmount(currentValue);

		getDebouncedConversion({
			amount: currentValue,
			inputCurrency: outputCurrency,
			outputCurrency: inputCurrency,
			isOutput: true,
		});
	};

	return {
		onChangeInput,
		onChangeOutput,
		handleInputSelect,
		handleOutputSelect,
	};
};
