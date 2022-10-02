import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import ForecastPage from './Views/ForecastPage';
import ErrorPage from './Views/ErrorPage';
import CurrentWeatherPage from './Views/CurrentWeatherPage';
import api from './Api/Api';
import SweetAlert from 'react-bootstrap-sweetalert';
import Router from './Router/Router';

const APP_TITLE = 'התחזית של נתן';
const APP_LOGO = 'https://cdn.weatherapi.com/weather/64x64/day/116.png';
const INITIAL_DAYS_TO_SHOW = 5;
const MAX_DAYS_AMOUNT = 7;
const INITIAL_CITY = 'Haifa';

const getCities = async () => {
  const {
    data: { data: citiesAndCountries },
  } = await api.getCountriesAndCities();

  const cities = citiesAndCountries.flatMap((cityAndCountry) =>
    cityAndCountry.cities.map((city) => `${city}, ${cityAndCountry.country}`)
  );

  return cities;
};

export const App = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(INITIAL_CITY);
  const [days, setDays] = useState(INITIAL_DAYS_TO_SHOW);
  const [forecast, setForecast] = useState([]);
  const [isShowAlert, setIsShowAlert] = useState(false);

  const ROUTES = [
    {
      path: '/forecast',
      element: <ForecastPage forecast={forecast} days={days} />,
    },
    {
      path: '/current',
      element: <CurrentWeatherPage forecast={forecast} />,
    },
    {
      path: '/special',
      element: <ErrorPage />,
    },
  ];

  const getForecastForCity = async (city) => {
    try {
      const {
        data: {
          forecast: { forecastday },
        },
      } = await api.forecastInCityForDays(city, MAX_DAYS_AMOUNT);

      return forecastday;
    } catch (error) {
      setIsShowAlert(true);
    }
  };

  const initializeCities = async () => {
    const cities = await getCities();

    setCities(cities);
  };

  const initializeForecast = async (city) => {
    const forecastInCity = await getForecastForCity(city);

    if (forecastInCity) setForecast(forecastInCity);
  };

  useEffect(() => {
    initializeCities();
  });

  useEffect(() => {
    if (city) initializeForecast(city);
  }, [city]);

  return (
    <>
      <NavBar
        cities={cities}
        setCity={setCity}
        title={APP_TITLE}
        logo={APP_LOGO}
        days={days}
        setDays={setDays}
        MAX_DAYS_AMOUNT={MAX_DAYS_AMOUNT}
      />

      <SweetAlert
        confirmBtnText='סבבה'
        type='error'
        title='שגיאה בקבלת מזג האוויר'
        onConfirm={() => setIsShowAlert(false)}
        show={isShowAlert}
      >
        <bdi>מצטערים, אין לנו מידע על העיר {city}</bdi>
      </SweetAlert>

      <Router routes={ROUTES} />
    </>
  );
};
