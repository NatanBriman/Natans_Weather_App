import { Card, Col, Container, Row } from 'react-bootstrap';

const DetailRow = ({ detail, text, color = '' }) => {
  return (
    <Card style={{ background: color }} className='shadow mb-2 border-success'>
      <Container>
        <Row className='text-center align-items-center'>
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
};

export default DetailRow;
