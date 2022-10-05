import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { ERROR_IMAGE } from '../Helpers/Constants';

const ErrorPage = () => {
  return (
    <Container fluid className='mt-2'>
      <Row className='align-items-center'>
        <Col sm={4}>
          <Image
            className='shadow border border-danger'
            style={{ height: '87vh' }}
            rounded
            src={ERROR_IMAGE}
          />
        </Col>

        <Col sm={8}>
          <Card className='shadow text-center border-danger'>
            <Card.Body>
              <h1>ERROR 404 - NOT FOUND</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
