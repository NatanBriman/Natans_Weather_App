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

export const App = () => {
  const [city, setCity] = useState(CITIES[0]);

  return (
    <>
      <NavBar
        cities={CITIES}
        setCity={setCity}
        title={APP_TITLE}
        logo={APP_LOGO}
      />
      <ForecastPage city={city} />
    </>
  );
};
