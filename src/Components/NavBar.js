import React from 'react';
import { Navbar, Form, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { CloudSunFill } from 'react-bootstrap-icons';

export default function NavBar({ cities, setCity, title }) {
  const handleCitySelect = ({ target: { value } }) => setCity(value);

  return (
    <Navbar bg='primary' className='shadow border-bottom border-secondary'>
      <Container fluid>
        <Row style={{ width: '100%' }}>
          <Col>
            <Form.Select onChange={handleCitySelect}>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </Form.Select>
          </Col>
          <Col className='justify-content-end'>
            <Navbar.Brand className='ms-2' href='/'>
              <strong>
                <CloudSunFill /> {title}
              </strong>
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
