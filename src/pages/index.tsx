import { lazy } from "react";
import { Route as Path, Routes, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./home"));

export const Routing = () => {
	return (
		<Routes>
			<Path path={"/home" as Route} element={<HomePage />} />
			<Path path="*" element={<Navigate to={"/home" as Route} />} />
		</Routes>
	);
};
