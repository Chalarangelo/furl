import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Checkbox = ({
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
    <label className='checkbox'>
      <input
        type='checkbox'
        className={combineClassNames(classNames)}
        disabled={disabled}
        required={required}
        checked={checked}
        name={name}
        onChange={onChange}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />
      {children}
    </label>
  );
};

export default Checkbox;
