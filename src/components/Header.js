import React from 'react';

const Header = ({ id, className, outline = 'none', children, ...rest }) => {
  return (<header
    id={id} className={[ outline !== 'none' ? outline : '', className, 'layout-header' ].join(' ').trim()} {...rest}>{children}</header>);
};

export default Header;
