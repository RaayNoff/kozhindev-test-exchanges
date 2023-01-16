import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { updateCurrencies } from "./currencies.actions";

interface ICurrenciesState {
	currenciesList: Currency[] | null;
	updateTimestamp: number;
	error: string | null;
	isLoading: boolean;
}

const initialState: ICurrenciesState = {
	currenciesList: null,
	updateTimestamp: 0,
	error: null,
	isLoading: false,
};

export const currenciesSlice = createSlice({
	name: "currencies",
	initialState,
	reducers: {
		setTimestamp: (state, action: PayloadAction<number>) => {
			state.updateTimestamp = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(updateCurrencies.pending.type, (state) => {
			state.currenciesList = [];
			state.isLoading = true;
			state.error = null;
		});

		builder.addCase(
			updateCurrencies.rejected.type,
			(state, action: PayloadAction<string>) => {
				state.error = action.payload;
				state.isLoading = false;
				state.currenciesList = [];
			},
		);

		builder.addCase(
			updateCurrencies.fulfilled.type,
			(state, action: PayloadAction<Currency[]>) => {
				state.error = null;
				state.isLoading = false;
				state.currenciesList = action.payload;
			},
		);
	},
});
