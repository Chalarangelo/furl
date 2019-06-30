import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Switch = ({
  color = 'plain',
  disabled = false,
  name,
  checked,
  onChange,
  className,
  children,
  ...rest }) => {
  let classNames = [color, 'switch-input', className];
  return (
    <label className='switch'>
      <input
        type='checkbox'
        className={combineClassNames(classNames)}
        disabled={disabled}
        checked={checked}
        name={name}
        onChange={onChange}
        aria-label={`${children}`}
        role='switch'
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />
      &nbsp;{children}
    </label>
  );
};

export default Switch;
