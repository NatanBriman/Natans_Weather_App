import React from 'react';
import WeatherCard from './WeatherCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CURRENT_WEATHER = {
  day: {
    avgtemp_c: 27.8,
    condition: {
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
    },
  },
  date: '2022-09-28',
};

export default function ForecastTable({ daysAmount }) {
  return (
    <Container className='mt-2'>
      <Row>
        {Array(daysAmount).fill(
          <Col>
            <WeatherCard weather={CURRENT_WEATHER} />
          </Col>
        )}
      </Row>
    </Container>
  );
}
