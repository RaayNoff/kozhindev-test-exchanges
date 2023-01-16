import clsx from "clsx";
import { FC } from "react";

import s from "./style.module.scss";

interface CurrencyProps extends Currency {
	index: number;
	className?: string;
}

const Currency: FC<CurrencyProps> = ({
	index,
	code,
	name,
	toCNY,
	toEUR,
	toRUB,
	toUSD,
	className,
}) => {
	return (
		<tr className={clsx(s.currency, className)}>
			<td className={s.currency__col}>{index}.</td>
			<td className={s.currency__col}>{code}</td>
			<td className={s.currency__col}>{name}</td>
			<td className={s.currency__col}>{toRUB} RUB</td>
			<td className={s.currency__col}>{toUSD} USD</td>
			<td className={s.currency__col}>{toEUR} EUR</td>
			<td className={s.currency__col}>{toCNY} CNY</td>
		</tr>
	);
};

export default Currency;
