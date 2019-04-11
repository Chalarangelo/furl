import React from "react";

const Footer = ({ id, className, children }) => {
  return (<footer 
    id={id !== undefined ? id : false} className={[ className ].join(' ').trim()}>{children}</footer>);
}

export default Footer;