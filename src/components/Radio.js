import React from 'react';
import { combineClassNames } from '../utilities/utils';

const Radio = ({
  color = 'plain',
  disabled = false,
  required = false,
  name,
  checked,
  onChange,
  className,
  children,
  ...rest }) => {
  let classNames = [color, className];
  return (
    <label className='radio'>
      <input
        type='radio'
        className={combineClassNames(classNames)}
        disabled={disabled}
        required={required}
        checked={checked}
        name={name}
        onChange={onChange}
        {...rest}
      />
      {children}
    </label>
  );
};

export default Radio;
