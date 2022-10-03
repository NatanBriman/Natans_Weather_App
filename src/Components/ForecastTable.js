import WeatherCard from './WeatherCard';
import { Col, Container, Row } from 'react-bootstrap';

export default function ForecastTable({ forecast }) {
  return (
    <Container fluid style={{ height: '83vh' }} className='mt-2 mb-2'>
      <Row style={{ height: '100%' }}>
        {forecast.map((weather) => (
          <Col key={weather.date}>
            <WeatherCard weather={weather} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
