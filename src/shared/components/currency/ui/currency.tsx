import { FC } from "react";

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
			<td className={cellClassName}>{toRUB}</td>
			<td className={cellClassName}>{toUSD}</td>
			<td className={cellClassName}>{toEUR}</td>
			<td className={cellClassName}>{toCNY}</td>
		</tr>
	);
};

export default Currency;
