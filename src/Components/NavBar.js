import React from 'react';
import { Navbar, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { CloudSunFill } from 'react-bootstrap-icons';

export default function NavBar({ cities, setCity, title }) {
  const handleCitySelect = ({ target: { value } }) => setCity(value);

  return (
    <Navbar bg='primary'>
      <Row>
        <Col>
          <Navbar.Brand className='ms-2' href='/'>
            <strong style={{ fontFamily: 'Helvetica' }}>
              {title} <CloudSunFill />
            </strong>
          </Navbar.Brand>
        </Col>

        <Col>
          <Form.Select onChange={handleCitySelect}>
            {cities.map((city) => (
              <option>{city}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Navbar>
  );
}
