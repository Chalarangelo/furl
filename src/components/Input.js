import React from "react";

const InputBase = ({
  size = 'normal',
  type,
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className
}) => {
  let classNames = [size !== 'normal' ? size : '', className];
  return (
    <input
      type={type}
      id={id !== undefined ? id : false}
      className={classNames.join(' ').trim()}
      disabled={disabled}
      required={required}
      placeholder={placeholder !== undefined ? placeholder : false}
      name={name !== undefined ? name : false}
      onChange={onChange}
    />
  )
};

const TextInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className
}) => (
  <InputBase 
    type='text' id={id} placeholder={placeholder}
    className={className} size={size} disabled={disabled} 
    required={required} name={name} onChange={onChange}
  />
);

const EmailInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className
}) => (
  <InputBase 
    type='email' id={id} placeholder={placeholder}
    className={className} size={size} disabled={disabled} 
    required={required} name={name} onChange={onChange}
  />
);


export {TextInput, EmailInput};