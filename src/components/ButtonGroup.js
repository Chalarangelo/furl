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
  const buttons = children.filter(item => Button.name == item.type.name)
    .map(b => {
      let _b = Object.assign({}, b);
      _b.props = Object.assign({
        fill: fill, 
        text: text, 
        size: size, 
        color: color, 
        shape: shape 
      }, b.props);
      return _b;
    });
  let classNames = [className, 'button-group'];
  classNames.push(fill);
  if (text !== 'normal') classNames.push(text);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  return (
  <div id={id !== undefined ? id : false} className = {classNames.join(' ').trim()}>
    {buttons}
  </div>
  );
};

export default ButtonGroup;