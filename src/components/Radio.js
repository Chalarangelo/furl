import React from 'react';

const Radio = ({
  color = 'plain',
  disabled = false,
  required = false,
  name,
  checked,
  onChange,
  id,
  className,
  children,
  ...rest }) => {
  let classNames = [color, className];
  return (
    <label className='radio'>
      <input
        type='radio'
        id={id}
        className={classNames.join(' ').trim()}
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
