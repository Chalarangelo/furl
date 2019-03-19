import React from "react";

const Header = ({ id, className, children }) => {
  return (<header 
    id={id !== undefined ? id : false} className={[className, 'layout-header'].join(' ').trim()}>{children}</header>);
}

export default Header;