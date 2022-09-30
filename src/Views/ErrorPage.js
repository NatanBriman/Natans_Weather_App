import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

export default function ErrorPage() {
  return (
    <Container fluid className='mt-2'>
      <Row className='align-items-center'>
        <Col sm={4}>
          <Image
            className='shadow border border-danger'
            style={{ height: '87vh' }}
            rounded
            src='/Assets/404.jpg'
          />
        </Col>

        <Col sm={8}>
          <Card className='shadow text-center border border-danger'>
            <Card.Body>
              <h1>ERROR 404 - NOT FOUND</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
