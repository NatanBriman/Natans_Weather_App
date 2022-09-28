import NavBar from './Components/NavBar';
import WeatherCard from './Components/WeatherCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CURRENT_WEATHER = {
  day: {
    avgtemp_c: 27.8,
    condition: {
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
    },
  },
  date: '2022-09-28',
};

export const App = () => {
  return (
    <>
      <NavBar title="Natan's Weather App" />
      <Container className='mt-2'>
        <Row>
          <Col>
            <WeatherCard weather={CURRENT_WEATHER} />
          </Col>
          <Col>
            <WeatherCard weather={CURRENT_WEATHER} />
          </Col>
          <Col>
            <WeatherCard weather={CURRENT_WEATHER} />
          </Col>
          <Col>
            <WeatherCard weather={CURRENT_WEATHER} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
