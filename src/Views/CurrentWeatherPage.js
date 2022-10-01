import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HourWeathersTable from '../Components/HourWeathersTable';
import MoreDetailsCard from '../Components/MoreDetailsCard';
import {
  getWeekday,
  getDateString,
  isEmpty,
  getTime,
  getDailyDetails,
  getDailyIcon,
  getHourlyDetails,
  getHourlyIcon,
} from '../Helpers/Helpers';

export default function CurrentWeatherPage({ forecast }) {
  if (isEmpty(forecast)) return;

  const currentWeather = forecast[0];
  const currentWeatherDailyDetails = getDailyDetails(currentWeather);
  const currentWeatherWeekday = getWeekday(new Date(currentWeather.date));
  const currentWeatherDate = getDateString(new Date(currentWeather.date));
  const currentWeatherIcon = getDailyIcon(currentWeather);

  return (
    <Container className='mt-3'>
      <Row className='justify-content-center'>
        <Col sm={8}>
          <MoreDetailsCard
            weather={currentWeather}
            details={currentWeatherDailyDetails}
            title={currentWeatherWeekday}
            subtitle={currentWeatherDate}
            icon={currentWeatherIcon}
          />
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col>
          <HourWeathersTable weather={currentWeather} />
        </Col>
      </Row>
    </Container>
  );
}
