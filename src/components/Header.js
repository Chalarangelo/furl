import React from "react";

const Header = ({ id, children }) => {
  return (<header 
          id={id !== undefined ? id : false} className='layout-header'>{children}</header>);
}

export default Header;