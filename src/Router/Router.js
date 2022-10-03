import { Navigate, Route, Routes } from 'react-router-dom';
import ForecastPage from '../Views/ForecastPage';
import ErrorPage from '../Views/ErrorPage';
import CurrentWeatherPage from '../Views/CurrentWeatherPage';

const ROUTES = [
  {
    path: '/forecast',
    element: <ForecastPage />,
  },
  {
    path: '/current',
    element: <CurrentWeatherPage />,
  },
  {
    path: '/special',
    element: <ErrorPage />,
  },
];

export default function RouterView() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/current' />} />
      <Route path='*' element={<Navigate to='/special' />} />

      {ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
