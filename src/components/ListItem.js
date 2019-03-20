import React from "react";

const ListItem = ({ id, className, children}) => (
  <li id={id !== undefined ? id : false} className={className}>
    {children}
  </li>
);

export default ListItem;