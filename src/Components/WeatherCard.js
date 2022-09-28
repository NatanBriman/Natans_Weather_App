import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const formatDate = (date) =>
  date.toLocaleString('default', { weekday: 'short' });

export default function WeatherCard({ weather }) {
  const formattedDate = formatDate(new Date(weather.date));

  return (
    <Card bg='light' style={{ height: '80vh' }} className='text-center'>
      <Card.Header>
        <h3 style={{ textDecoration: 'underline' }}>
          <strong>{formattedDate}</strong>
        </h3>
      </Card.Header>

      <Card.Body className='d-flex align-items-center justify-content-center'>
        <h1>{weather.day.avgtemp_c}°</h1>
      </Card.Body>

      <Card.Footer>
        <img src={weather.day.condition.icon} />
      </Card.Footer>
    </Card>
  );
}
