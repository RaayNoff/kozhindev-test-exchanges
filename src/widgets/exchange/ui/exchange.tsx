import clsx from "clsx";
import { selectConvert, useConvertActions } from "entities/convert";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

import { selectOptions, useExchangeHandlers } from "../lib";

import s from "./style.module.scss";

interface ExchangeProps {
	className?: string;
}

const Exchange: FC<ExchangeProps> = ({ className }) => {
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
		<form className={clsx(s.exchange, className)}>
			<h2 className={s.exchange__title}>Exchange</h2>
			<section className={s.exchange__controls}>
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
			</section>
		</form>
	);
};

export default Exchange;
