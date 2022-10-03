import { useEffect } from 'react';
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
  findWeatherByDate,
  formatForecastByDays,
} from '../Helpers/Helpers';
import { forecastActions } from '../Redux/Store';

export default function ForecastPage() {
  const dispatch = useDispatch();
  const { forecast, days, selectedWeatherDate } = useSelector((state) => state);
  const { setSelectedWeatherDate } = forecastActions;

  const initializeSelectedWeather = () => {
    if (!isEmpty(forecast)) dispatch(setSelectedWeatherDate(forecast[0].date));
  };

  useEffect(initializeSelectedWeather, [forecast]);

  if (isEmpty(forecast) || isEmpty(selectedWeatherDate)) return;

  const formattedForecast = formatForecastByDays(forecast, days);

  const selectedWeather = findWeatherByDate(forecast, selectedWeatherDate);
  const selectedWeatherWeekday = getWeekday(new Date(selectedWeather.date));
  const formattedSelectedWeatherDate = getDateString(
    new Date(selectedWeather.date)
  );
  const selectedWeatherDetails = getDailyDetails(selectedWeather);
  const selectedWeatherIcon = getDailyIcon(selectedWeather);

  return (
    <Container fluid className='mt-2'>
      <Row>
        <Col sm={3} className='mb-2'>
          <Card className='shadow' bg='light' style={{ height: '100%' }}>
            <Container style={{ height: '100%' }} className='mt-2 mb-2'>
              <MoreDetailsCard
                weather={selectedWeather}
                details={selectedWeatherDetails}
                title={selectedWeatherWeekday}
                subtitle={formattedSelectedWeatherDate}
                icon={selectedWeatherIcon}
              />
            </Container>
          </Card>
        </Col>

        <Col sm={9} className='mb-2'>
          <Card className='shadow' bg='light'>
            <ForecastTable forecast={formattedForecast} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
