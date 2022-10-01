import axios from 'axios';

const countriesAndCitiesAPI = axios.create({
  baseURL: 'https://countriesnow.space/api/v0.1/countries',
});

const weatherAPI = axios.create({
  baseURL:
    'https://api.weatherapi.com/v1/forecast.json?key=4b8819d25fbb49aa85f155957222809&aqi=no&alerts=no',
});

const forecastInCityForDays = (city, days) =>
  weatherAPI.get(`&q=${city}&days=${days}`);

const getCountriesAndCities = () => countriesAndCitiesAPI.get();

const api = { forecastInCityForDays, getCountriesAndCities };

export default api;
