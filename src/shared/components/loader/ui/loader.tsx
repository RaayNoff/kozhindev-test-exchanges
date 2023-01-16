import clsx from "clsx";
import { FC } from "react";

import s from "./style.module.scss";

interface LoaderProps {
	className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
	return (
		<svg className={clsx(s.loader, className)} viewBox="25 25 50 50">
			<circle className={s.loader__circle} cx="50" cy="50" r="20"></circle>
		</svg>
	);
};

export default Loader;
