import { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ForecastTable from '../Components/ForecastTable';
import MoreDetailsCard from '../Components/MoreDetailsCard';
import {
  getWeekday,
  getDateString,
  isEmpty,
  getDailyDetails,
  getDailyIcon,
} from '../Helpers/Helpers';
import { forecastActions } from '../Redux/Store';

export default function ForecastPage() {
  const dispatch = useDispatch();
  const forecast = useSelector((state) => state.forecast);

  const days = useSelector((state) => state.daysToShow);
  const selectedWeatherDate = useSelector((state) => state.selectedWeatherDate);

  useEffect(() => {
    if (!isEmpty(forecast)) dispatch(setSelectedWeatherDate(forecast[0].date));
  }, [forecast]);

  if (isEmpty(forecast)) return;
  const { setSelectedWeatherDate } = forecastActions;

  const selectedWeather = forecast.find(
    (weather) => weather.date === selectedWeatherDate
  );

  const formattedForecast = [...forecast.slice(0, days)].reverse();
  const selectedWeatherWeekday = getWeekday(new Date(selectedWeather.date));
  const formattedSelectedWeatherDate = getDateString(
    new Date(selectedWeather.date)
  );
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
                subtitle={formattedSelectedWeatherDate}
                icon={selectedWeatherDailyIcon}
              />
            </Container>
          </Card>
        </Col>

        <Col sm={9} className='mb-2'>
          <Card className='shadow' bg='light' style={{ height: '100%' }}>
            <ForecastTable forecast={formattedForecast} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
