import React from 'react';
import { Card, Container } from 'react-bootstrap';
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

export default function WeatherCard({ weather }) {
  const { weekDay, date } = formatLongDate(new Date(weather.date));

  if (!isEmpty(weather)) {
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
            <DetailCard
              detail={
                <>
                  {weather.day.maxwind_kph} <bdi>קמ"ש</bdi>
                </>
              }
              text={'מהירות הרוח'}
            />
            <DetailCard detail={weather.day.avghumidity + '%'} text={'לחות'} />
            <DetailCard detail={weather.day.uv} text={'אינדקס קרינה'} />
          </Container>
        </Card.Body>

        <Card.Footer>
          <img src={weather.day.condition.icon} alt='Weather Icon' />
        </Card.Footer>
      </Card>
    );
  }
}
