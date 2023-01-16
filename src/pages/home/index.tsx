import { Header } from "widgets";
import { CurrenciesTable } from "widgets/currenciesTable";
import { Exchange } from "widgets/exchange";
import { useCurrenciesActions } from "entities/сurrencies";
import { FC, useEffect } from "react";

import s from "./style.module.scss";

const Home: FC = () => {
	const { updateCurrencies, setUpdateTimestamp } = useCurrenciesActions();

	useEffect(() => {
		updateCurrencies();
		setUpdateTimestamp();
	}, []);

	return (
		<>
			<Header />
			<main className={s.main}>
				<div className="container">
					<CurrenciesTable className={s.main__table} />
					<Exchange className={s.main__exchange} />
				</div>
			</main>
		</>
	);
};

export default Home;
