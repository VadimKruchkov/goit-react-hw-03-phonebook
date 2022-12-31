import React from 'react';
import PropTypes from 'prop-types';
import { SectionItem, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionItem title={title}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionItem>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
