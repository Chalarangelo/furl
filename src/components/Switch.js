import React from 'react';
import { combineClassNames } from '../utilities/utils';

const Switch = ({
  color = 'plain',
  disabled = false,
  required = false,
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
        required={required}
        checked={checked}
        name={name}
        onChange={onChange}
        aria-label={`${children}`}
        role='switch'
        {...rest}
      />
      {children}
    </label>
  );
};

export default Switch;
