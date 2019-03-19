import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ type, id, className, children }) => {
  if (!Array.isArray(children)) children = [children];
  const menuItems = children.filter(item => MenuItem.name == item.type.name);
  let classNames = [type, className, "menu"];
  return (<nav
    id={id !== undefined ? id : false} className={classNames.join(' ').trim()}>{menuItems}</nav>)
};

export {Menu, MenuItem};