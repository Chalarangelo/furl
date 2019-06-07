import React from 'react';

const Header = ({ className, outline = 'none', children, ...rest }) => {
  return (<header
    className={[ outline !== 'none' ? outline : '', className, 'layout-header' ].join(' ').trim()} {...rest}>{children}</header>);
};

export default Header;
