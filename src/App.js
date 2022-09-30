import { useState } from 'react';
import NavBar from './Components/NavBar';
import { ForecastPage } from './Views/ForecastPage';

const CITIES = [
  'Haifa',
  'Paris',
  'London',
  'New York',
  'Los Angeles',
  'Moscow',
];

const APP_TITLE = 'התחזית של המגניבים';
const APP_LOGO = 'https://cdn.weatherapi.com/weather/64x64/day/116.png';
const INITIAL_DAYS_TO_SHOW = 5;
const MAX_DAYS_AMOUNT = 7;

export const App = () => {
  const [city, setCity] = useState(CITIES[0]);
  const [daysAmount, setDaysAmount] = useState(INITIAL_DAYS_TO_SHOW);

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
      <ForecastPage city={city} daysAmount={daysAmount} />
    </>
  );
};
