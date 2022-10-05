import { Card, Container } from 'react-bootstrap';
import { MOON_COLOR } from '../../Helpers/Constants';
import DetailRow from '../Information/DetailRow';

const AstroCard = ({ icon, details, color }) => {
  const BORDER_COLOR = color === MOON_COLOR ? 'primary' : 'warning';

  return (
    <Card
      bg='light'
      className={`text-center shadow border border-${BORDER_COLOR}`}
    >
      <Card.Header>
        <Card.Title>
          <img src={icon} alt='Astro Icon' />
        </Card.Title>
      </Card.Header>

      <Card.Body>
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
    </Card>
  );
};

export default AstroCard;
