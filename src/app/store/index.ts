import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { convertSlice } from "entities/convert";
import { currenciesSlice } from "entities/сurrencies";

export const rootReducer = combineReducers({
	currencies: currenciesSlice.reducer,
	convert: convertSlice.reducer,
});

export const createStore = () =>
	configureStore({
		reducer: rootReducer,
	});
