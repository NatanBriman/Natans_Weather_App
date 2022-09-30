import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import DetailCard from './DetailCard';

const formatLongDate = (date) => {
  return {
    weekDay: date.toLocaleString('default', {
      weekday: 'long',
    }),
    date: date.toLocaleDateString(),
  };
};

const isEmpty = (object) => Object.keys(object).length === 0;

export default function WeatherCard({ weather, details }) {
  if (isEmpty(weather)) return;

  const { weekDay, date } = formatLongDate(new Date(weather.date));

  return (
    <Card
      bg='light'
      style={{ height: '100%' }}
      className='text-center shadow border border-1 border-danger'
    >
      <Card.Header>
        <Card.Title>
          <h3>
            <strong>{weekDay}</strong>
          </h3>
        </Card.Title>

        <Card.Subtitle>
          <h5>{date}</h5>
        </Card.Subtitle>
      </Card.Header>

      <Card.Body className='d-flex align-items-center'>
        <Container>
          {details.map((detail) => (
            <DetailCard
              key={detail.detail}
              detail={detail.detail}
              text={detail.text}
            />
          ))}
        </Container>
      </Card.Body>

      <Card.Footer>
        <Image fluid src={weather.day.condition.icon} alt='Weather Icon' />
      </Card.Footer>
    </Card>
  );
}
