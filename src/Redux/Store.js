import { configureStore, createSlice } from '@reduxjs/toolkit';

const INITIAL_DAYS_TO_SHOW = 5;

const forecastSlice = createSlice({
  name: 'ForecastSlice',
  initialState: {
    forecast: [],
    selectedWeatherDate: '',
    daysToShow: INITIAL_DAYS_TO_SHOW,
  },
  reducers: {
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    setSelectedWeatherDate: (state, action) => {
      state.selectedWeatherDate = action.payload;
    },
    setDaysToShow: (state, action) => {
      state.daysToShow = action.payload;
    },
  },
});

export const forecastActions = forecastSlice.actions;

const store = configureStore({
  reducer: forecastSlice.reducer,
});

export default store;
