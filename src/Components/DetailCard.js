import { Card, Col, Container, Row } from 'react-bootstrap';

export default function DetailCard({ detail, text }) {
  return (
    <Card className='shadow mb-2 border-success'>
      <Container>
        <Row className='text-center justify-content-center align-items-center'>
          <Col>
            <Card.Body>{detail}</Card.Body>
          </Col>
          <Col>
            <Card.Body>
              <strong>{text}</strong>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
