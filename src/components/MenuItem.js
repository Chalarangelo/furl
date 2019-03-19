import React from "react";
import Button from "./Button";

const MenuItem = ({ 
  selected = false, 
  disabled = false,
  openIn,
  href,
  onClick,
  id, 
  className, 
  children }) => {
  let classNames = [selected ? "selected" : "", className, "menu-item"];
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