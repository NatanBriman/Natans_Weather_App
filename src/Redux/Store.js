import { configureStore, createSlice } from '@reduxjs/toolkit';
import api from '../Api/Api';
import {
  INITIAL_DAYS_TO_SHOW,
  INITIAL_CITY,
  MAX_DAYS_AMOUNT,
} from '../Helpers/Constants';

const dispatch = (action) => store.dispatch(action);

const dispatchSetForecast = (forecast) =>
  dispatch(forecastActions.setForecast(forecast));

const getForecast = async (city, days) => {
  try {
    const {
      data: {
        forecast: { forecastday },
      },
    } = await api.getForecastInCityForDays(city, days);

    return forecastday;
  } catch (error) {
    dispatch(forecastActions.setIsShowAlert(true));
  }
};

const initializeForecastForCity = async (city, days, setForecast) => {
  const forecast = await getForecast(city, days);

  if (forecast) setForecast(forecast);
};

const forecastSlice = createSlice({
  name: 'ForecastSlice',
  initialState: {
    forecast: [],
    selectedWeatherDate: '',
    days: INITIAL_DAYS_TO_SHOW,
    isShowAlert: false,
    city: INITIAL_CITY,
  },
  reducers: {
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    setSelectedWeatherDate: (state, action) => {
      state.selectedWeatherDate = action.payload;
    },
    initializeSelectedWeatherDate: (state, action) => {
      state.selectedWeatherDate = state.forecast[0].date;
    },
    setDaysToShow: (state, action) => {
      state.days = action.payload;
    },
    initializeForecast: (state, action) => {
      const city = action.payload;

      initializeForecastForCity(city, MAX_DAYS_AMOUNT, dispatchSetForecast);
    },
    setIsShowAlert: (state, action) => {
      state.isShowAlert = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const forecastActions = forecastSlice.actions;

const store = configureStore({
  reducer: forecastSlice.reducer,
});

export default store;
