import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import DetailCard from './DetailCard';

const formatLongDate = (date) =>
  `${date.toLocaleString('default', {
    weekday: 'long',
  })} ${date.toLocaleDateString()}`;

const isEmpty = (object) => Object.keys(object).length === 0;

export default function WeatherCard({ weather }) {
  const formattedDate = formatLongDate(new Date(weather.date));

  if (!isEmpty(weather)) {
    return (
      <Card
        bg='light'
        style={{ height: '100%' }}
        className='text-center shadow border border-1 border-danger'
      >
        <Card.Header>
          <h3 style={{ textDecoration: 'underline' }}>
            <strong>{formattedDate}</strong>
          </h3>
        </Card.Header>

        <Card.Body className='d-flex align-items-center'>
          <Container>
            <DetailCard
              detail={
                <>
                  <bdi>קמ"ש</bdi> {weather.day.maxwind_kph}
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
