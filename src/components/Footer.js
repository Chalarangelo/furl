import React from 'react';

const Footer = ({ id, className, children, ...rest }) => {
  return (<footer
    id={id} className={[ className ].join(' ').trim()} {...rest}>{children}</footer>);
};

export default Footer;
