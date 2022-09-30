import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import MoreDetailsCard from '../Components/MoreDetailsCard';

const isEmpty = (object) => Object.keys(object).length === 0;

export default function CurrentWeatherPage({ forecast }) {
  if (forecast.length === 0) return;

  const details = (weather) => {
    if (isEmpty(weather)) return;

    return [
      {
        detail: Math.round(weather.day.avgtemp_c) + '°',
        text: 'טמפרטורה ממוצעת',
      },
      {
        detail: <bdi>{Math.round(weather.day.maxwind_kph)} קמ"ש</bdi>,
        text: 'מהירות הרוח',
      },
      { detail: weather.day.avghumidity + '%', text: 'לחות' },
      { detail: weather.day.uv, text: 'אינדקס קרינה' },
    ];
  };

  const currentWeather = forecast[0];

  return (
    <Container fluid className='mt-3' style={{ height: '80vh' }}>
      <Row className='justify-content-center' style={{ height: '100%' }}>
        <Col sm={6} style={{ height: '100%' }}>
          <MoreDetailsCard
            weather={currentWeather}
            details={details(currentWeather)}
          />
        </Col>
      </Row>
    </Container>
  );
}
