import React from 'react';
import { Navbar, Form, Col, Row, Container } from 'react-bootstrap';
import { EmojiSunglasses } from 'react-bootstrap-icons';
import RangeSlider from 'react-bootstrap-range-slider';

export default function NavBar({
  cities,
  setCity,
  title,
  daysAmount,
  setDaysAmount,
  MAX_DAYS_AMOUNT,
}) {
  const handleCitySelect = ({ target: { value } }) => setCity(value);
  const handleDaysChange = ({ target: { value } }) => setDaysAmount(value);

  return (
    <Navbar bg='primary' className='shadow'>
      <Container fluid>
        <Row style={{ width: '100%' }} className='justify-content-between'>
          <Col sm={2}>
            <Form.Select onChange={handleCitySelect} className='shadow'>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </Form.Select>
          </Col>

          <Col sm={2}>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm='3'>
                  ימים
                </Form.Label>
                <Col sm='9'>
                  <RangeSlider
                    variant='danger'
                    min={1}
                    max={MAX_DAYS_AMOUNT}
                    value={daysAmount}
                    onChange={handleDaysChange}
                    step={1}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Col>

          <Col className='text-end' sm={7}>
            <Navbar.Brand href='/'>
              <strong>
                <EmojiSunglasses /> {title}
              </strong>
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
