import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://api.weatherapi.com/v1/forecast.json?key=4b8819d25fbb49aa85f155957222809&aqi=no&alerts=no',
});

const forecastInCityForDays = (city, days) =>
  axiosInstance.get(`&q=${city}&days=${days}`);

const api = { forecastInCityForDays };

export default api;
