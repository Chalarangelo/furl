import React from 'react';

const Footer = ({ id, className, children }) => {
  return (<footer
    id={id} className={[ className ].join(' ').trim()}>{children}</footer>);
};

export default Footer;
