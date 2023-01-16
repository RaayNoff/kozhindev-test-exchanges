import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currenciesSlice } from "entities/сurrencies";

export const rootReducer = combineReducers({
	currencies: currenciesSlice.reducer,
});

export const createStore = () =>
	configureStore({
		reducer: rootReducer,
	});
