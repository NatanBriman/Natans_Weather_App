import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  getWeekday,
  getDateString,
  isEmpty,
  getDailyDetails,
  getDailyIcon,
  getDailyTemp,
} from '../Helpers/Helpers';
import HourWeathersTable from '../Components/Weather/HourWeathersTable';
import InformationCard from '../Components/Information/InformationCard';

const CurrentWeatherPage = () => {
  const currentWeather = useSelector((state) => state.forecast[0]);

  if (isEmpty(currentWeather)) return;

  const dailyDetails = getDailyDetails(currentWeather);
  const weekday = getWeekday(new Date(currentWeather.date), true);
  const date = getDateString(new Date(currentWeather.date));
  const icon = getDailyIcon(currentWeather);
  const temperature = getDailyTemp(currentWeather);

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
                <img src={icon} alt='Weather Condition Icon' />
              </Col>
              <Col sm={4} className='text-end'>
                <h1>{temperature}°</h1>
              </Col>
            </Row>
          </Card>
          <InformationCard
            details={dailyDetails}
            title={weekday}
            subtitle={date}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeatherPage;
