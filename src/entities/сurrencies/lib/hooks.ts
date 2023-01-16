import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import * as actionCreators from "../model/currencies.actions";

const useCurrenciesActions = () => {
	const dispatch = useDispatch<AppDispatch>();
	return bindActionCreators(actionCreators, dispatch);
};

export { useCurrenciesActions };
