import React from 'react';
import { Navbar, Form, Col, Row, Container, Nav } from 'react-bootstrap';
import { EmojiSunglasses } from 'react-bootstrap-icons';
import RangeSlider from 'react-bootstrap-range-slider';
import { Link, useLocation } from 'react-router-dom';

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

  const isShowDaysRange = useLocation().pathname === '/forecast';
  const isErrorPage = useLocation().pathname === '/special';

  return (
    <Navbar
      style={{ backgroundColor: isErrorPage ? '#d9165d' : '#4da6eb' }}
      className='shadow'
    >
      <Container fluid>
        <Row style={{ width: '100%' }} className='justify-content-between'>
          <Col sm={2}>
            <Form.Select
              onChange={handleCitySelect}
              className='shadow border border-danger'
            >
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </Form.Select>
          </Col>

          <Col sm={2}>
            {isShowDaysRange ? (
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
            ) : (
              <></>
            )}
          </Col>

          <Col sm={4}>
            <Nav justify navbar={true} variant='tabs'>
              <Link to='/current' className='nav-link'>
                כרגע
              </Link>
              <Link to='/forecast' className='nav-link'>
                תחזית
              </Link>
            </Nav>
          </Col>

          <Col className='d-flex align-items-center justify-content-end' sm={4}>
            <Link to='/current' className='nav-link'>
              <h3>
                <EmojiSunglasses /> {title}
              </h3>
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
