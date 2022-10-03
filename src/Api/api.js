import axios from 'axios';

const COUNTRIES_API_BASE_URL = 'https://countriesnow.space/api/v0.1/countries';

const WEATHER_API_KEY = '4b8819d25fbb49aa85f155957222809';
const WEATHER_API_BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&aqi=no&alerts=no`;

const countriesAndCitiesAPI = axios.create({ baseURL: COUNTRIES_API_BASE_URL });
const weatherAPI = axios.create({ baseURL: WEATHER_API_BASE_URL });

const forecastInCityForDays = (city, days) =>
  weatherAPI.get(`&q=${city}&days=${days}`);

const getCountriesAndCities = () => countriesAndCitiesAPI.get();

const api = { forecastInCityForDays, getCountriesAndCities };

export default api;
