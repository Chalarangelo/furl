import React from "react";
import {normalizeChildren} from "../utilities/utils";
import Button from "./Button";

const ButtonGroup = ({ 
  fill = 'flat', 
  text ='normal', 
  size = 'normal', 
  color='plain', 
  shape='normal',
  id, 
  className, 
  children
}) => {
  children = normalizeChildren(children);
  const buttons = children.filter(item => Button.name == item.type.name);
  let classNames = [className, 'button-group'];
  classNames.push(fill);
  if (text !== 'normal') classNames.push(text);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  return (
  <div id={id !== undefined ? id : false} className = {classNames.join(' ').trim()}>
    {buttons.map(b => (
      <Button 
        fill={fill} text={text} size={size} color={color} shape={shape}
        type={b.props.type} className={b.props.className} id={b.props.id}
        disabled={b.props.disabled} openIn={b.props.openIn} href={b.props.href}
        onClick={b.props.onClick}
        children={b.props.children}
      />
    ))}
  </div>
  );
};

export default ButtonGroup;