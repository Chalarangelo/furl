import React from 'react';
import { combineClassNames } from '../utilities/utils';

const Header = ({ className, outline = 'none', children, ...rest }) => {
  return (<header
    className={combineClassNames([ outline !== 'none' ? outline : '', className, 'layout-header' ])} {...rest}>{children}</header>);
};

export default Header;
