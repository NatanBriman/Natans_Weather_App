import { Card } from 'react-bootstrap';
import ForecastTable from './Components/ForecastTable';
import NavBar from './Components/NavBar';

export const App = () => {
  return (
    <>
      <NavBar title="Natan's Weather App" />
      <Card className='mt-2 ms-2 me-2'>
        <ForecastTable city={'London'} daysAmount={7} />
      </Card>
    </>
  );
};
