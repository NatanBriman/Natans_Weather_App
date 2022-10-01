import { Card, Table } from 'react-bootstrap';
import { getTime, getHourlyDetails } from '../Helpers/Helpers';

export default function HourWeathersTable({ weather }) {
  const hourWeathers = weather.hour;

  const details = getHourlyDetails(hourWeathers[0]).map(
    (detail) => detail.text
  );

  return (
    <Card className='text-center shadow border mb-2 border-success'>
      <Card.Header>
        <Card.Title>
          <h3>נתונים שעתיים</h3>
        </Card.Title>
      </Card.Header>

      <Card.Body>
        <Table striped bordered style={{ direction: 'rtl' }} className='shadow'>
          <thead>
            <tr>
              <td />
              {details.map((detail) => (
                <td key={detail}>{detail}</td>
              ))}
            </tr>
          </thead>

          <tbody>
            {hourWeathers.map((hourWeather) => (
              <tr key={hourWeather.time}>
                <td>
                  <strong>{getTime(new Date(hourWeather.time))}</strong>
                </td>
                {getHourlyDetails(hourWeather).map((detail) => (
                  <td key={detail.text}>{detail.detail}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
