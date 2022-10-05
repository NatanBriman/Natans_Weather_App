import { Modal, Button, Col, Row, Card } from 'react-bootstrap';
import {
  MOON_COLOR,
  MOON_ICON,
  SUN_COLOR,
  SUN_ICON,
} from '../../Helpers/Constants';
import AstroCard from './AstroCard';

const AstroModal = ({ show, closeAction, details }) => {
  const { sun, moon, date } = details;

  return (
    <Modal size='lg' centered show={show} className='d-flex text-center'>
      <Modal.Header>
        <Col>
          <Card.Title>
            <h1>
              <strong>נתונים אסטרונומיים</strong>
            </h1>
          </Card.Title>

          <Card.Subtitle>
            <h5>{date}</h5>
          </Card.Subtitle>
        </Col>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col>
            <AstroCard details={moon} icon={MOON_ICON} color={MOON_COLOR} />
          </Col>

          <Col>
            <AstroCard details={sun} icon={SUN_ICON} color={SUN_COLOR} />
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className='justify-content-center'>
        <Button variant='success' onClick={closeAction}>
          סבבה
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AstroModal;
