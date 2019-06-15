import React from 'react';
import {
  TextInput, EmailInput, PasswordInput, NumberInput, UrlInput,
  CreditCardInput, PhoneInput, CurrencyInput, TimeInput, 
  ColorInput, FileInput, DateInput, RatingInput, SliderInput,
  Checkbox
} from '../components';
import RadioGroup from './RadioGroup';
import SelectInput from './SelectInput';
import ComboboxInput from './ComboboxInput';
import { hasKey, omitProps } from '../utilities/utils';

const InputHOC = (props) => {
  if (!hasKey(props, 'type'))
    return (
      <TextInput {...omitProps(props, ['type'])} />
    );

  switch (props.type.toLowerCase().trim()) {
    case 'text':
      return (
        <TextInput {...omitProps(props, ['type'])} />
      );
    case 'textarea':
      return (
        <TextInput multiline {...omitProps(props, ['type', 'multiline'])} />
      );
    case 'email':
    case 'e-mail':
      return (
        <EmailInput {...omitProps(props, ['type'])} />
      );
    case 'password':
      return (
        <PasswordInput {...omitProps(props, ['type'])} />
      );
    case 'number':
    case 'num':
      return (
        <NumberInput {...omitProps(props, ['type'])} />
      );
    case 'url':
      return (
        <UrlInput {...omitProps(props, ['type'])} />
      );
    case 'creditcard':
    case 'credit-card':
    case 'card':
      return (
        <CreditCardInput {...omitProps(props, ['type'])} />
      );
    case 'phone':
    case 'telephone':
    case 'tel':
      return (
        <PhoneInput {...omitProps(props, ['type'])} />
      );
    case 'currency':
    case 'money':
      return (
        <CurrencyInput {...omitProps(props, ['type'])} />
      );
    case 'time':
      return (
        <TimeInput {...omitProps(props, ['type'])} />
      );
    case 'date':
      return (
        <DateInput {...omitProps(props, ['type'])} />
      );
    case 'rating':
      return (
        <RatingInput {...omitProps(props, ['type'])} />
      );
    case 'slider':
    case 'range':
      return (
        <SliderInput {...omitProps(props, ['type'])} />
      );
    case 'color':
      return (
        <ColorInput {...omitProps(props, ['type'])} />
      );
    case 'file':
    case 'upload':
      return (
        <FileInput {...omitProps(props, ['type'])} />
      );
    case 'radio':
    case 'radio-group':
    case 'radiogroup':
      return (
        <RadioGroup {...omitProps(props, ['type'])} />
      );
    case 'select':
      return (
        <SelectInput {...omitProps(props, ['type'])} />
      );
    case 'combo':
    case 'combobox':
      return (
        <ComboboxInput {...omitProps(props, ['type'])} />
      );
    default:
      return (
        <TextInput {...omitProps(props, ['type'])} />
      );
  }

};

export default InputHOC;