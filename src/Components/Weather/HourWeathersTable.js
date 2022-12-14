import { Table } from 'react-bootstrap';
import { getTime, getHourlyDetails } from '../../Helpers/Helpers';

const HourWeathersTable = ({ weather: { hour: hourWeathers } }) => {
  const detailsText = getHourlyDetails(hourWeathers[0]).map(
    (detail) => detail.text
  );

  return (
    <Table striped bordered style={{ direction: 'rtl' }} className='shadow'>
      <thead>
        <tr>
          <td />
          {detailsText.map((detail) => (
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
  );
};

export default HourWeathersTable;
