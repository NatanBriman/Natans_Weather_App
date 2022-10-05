import { Col, Container, Row } from 'react-bootstrap';
import WeatherCard from './WeatherCard';

const ForecastTable = ({ forecast }) => {
  return (
    <Container fluid style={{ height: '83vh' }} className='my-2'>
      <Row style={{ height: '100%' }}>
        {forecast.map((weather) => (
          <Col key={weather.date}>
            <WeatherCard weather={weather} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ForecastTable;
