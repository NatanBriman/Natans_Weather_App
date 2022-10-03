import NavBar from './Components/NavBar';
import ErrorAlert from './Components/ErrorAlert';
import RouterView from './Router/Router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forecastActions } from './Redux/Store';
import {
  APP_TITLE,
  ERROR_MESSAGE_TITLE,
  getErrorMessageForCity,
} from './Helpers/Constants';

export const App = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);

  const { initializeForecast, setCity, initializeSelectedWeatherDate } =
    forecastActions;

  useEffect(() => {
    dispatch(setCity(city));

    dispatch(initializeForecast(city));
  }, [city]);

  const ERROR_MESSAGE_TEXT = getErrorMessageForCity(city);

  return (
    <>
      <NavBar title={APP_TITLE} />

      <ErrorAlert title={ERROR_MESSAGE_TITLE} text={ERROR_MESSAGE_TEXT} />

      <RouterView />
    </>
  );
};
