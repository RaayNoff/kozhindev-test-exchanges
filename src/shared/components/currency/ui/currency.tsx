import clsx from "clsx";
import { FC } from "react";

import s from "./style.module.scss";

interface CurrencyProps extends Currency {
	index: number;
	className?: string;
	cellClassName?: string;
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
	cellClassName,
}) => {
	return (
		<tr className={className}>
			<td className={cellClassName}>{index}.</td>
			<td className={cellClassName}>{code}</td>
			<td className={cellClassName}>{name}</td>
			<td className={cellClassName}>{toRUB} RUB</td>
			<td className={cellClassName}>{toUSD} USD</td>
			<td className={cellClassName}>{toEUR} EUR</td>
			<td className={cellClassName}>{toCNY} CNY</td>
		</tr>
	);
};

export default Currency;
