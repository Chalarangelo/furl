import React from 'react';

const Header = ({ id, className, outline = 'none', children }) => {
  return (<header
    id={id} className={[ outline !== 'none' ? outline : '', className, 'layout-header' ].join(' ').trim()}>{children}</header>);
};

export default Header;
