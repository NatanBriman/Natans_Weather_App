import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const formatDate = (date) =>
  `${date.toLocaleString('default', {
    weekday: 'long',
  })} ${date.toLocaleDateString()}`;

export default function WeatherCard({ weather }) {
  const formattedDate = formatDate(new Date(weather.date));

  return (
    <Card
      bg='light'
      style={{ height: '100%', width: '100%' }}
      className='text-center shadow'
    >
      <Card.Header>
        <h3 style={{ textDecoration: 'underline' }}>
          <strong>{formattedDate}</strong>
        </h3>
      </Card.Header>

      <Card.Body className='d-flex align-items-center'>
        <Container fluid>
          <Card className='shadow mb-2'>
            <Container fluid>
              <Row className='text-center'>
                <Col>
                  <Card.Body>
                    <bdi>קמ"ש</bdi> {weather.day.maxwind_kph}
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Body>
                    <strong>מהירות הרוח</strong>
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
          <Card className='shadow mb-2'>
            <Container fluid>
              <Row>
                <Col>
                  <Card.Body>{weather.day.avghumidity}%</Card.Body>
                </Col>
                <Col>
                  <Card.Body>
                    <strong>לחות</strong>
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
          <Card className='shadow mb-2'>
            <Container fluid>
              <Row>
                <Col>
                  <Card.Body>{weather.day.uv}</Card.Body>
                </Col>
                <Col>
                  <Card.Body>
                    <strong>אינקדס קרינה</strong>
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        </Container>
      </Card.Body>

      <Card.Footer>
        <img src={weather.day.condition.icon} alt='Weather Icon' />
      </Card.Footer>
    </Card>
  );
}
