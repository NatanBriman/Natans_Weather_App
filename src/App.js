import { useState } from 'react';
import { Card } from 'react-bootstrap';
import ForecastTable from './Components/ForecastTable';
import NavBar from './Components/NavBar';

const CITIES = [
  'Haifa',
  'Paris',
  'London',
  'New York',
  'Los Angeles',
  'Moscow',
];
const DAYS_TO_SHOW = 7;

export const App = () => {
  const [city, setCity] = useState(CITIES[0]);

  return (
    <>
      <NavBar cities={CITIES} setCity={setCity} title="Natan's Weather App" />
      <Card className='mt-2 ms-2 me-2'>
        <ForecastTable city={city} daysAmount={DAYS_TO_SHOW} />
      </Card>
    </>
  );
};
