import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Avatar = ({ 
  src, 
  shape = 'rounded',
  size = 'small',
  className, 
  ...rest }) => {
    let classNames = [className, 'avatar', shape, size];
    return (
      <div
        className={combineClassNames(classNames)}
        style={combineStyles(rest, rest.style, { backgroundImage: `url(${encodeURI(src)})` })}
        {...omitProps(rest)}
      />
    );
  }

export default Avatar;
