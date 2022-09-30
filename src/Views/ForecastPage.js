import { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ForecastTable from '../Components/ForecastTable';
import MoreDetailsCard from '../Components/MoreDetailsCard';

const isEmpty = (object) => Object.keys(object).length === 0;

export const ForecastPage = ({ city, daysAmount, forecast, setForecast }) => {
  const [selectedWeather, setSelectedWeather] = useState({});

  useEffect(() => {
    if (forecast.length > 0) setSelectedWeather(forecast[0]);
  }, [forecast]);

  const moreDetails = (weather) => {
    if (isEmpty(weather)) return;

    return [
      {
        detail: <bdi>{Math.round(weather.day.maxwind_kph)} קמ"ש</bdi>,
        text: 'מהירות הרוח',
      },
      { detail: weather.day.avghumidity + '%', text: 'לחות' },
      { detail: weather.day.uv, text: 'אינדקס קרינה' },
    ];
  };

  return (
    <Container fluid className='mt-2' style={{ height: '87vh' }}>
      <Row style={{ height: '100%' }}>
        <Col sm={3} className='mb-2'>
          <Card className='shadow' bg='light' style={{ height: '100%' }}>
            <Container style={{ height: '100%' }} className='mt-2 mb-2'>
              <MoreDetailsCard
                weather={selectedWeather}
                details={moreDetails(selectedWeather)}
              />
            </Container>
          </Card>
        </Col>

        <Col sm={9} className='mb-2'>
          <Card className='shadow' bg='light' style={{ height: '100%' }}>
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
