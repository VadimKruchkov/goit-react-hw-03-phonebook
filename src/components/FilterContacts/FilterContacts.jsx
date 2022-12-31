import React from 'react';
import PropTypes from 'prop-types';

import { FilterInput } from './FilterContacts.styled';

const Filter = ({ value, onInput }) => {
  return (
    <FilterInput>
      Find contacts by name
      <input type="text" name="key" value={value} required onChange={onInput} />
    </FilterInput>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};
