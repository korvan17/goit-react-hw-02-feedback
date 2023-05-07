import React from 'react';
import { SectionStyle } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <SectionStyle>
      <h2>{title}</h2>
      {children}
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
