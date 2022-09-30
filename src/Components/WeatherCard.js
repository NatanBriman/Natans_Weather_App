import React from 'react';
import { Card } from 'react-bootstrap';

const formatDate = (date) =>
  date.toLocaleString('default', { weekday: 'long' }).slice(4);

export default function WeatherCard({
  weather,
  selectedWeather,
  setSelectedWeather,
}) {
  const formattedDate = formatDate(new Date(weather.date));

  return (
    <Card
      onClick={() => setSelectedWeather(weather)}
      style={{ height: '100%', cursor: 'pointer' }}
      bg='light'
      className={
        'weather-card text-center border' +
        (selectedWeather === weather
          ? ' border-1 border-danger'
          : ' border border-primary')
      }
    >
      <Card.Header>
        <h3 style={{ textDecoration: 'underline' }}>
          <strong>{formattedDate}</strong>
        </h3>
      </Card.Header>

      <Card.Body className='d-flex align-items-center justify-content-center'>
        <h1>{Math.round(weather.day.avgtemp_c)}°</h1>
      </Card.Body>

      <Card.Footer>
        <img src={weather.day.condition.icon} alt='Weather Icon' />
      </Card.Footer>
    </Card>
  );
}
