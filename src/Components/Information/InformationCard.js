import { useState } from 'react';
import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import { isEmpty } from '../../Helpers/Helpers';
import { ECLIPSE_ICON } from '../../Helpers/Constants';
import DetailRow from './DetailRow';
import AstroModal from '../Astro/AstroModal';

const InformationCard = ({ details, title, subtitle, icon, astroDetails }) => {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => setIsShow((previousIsShow) => !previousIsShow);

  return (
    <Card
      bg='light'
      style={{ height: '100%' }}
      className='text-center shadow border border-danger'
    >
      <AstroModal
        details={astroDetails}
        show={isShow}
        closeAction={toggleShow}
      />

      <Card.Header>
        <Row>
          <Col sm={4} className='text-start d-flex align-items-center'>
            <Image
              style={{ cursor: 'pointer' }}
              rounded
              className='clickable border border-warning'
              src={ECLIPSE_ICON}
              alt='Astro Details Icon'
              onClick={toggleShow}
            />
          </Col>

          <Col sm={8}>
            <Card.Title>
              <h3>
                <strong>{title}</strong>
              </h3>
            </Card.Title>

            <Card.Subtitle>
              <h5>{subtitle}</h5>
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body className='d-flex align-items-center'>
        <Container>
          {details.map((detail) => (
            <DetailRow
              key={detail.detail}
              detail={detail.detail}
              text={detail.text}
            />
          ))}
        </Container>
      </Card.Body>

      {!isEmpty(icon) && (
        <Card.Footer>
          <img src={icon} alt='Weather Condition Icon' />
        </Card.Footer>
      )}
    </Card>
  );
};

export default InformationCard;
