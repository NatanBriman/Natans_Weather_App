import ForecastTable from './Components/ForecastTable';
import NavBar from './Components/NavBar';

export const App = () => {
  return (
    <>
      <NavBar title="Natan's Weather App" />
      <ForecastTable daysAmount={4} />
    </>
  );
};
