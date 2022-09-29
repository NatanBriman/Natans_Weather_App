import { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ForecastTable from '../Components/ForecastTable';
import MoreDetailsCard from '../Components/MoreDetailsCard';
import api from '../Api/api';

const DAYS_TO_SHOW = 5;

const getForecast = async (city, daysAmount, setForecast) => {
  const {
    data: {
      forecast: { forecastday },
    },
  } = await api.forecastInCityForDays(city, daysAmount);

  setForecast(forecastday);
};

export const ForecastPage = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState({});

  useEffect(() => {
    getForecast(city, DAYS_TO_SHOW, setForecast);
  }, [city]);

  useEffect(() => {
    if (forecast.length > 0) setSelectedWeather(forecast[0]);
  }, [forecast]);

  return (
    <Container fluid className='mt-2' style={{ height: '89vh' }}>
      <Row style={{ height: '100%' }}>
        <Col sm={4} className='mb-2'>
          <Card bg='light' style={{ height: '100%' }}>
            <Container style={{ height: '100%' }} className='mt-2 mb-2'>
              <MoreDetailsCard weather={selectedWeather} />
            </Container>
          </Card>
        </Col>

        <Col sm={8} className='mb-2'>
          <Card bg='light' style={{ height: '100%' }}>
            <ForecastTable
              forecast={forecast}
              selectedWeather={selectedWeather}
              setSelectedWeather={setSelectedWeather}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
