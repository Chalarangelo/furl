import React from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";

const MenuItem = ({ 
  selected = false, 
  disabled = false,
  openIn,
  href,
  onClick,
  id, 
  className, 
  children }) => {
  if (!Array.isArray(children)) children = [children];
  let classNames = [selected ? "selected" : "", className, "menu-item", children.some(item => item.type && item.type.name && Dropdown.name == item.type.name) ? "with-dropdown" : ""];
  return (
    <Button
      id={id}
      className={classNames.join(' ').trim()}
      fill='' size= 'normal' text = 'normal' color = '' 
      type={href !== undefined ? 'link' : 'button'}
      disabled = {disabled}
      openIn = {openIn}
      onClick = {onClick}
      href= {href}
    >
      {children}
    </Button>
  );
};

export default MenuItem;