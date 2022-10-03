import { useEffect, useState } from 'react';
import { Navbar, Form, Col, Row, Container, Nav } from 'react-bootstrap';
import { EmojiSunglasses } from 'react-bootstrap-icons';
import RangeSlider from 'react-bootstrap-range-slider';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import api from '../Api/Api';
import {
  DEFAULT_PAGE_NAVBAR_COLOR,
  ERROR_PAGE_NAVBAR_COLOR,
  MIN_DAYS_AMOUNT,
  MAX_DAYS_AMOUNT,
} from '../Helpers/Constants';
import { forecastActions } from '../Redux/Store';
import AutocompleteCity from './AutocompleteCity';

const getCities = async () => {
  const {
    data: { data: citiesAndCountries },
  } = await api.getCountriesAndCities();

  const cities = citiesAndCountries.flatMap((cityAndCountry) =>
    cityAndCountry.cities.map((city) => `${city}, ${cityAndCountry.country}`)
  );

  return cities;
};

export default function NavBar({ title }) {
  const dispatch = useDispatch();
  const days = useSelector((state) => state.daysToShow);
  const { setDaysToShow } = forecastActions;

  const [cities, setCities] = useState([]);

  const initializeCities = async () => {
    const cities = await getCities();

    setCities(cities);
  };

  useEffect(() => {
    initializeCities();
  }, []);

  const handleDaysChange = ({ target: { value } }) =>
    dispatch(setDaysToShow(value));

  const currentPath = useLocation().pathname;
  const isShowDaysRange = currentPath === '/forecast';
  const isErrorPage = currentPath === '/special';

  return (
    <Navbar
      style={{
        backgroundColor: isErrorPage
          ? ERROR_PAGE_NAVBAR_COLOR
          : DEFAULT_PAGE_NAVBAR_COLOR,
      }}
      className='shadow'
    >
      <Container fluid>
        <Row style={{ width: '100%' }} className='justify-content-between'>
          <Col sm={4}>
            <AutocompleteCity cities={cities} />
          </Col>

          <Col sm={2}>
            {isShowDaysRange && (
              <Form>
                <Form.Group as={Row}>
                  <Col sm='9'>
                    <RangeSlider
                      variant='danger'
                      min={MIN_DAYS_AMOUNT}
                      max={MAX_DAYS_AMOUNT}
                      value={days}
                      onChange={handleDaysChange}
                      step={1}
                    />
                  </Col>
                  <Form.Label column sm='3'>
                    ימים
                  </Form.Label>
                </Form.Group>
              </Form>
            )}
          </Col>

          <Col sm={3}>
            <Nav justify navbar={true} variant='tabs'>
              <Link to='/current' className='nav-link'>
                כרגע
              </Link>
              <Link to='/forecast' className='nav-link'>
                תחזית
              </Link>
            </Nav>
          </Col>

          <Col className='d-flex align-items-center justify-content-end' sm={3}>
            <Link to='/current' className='nav-link'>
              <h3>
                <EmojiSunglasses /> {title}
              </h3>
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
