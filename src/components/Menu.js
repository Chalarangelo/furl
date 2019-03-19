import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ type, id, children }) => {
  if (!Array.isArray(children)) children = [children];
  const menuItems = children.filter(item => MenuItem.name == item.type.name);
  let classNames = [type, "menu"];
  return (<div
    id={id !== undefined ? id : false} className={classNames.join(' ')}>{menuItems}</div>)
};

export {Menu, MenuItem};