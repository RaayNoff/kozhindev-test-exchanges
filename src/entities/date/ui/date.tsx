import { FC, memo } from "react";

import { getFormatedDate } from "../lib";

import s from "./style.module.scss";

interface IDateProps {
	timestamp: number;
}

const Date: FC<IDateProps> = memo(({ timestamp }) => {
	return (
		<p className={s.date}>{getFormatedDate(timestamp, "Do MMM YYYY HH:mm:ss")}</p>
	);
});

export default Date;
