import { Card, Container } from 'react-bootstrap';
import { isEmpty } from '../../Helpers/Helpers';
import DetailRow from './DetailRow';

const InformationCard = ({ details, title, subtitle, icon }) => {
  return (
    <Card
      bg='light'
      style={{ height: '100%' }}
      className='text-center shadow border border-danger'
    >
      <Card.Header>
        <Card.Title>
          <h3>
            <strong>{title}</strong>
          </h3>
        </Card.Title>

        <Card.Subtitle>
          <h5>{subtitle}</h5>
        </Card.Subtitle>
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
