import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { CloudSunFill } from 'react-bootstrap-icons';

export default function NavBar({ title }) {
  return (
    <Navbar bg='primary' expand='lg' sticky='top'>
      <Navbar.Brand className='ms-2' href='/'>
        <strong style={{ fontFamily: 'Helvetica' }}>
          {title} <CloudSunFill />
        </strong>
      </Navbar.Brand>
    </Navbar>
  );
}
