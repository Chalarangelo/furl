import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import MaskedInput from "react-text-mask";
import { normalizeChildren, generateUniqueId } from "../utilities/utils";

const MaskedInputBase = ({
  size = 'normal',
  type,
  mask,
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
    <MaskedInput
      type={type} mask={mask} guide={false}
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

const CreditCardInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className
}) =>  (
    <MaskedInputBase 
      type='text' id={id} placeholder={placeholder} 
    mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
    className={className} size={size} disabled={disabled} 
    required={required} name={name} onChange={onChange}
  />
);



export { MaskedInputBase, CreditCardInput };