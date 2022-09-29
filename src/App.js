import { useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ForecastTable from './Components/ForecastTable';
import NavBar from './Components/NavBar';
import MoreDetailsCard from './Components/MoreDetailsCard';

const DAYS_TO_SHOW = 5;

const CITIES = [
  'Haifa',
  'Paris',
  'London',
  'New York',
  'Los Angeles',
  'Moscow',
];

const TEMP_WEATHER = {
  date: new Date(),
  day: {
    avgtemp_c: 29,
    condition: { icon: '//cdn.weatherapi.com/weather/64x64/night/116.png' },
    maxwind_kph: 14.5,
    avghumidity: 71,
    uv: 7,
  },
};

export const App = () => {
  const [city, setCity] = useState(CITIES[0]);

  return (
    <div>
      <NavBar cities={CITIES} setCity={setCity} title="Natan's Weather App" />

      <Container fluid className='mt-2' style={{ height: '89vh' }}>
        <Row style={{ height: '100%' }}>
          <Col sm={4} className='mb-2'>
            <Card bg='light' style={{ height: '100%' }}>
              <Container style={{ height: '100%' }} className='mt-2 mb-2'>
                <MoreDetailsCard weather={TEMP_WEATHER} />
              </Container>
            </Card>
          </Col>

          <Col sm={8} className='mb-2'>
            <Card bg='light' style={{ height: '100%' }}>
              <ForecastTable city={city} daysAmount={DAYS_TO_SHOW} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
