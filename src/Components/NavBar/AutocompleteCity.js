import InputGroup from 'react-bootstrap/InputGroup';
import { Typeahead } from 'react-bootstrap-typeahead';
import { isEmpty } from '../../Helpers/Helpers';
import { useDispatch } from 'react-redux';
import { forecastActions } from '../../Redux/Store';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const getCityFromOption = (option) => option.substr(0, option.indexOf(','));

const AutocompleteCity = ({ cities }) => {
  const dispatch = useDispatch();
  const { setCity } = forecastActions;

  const handleCitySelect = (selectedCities) => {
    if (!isEmpty(selectedCities)) {
      const city = getCityFromOption(selectedCities[0]);

      dispatch(setCity(city));
    }
  };

  return (
    <InputGroup className='shadow rounded'>
      <Typeahead
        id='city-autocomplete'
        options={cities}
        defaultSelected={['Haifa, Israel']}
        onChange={handleCitySelect}
        emptyLabel='אין ערים עם השם הזה'
        highlightOnlyResult={true}
        paginate={true}
        maxResults={7}
        paginationText='?להראות עוד ערים'
      />
      <InputGroup.Text>עיר</InputGroup.Text>
    </InputGroup>
  );
};

export default AutocompleteCity;
