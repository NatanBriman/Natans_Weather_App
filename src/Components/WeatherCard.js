import Card from 'react-bootstrap/Card';
import { getWeekday, getDailyIcon, getDailyTemp } from '../Helpers/Helpers';

export default function WeatherCard({
  weather,
  selectedWeather,
  setSelectedWeather,
}) {
  const formattedDate = getWeekday(new Date(weather.date)).slice(4);
  const icon = getDailyIcon(weather);
  const temperature = Math.round(getDailyTemp(weather));

  return (
    <Card
      onClick={() => setSelectedWeather(weather)}
      style={{ height: '100%', cursor: 'pointer' }}
      bg='light'
      className={
        'weather-card text-center border' +
        (selectedWeather === weather
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
