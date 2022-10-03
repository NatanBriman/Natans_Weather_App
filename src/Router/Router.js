import { Navigate, Route, Routes } from 'react-router-dom';
import {
  DEFAULT_ROUTE,
  FORECAST_ROUTE,
  SPECIAL_ROUTE,
} from '../Helpers/Constants';
import ForecastPage from '../Views/ForecastPage';
import ErrorPage from '../Views/ErrorPage';
import CurrentWeatherPage from '../Views/CurrentWeatherPage';

export const ROUTES = [
  {
    path: DEFAULT_ROUTE,
    element: <CurrentWeatherPage />,
    text: 'כרגע',
  },
  {
    path: FORECAST_ROUTE,
    element: <ForecastPage />,
    text: 'תחזית',
  },
  {
    path: SPECIAL_ROUTE,
    element: <ErrorPage />,
  },
];

const RouterView = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={DEFAULT_ROUTE} />} />
      <Route path='*' element={<Navigate to={SPECIAL_ROUTE} />} />

      {ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RouterView;
