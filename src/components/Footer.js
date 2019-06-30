import React from 'react';
import { omitProps, combineStyles } from '../utilities/utils';

const Footer = ({ children, ...rest }) => {
  return (
    <footer
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {children}
    </footer>
  );
};

export default Footer;
