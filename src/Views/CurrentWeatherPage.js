import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import HourWeathersTable from '../Components/HourWeathersTable';
import MoreDetailsCard from '../Components/MoreDetailsCard';
import {
  getWeekday,
  getDateString,
  isEmpty,
  getDailyDetails,
  getDailyIcon,
  getDailyTemp,
} from '../Helpers/Helpers';

export default function CurrentWeatherPage() {
  const currentWeather = useSelector((state) => state.forecast[0]);

  if (isEmpty(currentWeather)) return;

  const currentWeatherDailyDetails = getDailyDetails(currentWeather);
  const currentWeatherWeekday = getWeekday(new Date(currentWeather.date));
  const currentWeatherDate = getDateString(new Date(currentWeather.date));
  const currentWeatherIcon = getDailyIcon(currentWeather);
  const currentWeatherTemperature = Math.round(getDailyTemp(currentWeather));

  return (
    <Container className='mt-3'>
      <Row>
        <Col>
          <Card
            bg='light'
            className='text-center shadow border mb-2 border-success'
          >
            <Card.Header>
              <Card.Title>
                <h3>נתונים שעתיים</h3>
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <HourWeathersTable weather={currentWeather} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} style={{ height: '100%' }}>
          <Card className='shadow border border-primary mb-4'>
            <Row className='align-items-center'>
              <Col sm={8}>
                <Image src={currentWeatherIcon} />
              </Col>
              <Col sm={4} className='text-end'>
                <h1>{currentWeatherTemperature}°</h1>
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
