import RangeSlider from 'react-bootstrap-range-slider';
import { Form, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { forecastActions } from '../../Redux/Store';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const DaysRange = ({ minDays, maxDays }) => {
  const dispatch = useDispatch();
  const days = useSelector((state) => state.days);
  const { setDaysToShow } = forecastActions;

  const handleDaysChange = ({ target: { value } }) =>
    dispatch(setDaysToShow(value));

  return (
    <Form.Group as={Row}>
      <Col sm='9'>
        <RangeSlider
          variant='danger'
          min={minDays}
          max={maxDays}
          value={days}
          onChange={handleDaysChange}
          step={1}
        />
      </Col>
      <Form.Label column sm='3'>
        ימים
      </Form.Label>
    </Form.Group>
  );
};

export default DaysRange;
