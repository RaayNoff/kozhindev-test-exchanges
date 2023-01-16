import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getConversion } from "./convert.actions";

interface ConvertState {
	inputValue: number;
	outputValue: number;
	inputCurrency: CurrencyCode;
	outputCurrency: CurrencyCode;
	isLoading: boolean;
	error: null | string;
}

const initialState: ConvertState = {
	inputValue: 0,
	outputValue: 0,
	inputCurrency: "RUB",
	outputCurrency: "USD",
	isLoading: false,
	error: null,
};

export const convertSlice = createSlice({
	name: "convert",
	initialState,
	reducers: {
		setInputCurrency: (state, action: PayloadAction<CurrencyCode>) => {
			state.inputCurrency = action.payload;
		},
		setOutputCurrency: (state, action: PayloadAction<CurrencyCode>) => {
			state.outputCurrency = action.payload;
		},
		setInputValue: (state, action: PayloadAction<number>) => {
			state.inputValue = action.payload;
		},
		setOutputValue: (state, action: PayloadAction<number>) => {
			state.outputValue = action.payload;
		},
		resetAmounts: (state) => {
			state.inputValue = 0;
			state.outputValue = 0;
		},
	},
	extraReducers(builder) {
		builder.addCase(
			getConversion.fulfilled.type,
			(state, action: PayloadAction<ConversionFullfiled>) => {
				state.inputValue = action.payload.inputVal;
				state.outputValue = action.payload.outputVal;
				state.error = null;
				state.isLoading = false;
			},
		);
		builder.addCase(
			getConversion.rejected.type,
			(state, action: PayloadAction<string>) => {
				state.isLoading = false;
				state.error = action.payload;
			},
		);
		builder.addCase(getConversion.pending.type, (state) => {
			state.error = null;
			state.isLoading = true;
		});
	},
});
