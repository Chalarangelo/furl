import React from "react";
import Button from "./Button";
import Icon from "./Icon";

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

const PasswordInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  withRevealer = false,
  onChange,
  id,
  className
}) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  
  return withRevealer ? (
    <React.Fragment>
      <InputBase 
        type={passwordVisible ? 'text' : 'password'} id={id} placeholder={placeholder}
        className={['revealer', className].join(' ').trim()} size={size} disabled={disabled} 
        required={required} name={name} onChange={onChange}
      />
      <Button onClick={() => setPasswordVisible(!passwordVisible)}>
        <Icon name={passwordVisible ? 'eye-off' : 'eye'} width={16} height={16} />&zwnj;
      </Button>
    </React.Fragment>
  )
  : (
    <InputBase
      type='password' id={id} placeholder={placeholder}
      className={className} size={size} disabled={disabled}
      required={required} name={name} onChange={onChange}
    />
  )
}
;


export {TextInput, EmailInput, PasswordInput};