import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ type, children }) => {
  if (!Array.isArray(children)) children = [children];
  const menuItems = children.filter(item => MenuItem.name == item.type.name);
  let classNames = [type, "menu"];
  return (<div className={classNames.join(' ')}>{menuItems}</div>)
};

export {Menu, MenuItem};