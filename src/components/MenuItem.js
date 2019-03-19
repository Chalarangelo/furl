import React from "react";

const MenuItem = ({ selected = false, id, children }) => {
  let classNames = [selected ? "selected" : "", "menu-item"];
  return (<div 
      id={id !== undefined ? id : false} className={classNames.join(' ')}>{children}</div>)
};

export default MenuItem;