import React from 'react';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const formatDate = (date) =>
  date.toLocaleString('default', { weekday: 'long' });

export default function WeatherCard({ weather }) {
  return (
    <Card style={{ height: '80vh' }} className='text-center'>
      <Col>
        <h3>
          <strong style={{ textDecoration: 'underline' }}>
            {formatDate(new Date(weather.date))}
          </strong>
        </h3>
      </Col>

      <Col>
        <h1>{weather.day.avgtemp_c}°</h1>
      </Col>

      <hr />

      <Col border='primary'>
        <img src={weather.day.condition.icon} />
      </Col>
    </Card>
  );
}
