import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import * as actionCreators from "../model/convert.actions";

const useConvertActions = () => {
	const dispatch = useDispatch<AppDispatch>();
	return bindActionCreators(actionCreators, dispatch);
};

export { useConvertActions };
