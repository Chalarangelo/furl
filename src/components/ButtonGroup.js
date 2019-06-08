import React from 'react';
import { normalizeChildren, combineClassNames, omitProps, combineStyles } from '../utilities/utils';
import Button from './Button';

const ButtonGroup = ({
  fill = 'flat',
  text = 'normal',
  size = 'normal',
  color = 'plain',
  shape = 'normal',
  className,
  children,
  ...rest
}) => {
  const buttons = normalizeChildren(children).filter(item => Button.name === item.type.name)
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
  let classNames = [className, 'button-group', fill];
  if (text !== 'normal') classNames.push(text);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  return (
    <div 
      className={combineClassNames(classNames)}
      role='group'
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {buttons}
    </div>
  );
};

export default ButtonGroup;
