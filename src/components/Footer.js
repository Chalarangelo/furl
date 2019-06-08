import React from 'react';
import { omitProps, combineStyles } from '../utilities/utils';

const Footer = ({ className, children, ...rest }) => {
  return (
    <footer
      className={className}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {children}
    </footer>
  );
};

export default Footer;
