import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { convertSlice } from "./convert.slice";

interface getConversionArgs {
	inputCurrency: CurrencyCode;
	outputCurrency: CurrencyCode;
	amount: number;
	isOutput: boolean;
}

export const getConversion = createAsyncThunk(
	"convert/getConversion",
	async (
		{ inputCurrency, outputCurrency, amount, isOutput }: getConversionArgs,
		thunkAPI,
	) => {
		try {
			const baseURL = process.env.REACT_APP_API_URL;
			const apiKey = process.env.REACT_APP_API_KEY;

			const response = await axios.get<ConversionRateResponse>(
				`${baseURL}${apiKey}/pair/${inputCurrency}/${outputCurrency}/${amount}`,
			);

			const result: ConversionFullfiled = {
				inputVal: 0,
				outputVal: 0,
			};

			if (isOutput) {
				result.outputVal = amount;
				result.inputVal = response.data.conversion_result;
			} else {
				result.inputVal = amount;
				result.outputVal = response.data.conversion_result;
			}

			return result;
		} catch (error) {
			thunkAPI.rejectWithValue("Cannot load conversion rate");
		}
	},
);

export const setInputCurrency =
	(currencyCode: CurrencyCode) => (dispatch: AppDispatch) => {
		dispatch(convertSlice.actions.setInputCurrency(currencyCode));
	};
export const setOutputCurrency =
	(currencyCode: CurrencyCode) => (dispatch: AppDispatch) => {
		dispatch(convertSlice.actions.setOutputCurrency(currencyCode));
	};

export const setInputAmount = (amount: number) => (dispatch: AppDispatch) => {
	dispatch(convertSlice.actions.setInputValue(amount));
};
export const setOutputAmount = (amount: number) => (dispatch: AppDispatch) => {
	dispatch(convertSlice.actions.setOutputValue(amount));
};

export const resetAmounts = () => (dispatch: AppDispatch) => {
	dispatch(convertSlice.actions.resetAmounts());
};
