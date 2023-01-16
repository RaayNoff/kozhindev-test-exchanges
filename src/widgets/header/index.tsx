import clsx from "clsx";
import { FC } from "react";

import { selectCurrencies, useCurrenciesActions } from "entities/сurrencies";
import { Date } from "entities/date";
import { Button } from "shared";

import { useSelector } from "react-redux";

import s from "./style.module.scss";

const Header: FC = () => {
	const { updateTimestamp } = useSelector(selectCurrencies);
	const { setUpdateTimestamp, updateCurrencies } = useCurrenciesActions();

	const refreshCurrenciesData = () => {
		setUpdateTimestamp();
		updateCurrencies();
	};

	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.header__container}>
					<a href="#" title="Exchanges Test" className={s.header__logo}>
						<h1>Exchanges Test</h1>
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
