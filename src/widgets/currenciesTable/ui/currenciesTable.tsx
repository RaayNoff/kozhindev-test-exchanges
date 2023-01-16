import { FC } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { selectCurrencies } from "entities/сurrencies";
import { Currency, Loader } from "shared";

import s from "./style.module.scss";

interface CurrenciesTableProps {
	className?: string;
}

const CurrenciesTable: FC<CurrenciesTableProps> = ({ className }) => {
	const { currenciesList, isLoading, error } = useSelector(selectCurrencies);

	if (error) {
		return <p className={s.error}>Произошла ошибка</p>;
	}

	return (
		<>
			{isLoading && <Loader className={s.loader} />}
			<table
				className={clsx(
					s.currencies,
					s.table,
					className,
					isLoading && s.currencies_hidden,
				)}
			>
				<thead>
					<tr className={s.table__row}>
						<th className={s.table__col}>№</th>
						<th className={s.table__col}>Code</th>
						<th className={s.table__col}>Name</th>
						<th className={s.table__col}>RUB</th>
						<th className={s.table__col}>USD</th>
						<th className={s.table__col}>EUR</th>
						<th className={s.table__col}>CNY</th>
					</tr>
				</thead>
				<tbody>
					{currenciesList?.map((cur, i) => (
						<Currency
							className={s.table__row}
							cellClassName={s.table__col}
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
				</tbody>
			</table>
		</>
	);
};

export default CurrenciesTable;
