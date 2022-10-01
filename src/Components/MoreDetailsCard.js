import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { isEmpty } from '../Helpers/Helpers';
import DetailCard from './DetailCard';

export default function WeatherCard({
  weather,
  details,
  title,
  subtitle,
  icon,
}) {
  if (isEmpty(weather)) return;

  return (
    <Card
      bg='light'
      style={{ height: '100%', width: '100%' }}
      className='text-center shadow border border-1 border-danger'
    >
      <Card.Header>
        <Card.Title>
          <h3>
            <strong>{title}</strong>
          </h3>
        </Card.Title>

        <Card.Subtitle>
          <h5>{subtitle}</h5>
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
        <Image fluid src={icon} alt='Weather Icon' />
      </Card.Footer>
    </Card>
  );
}
