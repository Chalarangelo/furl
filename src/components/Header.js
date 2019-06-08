import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Header = ({ className, outline = 'none', children, ...rest }) => {
  return (
    <header
      className={combineClassNames([ outline !== 'none' ? outline : '', className, 'layout-header' ])}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {children}
    </header>
  );
};

export default Header;
