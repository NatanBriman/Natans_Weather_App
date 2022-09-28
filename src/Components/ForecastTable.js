import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import api from '../Api/api';

const sortByDate = (a, b) => new Date(b.date) - new Date(a.date);

export default function ForecastTable({ city, daysAmount }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      const {
        data: {
          forecast: { forecastday: forecastList },
        },
      } = await api.forecastInCityForDays(city, daysAmount);

      setForecast(forecastList);
    };

    getForecast();
  }, [city, daysAmount]);

  return (
    <Container className='mt-2 mb-2'>
      <Row>
        {forecast.sort(sortByDate).map((weather) => (
          <Col key={weather.date}>
            <WeatherCard weather={weather} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
