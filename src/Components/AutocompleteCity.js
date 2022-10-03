import { Typeahead } from 'react-bootstrap-typeahead';
import { InputGroup } from 'react-bootstrap';
import { isEmpty } from '../Helpers/Helpers';
import { useDispatch } from 'react-redux';
import { forecastActions } from '../Redux/Store';

const getCityFromOption = (option) => option.substr(0, option.indexOf(','));

export default function AutocompleteCity({ cities }) {
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
        defaultInputValue='Haifa, Israel'
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
}
