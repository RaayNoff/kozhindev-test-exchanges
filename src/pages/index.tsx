import { lazy } from "react";
import { Route as Path, Routes, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./home"));

export enum Route {
	HOME = "/home",
}

export const Routing = () => {
	return (
		<Routes>
			<Path path={Route.HOME} element={<HomePage />} />
			<Path path="*" element={<Navigate to={Route.HOME} />} />
		</Routes>
	);
};
