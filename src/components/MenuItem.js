import React from "react";

const MenuItem = ({ selected = false, children }) => {
  let classNames = [selected ? "selected" : "", "menu-item"];
  return (<div className={classNames.join(' ')}>{children}</div>)
};

export default MenuItem;