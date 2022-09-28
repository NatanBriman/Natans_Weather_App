import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import api from '../Api/api';

const sortByDateProperty = (a, b) => new Date(b.date) - new Date(a.date);

const getForecast = async (city, daysAmount, setForecast) => {
  const {
    data: {
      forecast: { forecastday },
    },
  } = await api.forecastInCityForDays(city, daysAmount);

  setForecast(forecastday);
};

export default function ForecastTable({ city, daysAmount }) {
  const [forecast, setForecast] = useState([]);
  const sortedForecast = forecast.sort(sortByDateProperty);

  useEffect(() => {
    getForecast(city, daysAmount, setForecast);
  }, [city]);

  return (
    <Container className='mt-2 mb-2'>
      <Row>
        {sortedForecast.map((weather) => (
          <Col key={weather.date}>
            <WeatherCard weather={weather} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
