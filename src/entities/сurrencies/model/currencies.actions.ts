import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getCurrentTimestamp } from "../lib";

import { currenciesArray } from "../lib/constants";

import { currenciesSlice } from "./currencies.slice";

export const updateCurrencies = createAsyncThunk(
	"currencies/updateAll",
	async (_, thunkAPI) => {
		try {
			const baseURL = process.env.REACT_APP_API_URL;
			const apiKey = process.env.REACT_APP_API_KEY;

			const currenciesRawDataList = await Promise.all(
				currenciesArray.map((currency) =>
					axios.get<CurrencyResponse>(`${baseURL}${apiKey}/latest/${currency.code}`),
				),
			);

			const currenciesFiltredList: Currency[] = [];

			currenciesRawDataList.forEach((rawData, i) => {
				const pureData = rawData.data;

				currenciesFiltredList.push({
					code: pureData.base_code,
					name: currenciesArray[i].name,
					toCNY: pureData.conversion_rates.CNY,
					toEUR: pureData.conversion_rates.EUR,
					toRUB: pureData.conversion_rates.RUB,
					toUSD: pureData.conversion_rates.USD,
				});
			});

			return currenciesFiltredList;
		} catch (error) {
			return thunkAPI.rejectWithValue("Неудалось загрузить данные о валютах");
		}
	},
);

export const setUpdateTimestamp = () => (dispatch: AppDispatch) =>
	dispatch(currenciesSlice.actions.setTimestamp(getCurrentTimestamp()));
