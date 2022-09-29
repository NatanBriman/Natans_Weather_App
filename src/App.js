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

export const App = () => {
  const [city, setCity] = useState(CITIES[0]);

  return (
    <div>
      <NavBar cities={CITIES} setCity={setCity} title="Natan's Weather App" />
      <ForecastPage city={city} />
    </div>
  );
};
