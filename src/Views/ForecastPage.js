import { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ForecastTable from '../Components/ForecastTable';
import MoreDetailsCard from '../Components/MoreDetailsCard';
import {
  getWeekday,
  getDateString,
  isEmpty,
  getDailyDetails,
  getDailyIcon,
} from '../Helpers/Helpers';

export default function ForecastPage({ forecast, days }) {
  const [selectedWeather, setSelectedWeather] = useState({});

  useEffect(() => {
    if (!isEmpty(forecast)) setSelectedWeather(forecast[0]);
  }, [forecast]);

  const formattedForecast = [...forecast.slice(0, days)].reverse();
  const selectedWeatherWeekday = getWeekday(new Date(selectedWeather.date));
  const selectedWeatherDate = getDateString(new Date(selectedWeather.date));
  const selectedWeatherDailyDetails = getDailyDetails(selectedWeather);
  const selectedWeatherDailyIcon = getDailyIcon(selectedWeather);

  return (
    <Container fluid className='mt-2' style={{ height: '100%' }}>
      <Row style={{ height: '100%' }}>
        <Col sm={3} className='mb-2'>
          <Card className='shadow' bg='light' style={{ height: '100%' }}>
            <Container style={{ height: '100%' }} className='mt-2 mb-2'>
              <MoreDetailsCard
                weather={selectedWeather}
                details={selectedWeatherDailyDetails}
                title={selectedWeatherWeekday}
                subtitle={selectedWeatherDate}
                icon={selectedWeatherDailyIcon}
              />
            </Container>
          </Card>
        </Col>

        <Col sm={9} className='mb-2'>
          <Card className='shadow' bg='light' style={{ height: '100%' }}>
            <ForecastTable
              forecast={formattedForecast}
              selectedWeather={selectedWeather}
              setSelectedWeather={setSelectedWeather}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
