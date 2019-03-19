import React from "react";

const MenuItem = ({ selected = false, id, className, children }) => {
  let classNames = [selected ? "selected" : "", className, "menu-item"];
  return (<div 
    id={id !== undefined ? id : false} className={classNames.join(' ').trim()}>{children}</div>)
};

export default MenuItem;