import WeatherCard from './WeatherCard';
import { Col, Container, Row } from 'react-bootstrap';

export default function ForecastTable({
  forecast,
  selectedWeather,
  setSelectedWeather,
}) {
  return (
    <Container fluid style={{ height: '83vh' }} className='mt-2 mb-2'>
      <Row style={{ height: '100%' }}>
        {forecast.map((weather) => (
          <Col style={{ height: '100%' }} key={weather.date}>
            <WeatherCard
              setSelectedWeather={setSelectedWeather}
              weather={weather}
              selectedWeather={selectedWeather}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
