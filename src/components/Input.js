import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import { normalizeChildren, generateUniqueId } from "../utilities/utils";
import { MaskedInputBase, CreditCardInput } from "./MaskedInput";

const InputBase = ({
  size = 'normal',
  type,
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className,
  ...rest
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
      {...rest}
    />
  )
};

const TextInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  multiline = false,
  rows = 5,
  name,
  onChange,
  id,
  className
}) => 
  multiline ? (
    <textarea
      id={id !== undefined ? id : false}
      className={[size !== 'normal' ? size : '', className].join(' ').trim()}
      disabled={disabled}
      required={required}
      placeholder={placeholder !== undefined ? placeholder : false}
      name={name !== undefined ? name : false}
      onChange={onChange}
      rows={rows}
    />
  ) : (
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
  pattern='.+@.+\..+',
  name,
  onChange,
  id,
  className
}) => (
  <InputBase 
    type='email' id={id} placeholder={placeholder} pattern={pattern}
    className={className} size={size} disabled={disabled} 
    required={required} name={name} onChange={onChange}
  />
);

const UrlInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  pattern='https?://.+',
  name,
  onChange,
  id,
  className
}) => (
  <InputBase 
    type='url' id={id} placeholder={placeholder} pattern={pattern}
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

const NumberInput = ({
  size = 'normal',
  min,
  max,
  step = 1,
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className
}) => {
  const [inputValue, setInputValue] = React.useState(0);
  return (
    <React.Fragment>
      <Button onClick={(e) => { setInputValue(+inputValue - step); onChange(e); }} className='number-input-minus'>
        <Icon name='minus' width={16} height={16} />&zwnj;
      </Button>
      <InputBase
        type='number' id={id} placeholder={placeholder}
        className={className} size={size} disabled={disabled}
        required={required} name={name} onChange={(e) => {setInputValue(e.target.value); onChange(e);}}
        min={min} max={max} step={step} value={inputValue}
      />
      <Button onClick={(e) => { setInputValue(+inputValue + step); onChange(e); }} className='number-input-plus'>
        <Icon name='plus' width={16} height={16} />&zwnj;
      </Button>
    </React.Fragment>
  )
};

const Option = ({ disabled, selected, value, id, className, children }) => (
  <option 
    id={id !== undefined ? id : false} className={className}
    value={value} disabled={disabled} selected={selected}
    >
    {children}
  </option>
);

const SelectInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  multiple,
  selectSize,
  onChange,
  id,
  className,
  children
}) =>  {
  children = normalizeChildren(children);
  let options = children.filter(item => Option.name == item.type.name);
  if(multiple)
    return (<select
      id={id !== undefined ? id : false}
      className={[size !== 'normal' ? size : '', className].join(' ').trim()}
      disabled={disabled}
      required={required}
      placeholder={placeholder !== undefined ? placeholder : false}
      name={name !== undefined ? name : false}
      onChange={onChange}
      multiple={multiple} size={selectSize}
    >
      {options}
    </select>);
  else
    return (<React.Fragment><select
      id={id !== undefined ? id : false}
      className={[size !== 'normal' ? size : '', className].join(' ').trim()}
      disabled={disabled}
      required={required}
      placeholder={placeholder !== undefined ? placeholder : false}
      name={name !== undefined ? name : false}
      onChange={onChange}
    >
      {options}
    </select><Button>
        <Icon name='chevron-down' width={16} height={16} />&zwnj;
        </Button></React.Fragment>
    )
};

const ComboboxInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className,
  children
}) => {
  const [optionsId, setOptionsId] = React.useState(generateUniqueId('combo-input'));
  children = normalizeChildren(children);
  let options = children.filter(item => Option.name == item.type.name);
  
  return (
    <React.Fragment>
      <datalist id={optionsId}>
        {options}
      </datalist>
      <InputBase 
        id={id} placeholder={placeholder} list={optionsId}
        className={[size !== 'normal' ? size : '',className].join(' ').trim()} size={size} disabled={disabled} 
        required={required} name={name} onChange={onChange}
      />
      <Button>
        <Icon name='chevron-down' width={16} height={16} />&zwnj;
      </Button>
    </React.Fragment>
  )
}
;


export { 
  InputBase, TextInput, EmailInput, PasswordInput, NumberInput, UrlInput, Option, SelectInput, ComboboxInput,
  MaskedInputBase, CreditCardInput
};