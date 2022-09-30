import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import { ForecastPage } from './Views/ForecastPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from './Views/ErrorPage';
import CurrentWeatherPage from './Views/CurrentWeatherPage';
import api from './Api/api';

const CITIES = [
  'Haifa',
  'Paris',
  'London',
  'New York',
  'Los Angeles',
  'Moscow',
];

const APP_TITLE = 'התחזית של נתן';
const APP_LOGO = 'https://cdn.weatherapi.com/weather/64x64/day/116.png';
const INITIAL_DAYS_TO_SHOW = 5;
const MAX_DAYS_AMOUNT = 7;

const getForecast = async (city, daysAmount, setForecast) => {
  const {
    data: {
      forecast: { forecastday },
    },
  } = await api.forecastInCityForDays(city, daysAmount);

  setForecast(forecastday);
};

export const App = () => {
  const [city, setCity] = useState(CITIES[0]);
  const [daysAmount, setDaysAmount] = useState(INITIAL_DAYS_TO_SHOW);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    getForecast(city, daysAmount, setForecast);
  }, [city, daysAmount]);

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
        cities={CITIES}
        setCity={setCity}
        title={APP_TITLE}
        logo={APP_LOGO}
        daysAmount={daysAmount}
        setDaysAmount={setDaysAmount}
        MAX_DAYS_AMOUNT={MAX_DAYS_AMOUNT}
      />

      <Routes>
        <Route path='/' element={<Navigate to='/current' />} />
        <Route path='*' element={<Navigate to='/special' />} />

        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};
