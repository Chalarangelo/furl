import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import MaskedInput from "react-text-mask";
import { normalizeChildren, generateUniqueId } from "../utilities/utils";
import createNumberMask from "../utilities/createNumberMask";

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
      type={type} mask={mask} guide={true} placeholderChar={'\u2000'}
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

const PhoneInput = ({
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
    type='tel' id={id} placeholder={placeholder} 
    mask={['+', /\d/, /\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    className={className} size={size} disabled={disabled} 
    required={required} name={name} onChange={onChange}
  />
);

const CurrencyInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  currencySymbol = '$',
  placeholder,
  name,
  onChange,
  id,
  className
}) =>  (
    <MaskedInputBase 
    type='text' id={id} placeholder={placeholder} 
    mask={createNumberMask({
      prefix: `${currencySymbol} `, 
      allowDecimal : true
    })}
    className={className} size={size} disabled={disabled} 
    required={required} name={name} onChange={onChange}
  />
);

const TimeInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  displayHours = true,
  displaySeconds = true,
  placeholder,
  name,
  onChange,
  id,
  className
}) =>  {
  let mask = [];
  if (displayHours) {
    mask.push(/[0-2]/); mask.push(/\d/); mask.push(':');
  }
  mask.push(/[0-5]/); mask.push(/\d/);
  if (displaySeconds) {
    mask.push(':'); mask.push(/[0-5]/); mask.push(/\d/);
  }
  if (!displaySeconds && !displayHours) {
    mask.push(':'); mask.push('0'); mask.push('0');
  }
  return (
    <MaskedInputBase 
    type='text' id={id} placeholder={placeholder} 
    mask={mask}
    className={className} size={size} disabled={disabled} 
    required={required} name={name} onChange={onChange}
  />
  )
};

const ColorInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className
}) => {
  const [inputValue, setInputValue] = React.useState('#000000');
  return (
    <React.Fragment>
    <MaskedInputBase
      type='text' id={id} placeholder={placeholder}
      mask={['#', /[A-Fa-f0-9]/, /[A-Fa-f0-9]/, /[A-Fa-f0-9]/, /[A-Fa-f0-9]/, /[A-Fa-f0-9]/, /[A-Fa-f0-9]/]}
      className={['color-input',className].join(' ').trim()} size={size} disabled={disabled}
        required={required} name={name} 
        onChange={(e) => { setInputValue(e.target.value); onChange(e); }} value={inputValue}
    />
      <input type='color' onChange={(e) => { setInputValue(e.target.value); onChange(e); }} value={inputValue} />
    </React.Fragment>
  )
};



export { MaskedInputBase, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, ColorInput };