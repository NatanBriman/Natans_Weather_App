import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { InputGroup } from 'react-bootstrap';

const getCityFromOption = (option) => option.substr(0, option.indexOf(','));

export default function AutocompleteCity({ cities, setCity }) {
  const handleCitySelect = (selectedCities) => {
    if (selectedCities.length > 0)
      setCity(getCityFromOption(selectedCities[0]));
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
