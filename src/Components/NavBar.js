import React from 'react';
import { Navbar, Form, Col, Row, Container, Nav } from 'react-bootstrap';
import { EmojiSunglasses } from 'react-bootstrap-icons';
import RangeSlider from 'react-bootstrap-range-slider';
import { Link, useLocation } from 'react-router-dom';
import AutocompleteCity from './AutocompleteCity';

export default function NavBar({
  cities,
  setCity,
  title,
  days,
  setDays,
  MAX_DAYS_AMOUNT,
}) {
  const handleDaysChange = ({ target: { value } }) => setDays(value);

  const currentLocation = useLocation().pathname;
  const isShowDaysRange = currentLocation === '/forecast';
  const isErrorPage = currentLocation === '/special';

  return (
    <Navbar
      style={{ backgroundColor: isErrorPage ? '#d9165d' : '#4da6eb' }}
      className='shadow'
    >
      <Container fluid>
        <Row style={{ width: '100%' }} className='justify-content-between'>
          <Col sm={3}>
            <AutocompleteCity cities={cities} setCity={setCity} />
          </Col>

          <Col sm={2}>
            {isShowDaysRange ? (
              <Form>
                <Form.Group as={Row}>
                  <Col sm='9'>
                    <RangeSlider
                      variant='danger'
                      min={1}
                      max={MAX_DAYS_AMOUNT}
                      value={days}
                      onChange={handleDaysChange}
                      step={1}
                    />
                  </Col>
                  <Form.Label column sm='3'>
                    ימים
                  </Form.Label>
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

          <Col className='d-flex align-items-center justify-content-end' sm={3}>
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
