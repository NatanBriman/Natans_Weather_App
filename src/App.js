import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import { ForecastPage } from './Views/ForecastPage';
import ErrorPage from './Views/ErrorPage';
import CurrentWeatherPage from './Views/CurrentWeatherPage';
import api from './Api/Api';
import SweetAlert from 'react-bootstrap-sweetalert';
import Router from './Router/Router';
import { isEmpty } from './Helpers/Helpers';

const APP_TITLE = 'התחזית של נתן';
const APP_LOGO = 'https://cdn.weatherapi.com/weather/64x64/day/116.png';
const INITIAL_DAYS_TO_SHOW = 5;
const MAX_DAYS_AMOUNT = 7;

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
  const [city, setCity] = useState('');
  const [days, setDays] = useState(INITIAL_DAYS_TO_SHOW);
  const [forecast, setForecast] = useState([]);
  const [isShowAlert, setIsShowAlert] = useState(false);

  const getForecastForCityInDays = async (city, days, setForecast) => {
    try {
      const {
        data: {
          forecast: { forecastday },
        },
      } = await api.forecastInCityForDays(city, days);

      setForecast(forecastday);
    } catch (error) {
      setIsShowAlert(!isShowAlert);
    }
  };

  const initializeCities = async () => {
    const cities = await getCities();

    setCities(cities);
  };

  useEffect(() => {
    if (city) getForecastForCityInDays(city, days, setForecast);
  }, [city, days]);

  useEffect(() => {
    initializeCities();
  }, []);

  useEffect(() => {
    if (!isEmpty(cities)) setCity('Haifa');
  }, [cities]);

  const ROUTES = [
    {
      path: '/forecast',
      element: <ForecastPage forecast={forecast} />,
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
        onConfirm={() => {
          setIsShowAlert(!isShowAlert);
        }}
        show={isShowAlert}
      >
        <bdi>מצטערים, אין לנו מידע על העיר {city}</bdi>
      </SweetAlert>

      <Router routes={ROUTES} />
    </>
  );
};
