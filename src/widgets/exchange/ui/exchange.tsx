import { selectConvert, useConvertActions } from "entities/convert";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

import { selectOptions, useExchangeHandlers } from "../lib";

import s from "./style.module.scss";

const Exchange: FC = () => {
	const { inputValue, outputValue } = useSelector(selectConvert);
	const {
		onChangeInput,
		onChangeOutput,
		handleInputSelect,
		handleOutputSelect,
	} = useExchangeHandlers();

	const { getConversion } = useConvertActions();

	useEffect(() => {
		getConversion({
			amount: 10,
			inputCurrency: "RUB",
			outputCurrency: "USD",
			isOutput: false,
		});
	}, []);

	return (
		<form className={s.exchange}>
			<div className={s.ecxhange__io}>
				<input
					type="number"
					className={s.exchange__field}
					value={inputValue}
					onChange={(e) => onChangeInput(e)}
				/>
				<input
					type="number"
					className={s.exchange__field}
					value={outputValue}
					onChange={(e) => onChangeOutput(e)}
				></input>
			</div>
			<div className={s.exchange__selectors}>
				<Select
					className={s.exchange__select}
					options={selectOptions}
					defaultValue={selectOptions.filter((opt) => opt.label === "RUB")}
					onChange={handleInputSelect}
				/>
				<Select
					className={s.exchange__select}
					options={selectOptions}
					defaultValue={selectOptions.filter((opt) => opt.label === "USD")}
					onChange={handleOutputSelect}
				/>
			</div>
		</form>
	);
};

export default Exchange;
