import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import api from './Api/Api';
import SweetAlert from 'react-bootstrap-sweetalert';
import RouterView from './Router/Router';
import { useDispatch } from 'react-redux';
import { forecastActions } from './Redux/Store';

const APP_TITLE = 'התחזית של נתן';
const APP_LOGO = 'https://cdn.weatherapi.com/weather/64x64/day/116.png';
const MAX_DAYS_AMOUNT = 7;
const MIN_DAYS_AMOUNT = 1;
const INITIAL_CITY = 'Haifa';

const getCities = async () => {
  const {
    data: { data: citiesAndCountries },
  } = await api.getCountriesAndCities();

  const cities = citiesAndCountries.flatMap((cityAndCountry) =>
    cityAndCountry.cities.map((city) => `${city}, ${cityAndCountry.country}`)
  );

  return cities;
};

export const App = () => {
  const dispatch = useDispatch();
  const { setForecast, setSelectedWeatherDate } = forecastActions;

  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(INITIAL_CITY);
  const [isShowAlert, setIsShowAlert] = useState(false);

  const getForecastForCity = async (city) => {
    try {
      const {
        data: {
          forecast: { forecastday },
        },
      } = await api.forecastInCityForDays(city, MAX_DAYS_AMOUNT);

      return forecastday;
    } catch (error) {
      setIsShowAlert(true);
    }
  };

  const initializeCities = async () => {
    const cities = await getCities();

    setCities(cities);
  };

  const initializeForecast = async (city) => {
    const forecastInCity = await getForecastForCity(city);

    if (forecastInCity) {
      dispatch(setForecast(forecastInCity));
      dispatch(setSelectedWeatherDate(forecastInCity[0].date));
    }
  };

  useEffect(() => {
    initializeCities();
  }, []);

  useEffect(() => {
    if (city) initializeForecast(city);
  }, [city]);

  return (
    <>
      <NavBar
        cities={cities}
        setCity={setCity}
        title={APP_TITLE}
        logo={APP_LOGO}
        MAX_DAYS={MAX_DAYS_AMOUNT}
        MIN_DAYS={MIN_DAYS_AMOUNT}
      />

      <SweetAlert
        confirmBtnText='סבבה'
        type='error'
        title='שגיאה בקבלת מזג האוויר'
        onConfirm={() => setIsShowAlert(false)}
        show={isShowAlert}
      >
        <bdi>מצטערים, אין לנו מידע על העיר {city}</bdi>
      </SweetAlert>

      <RouterView />
    </>
  );
};
