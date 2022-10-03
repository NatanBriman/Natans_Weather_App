import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getWeekday, getDailyIcon, getDailyTemp } from '../Helpers/Helpers';
import { forecastActions } from '../Redux/Store';

export default function WeatherCard({ weather }) {
  const dispatch = useDispatch();
  const selectedWeatherDate = useSelector((state) => state.selectedWeatherDate);
  const { setSelectedWeatherDate } = forecastActions;

  const formattedDate = getWeekday(new Date(weather.date), false);
  const icon = getDailyIcon(weather);
  const temperature = Math.round(getDailyTemp(weather));

  const handleClick = () => dispatch(setSelectedWeatherDate(weather.date));

  return (
    <Card
      onClick={handleClick}
      style={{ height: '100%', cursor: 'pointer' }}
      bg='light'
      className={
        'clickable-card text-center border' +
        (selectedWeatherDate === weather.date
          ? ' border-1 border-danger'
          : ' border border-primary')
      }
    >
      <Card.Header>
        <h3>
          <strong>{formattedDate}</strong>
        </h3>
      </Card.Header>

      <Card.Body className='d-flex align-items-center justify-content-center'>
        <h1>{temperature}°</h1>
      </Card.Body>

      <Card.Footer>
        <img src={icon} />
      </Card.Footer>
    </Card>
  );
}
