import clsx from "clsx";
import { FC, useCallback } from "react";

import { selectCurrencies, useCurrenciesActions } from "entities/сurrencies";
import { selectConvert, useConvertActions } from "entities/convert";
import { Date } from "entities/date";
import { Button } from "shared";

import { useSelector } from "react-redux";

import s from "./style.module.scss";

const Header: FC = () => {
	const { updateTimestamp } = useSelector(selectCurrencies);
	const { setUpdateTimestamp, updateCurrencies } = useCurrenciesActions();
	const { getConversion } = useConvertActions();
	const { inputCurrency, outputCurrency, inputValue } =
		useSelector(selectConvert);

	const refreshCurrenciesData = useCallback(() => {
		setUpdateTimestamp();
		updateCurrencies();
		getConversion({
			amount: inputValue,
			inputCurrency: inputCurrency,
			outputCurrency: outputCurrency,
			isOutput: false,
		});
	}, [inputValue]);

	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.header__container}>
					<a href={"/home" as Route} title="Exchanges" className={s.header__logo}>
						<h1>Exchanges & Currencies</h1>
					</a>

					<div className={clsx(s.info)}>
						<h2 className={s.info__time}>
							<span>Updated:</span> {<Date timestamp={updateTimestamp} />}
						</h2>
						<Button callback={refreshCurrenciesData}>Update</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
