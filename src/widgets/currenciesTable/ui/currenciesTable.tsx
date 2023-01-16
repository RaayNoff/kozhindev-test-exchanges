import { FC } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { selectCurrencies } from "entities/сurrencies";
import { Currency, Loader } from "shared";

import s from "./style.module.scss";

const CurrenciesTable: FC = () => {
	const { currenciesList, isLoading, error } = useSelector(selectCurrencies);

	if (isLoading) {
		return <Loader className={s.loader} />;
	}
	if (error) {
		return <p className={s.error}>Произошла ошибка</p>;
	}

	return (
		<table className={clsx(s.main__сurrencies, s.currencies)}>
			<tr className={s.currencies__header}>
				<th className={s.currencies__head}>№</th>
				<th className={s.currencies__head}>Code</th>
				<th className={s.currencies__head}>Name</th>
				<th className={s.currencies__head}>RUB</th>
				<th className={s.currencies__head}>USD</th>
				<th className={s.currencies__head}>EUR</th>
				<th className={s.currencies__head}>CNY</th>
			</tr>
			{currenciesList?.map((cur, i) => (
				<Currency
					className={s.currencies__item}
					index={i + 1}
					key={cur.code}
					code={cur.code}
					name={cur.name}
					toCNY={cur.toCNY}
					toEUR={cur.toEUR}
					toRUB={cur.toRUB}
					toUSD={cur.toUSD}
				/>
			))}
		</table>
	);
};

export default CurrenciesTable;
