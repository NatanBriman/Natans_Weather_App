import NavBar from './Components/NavBar';
import ErrorAlert from './Components/ErrorAlert';
import RouterView from './Router/Router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forecastActions } from './Redux/Store';
import { APP_TITLE } from './Helpers/Constants';
import { isEmpty } from './Helpers/Helpers';

export const App = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);
  const forecast = useSelector((state) => state.forecast);
  const { initializeForecast, setCity, initializeSelectedWeatherDate } =
    forecastActions;

  useEffect(() => {
    dispatch(initializeForecast(city));
  }, [city]);

  useEffect(() => {
    if (!isEmpty(forecast)) {
      dispatch(setCity(city));

      dispatch(initializeSelectedWeatherDate());
    }
  }, [forecast]);

  const ERROR_MESSAGE_TITLE = 'שגיאה בקבלת מזג האוויר';
  const ERROR_MESSAGE_TEXT = <bdi>מצטערים, אין לנו מידע על העיר {city}</bdi>;

  return (
    <>
      <NavBar title={APP_TITLE} />

      <ErrorAlert title={ERROR_MESSAGE_TITLE} text={ERROR_MESSAGE_TEXT} />

      <RouterView />
    </>
  );
};
