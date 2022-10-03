import { useEffect, useState } from 'react';
import { Navbar, Col, Row, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import api from '../../Api/Api';
import {
  DEFAULT_PAGE_NAVBAR_COLOR,
  ERROR_PAGE_NAVBAR_COLOR,
  MIN_DAYS_AMOUNT,
  MAX_DAYS_AMOUNT,
  DEFAULT_ROUTE,
  SPECIAL_ROUTE,
  FORECAST_ROUTE,
} from '../../Helpers/Constants';
import { getLinks, formatCitiesAndCountries } from '../../Helpers/Helpers';
import AutocompleteCity from './AutocompleteCity';
import DaysRange from './DaysRange';

const getCitiesAndCountries = async () => {
  const {
    data: { data: citiesAndCountries },
  } = await api.getCountriesAndCities();

  return citiesAndCountries;
};

const initializeCities = async (setCities) => {
  const citiesAndCountries = await getCitiesAndCountries();

  const formattedCitiesAndCountries =
    formatCitiesAndCountries(citiesAndCountries);

  setCities(formattedCitiesAndCountries);
};

const NavBar = ({ title }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    initializeCities(setCities);
  }, []);

  const currentRoute = useLocation().pathname;
  const isShowDaysRange = currentRoute === FORECAST_ROUTE;
  const isErrorPage = currentRoute === SPECIAL_ROUTE;
  const links = getLinks();

  const currentNavBarColor = isErrorPage
    ? ERROR_PAGE_NAVBAR_COLOR
    : DEFAULT_PAGE_NAVBAR_COLOR;

  return (
    <Navbar style={{ backgroundColor: currentNavBarColor }} className='shadow'>
      <Container fluid>
        <Row style={{ width: '100%' }} className='justify-content-between'>
          <Col sm={4}>
            <AutocompleteCity cities={cities} />
          </Col>

          <Col sm={2}>
            {isShowDaysRange && (
              <DaysRange minDays={MIN_DAYS_AMOUNT} maxDays={MAX_DAYS_AMOUNT} />
            )}
          </Col>

          <Col sm={3}>
            <Nav justify variant='tabs'>
              {links.map((link) => (
                <Link key={link.path} to={link.path} className='nav-link'>
                  {link.text}
                </Link>
              ))}
            </Nav>
          </Col>

          <Col className='d-flex justify-content-end' sm={3}>
            <Link to={DEFAULT_ROUTE} className='nav-link'>
              <h3>{title}</h3>
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
