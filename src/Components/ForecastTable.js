import React from 'react';
import WeatherCard from './WeatherCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function ForecastTable({ forecast, setSelectedWeather }) {
  return (
    <Container style={{ height: '100%' }} className='mt-2 mb-2'>
      <Row style={{ height: '100%' }}>
        {forecast.reverse().map((weather) => (
          <Col style={{ height: '100%' }} key={weather.date}>
            <WeatherCard
              setSelectedWeather={setSelectedWeather}
              weather={weather}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
