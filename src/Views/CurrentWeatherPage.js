import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import HourWeathersTable from '../Components/HourWeathersTable';
import MoreDetailsCard from '../Components/MoreDetailsCard';
import {
  getWeekday,
  getDateString,
  isEmpty,
  getDailyDetails,
  getDailyIcon,
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
      <Row>
        <Col>
          <HourWeathersTable weather={currentWeather} />
        </Col>
        <Col sm={4} style={{ height: '100%' }}>
          <Card className='shadow border border-primary mb-4'>
            <Row className='align-items-center'>
              <Col sm={8}>
                <Image src={currentWeatherIcon} />
              </Col>
              <Col sm={4}>
                <h1>{currentWeather.day.avgtemp_c}°</h1>
              </Col>
            </Row>
          </Card>
          <MoreDetailsCard
            weather={currentWeather}
            details={currentWeatherDailyDetails}
            title={currentWeatherWeekday}
            subtitle={currentWeatherDate}
          />
        </Col>
      </Row>
    </Container>
  );
}
