import React from 'react';
import { Navbar, Form, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { EmojiSunglasses } from 'react-bootstrap-icons';

export default function NavBar({ cities, setCity, title, logo }) {
  const handleCitySelect = ({ target: { value } }) => setCity(value);

  return (
    <Navbar bg='primary' className='shadow'>
      <Col sm={2}>
        <Form.Select onChange={handleCitySelect} className='ms-2 shadow'>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </Form.Select>
      </Col>

      <Col className='text-end' sm={10}>
        <Navbar.Brand href='/'>
          <strong>
            <EmojiSunglasses /> {title}
          </strong>
        </Navbar.Brand>
      </Col>
    </Navbar>
  );
}
