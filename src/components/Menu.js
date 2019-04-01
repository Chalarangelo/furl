import React from "react";
import {normalizeChildren} from "../utilities/utils";
import MenuItem from "./MenuItem";

const Menu = ({ type ='horizontal', highlight = 'top', id, className, children }) => {
  children = normalizeChildren(children);
  const menuItems = children.filter(item => MenuItem.name === item.type.name);
  let classNames = [type, className, `${highlight}-highlight`, "menu"];
  return (<nav
    id={id !== undefined ? id : false} className={classNames.join(' ').trim()}>{menuItems}</nav>)
};

export {Menu, MenuItem};