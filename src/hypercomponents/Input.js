import React from 'react';
import {
  TextInput, EmailInput, PasswordInput, NumberInput, UrlInput,
  CreditCardInput, PhoneInput, CurrencyInput, TimeInput, 
  ColorInput, FileInput, DateInput, RatingInput, SliderInput,
  Checkbox, FormLabel, Icon
} from '../components';
import RadioGroup from './RadioGroup';
import SelectInput from './SelectInput';
import ComboboxInput from './ComboboxInput';
import { hasKey, omitProps, generateUniqueId, combineStyles } from '../utilities/utils';
import generateBackgroundIcon from '../utilities/iconGenerator';

const InputHOC = (props) => {
  if (!hasKey(props, 'type'))
    return (
      <TextInput {...omitProps(props, ['type'])} />
    );

  let id = hasKey(props, 'id') ? props.id : generateUniqueId('input');
  let title = hasKey(props, 'title') ? props.title : hasKey(props, 'name') ? props.name : '';
  let style = hasKey(props, 'style') ? props.style : {};
  let className = hasKey(props, 'className') ? props.className : '';
  if (hasKey(props, 'icon')) {
    style = combineStyles(style, generateBackgroundIcon({ name: props.icon, stroke: '#6e7e8c', height: 18, width: 18 }));
    className = `${className} with-icon`.trim();
  }

  switch (props.type.toLowerCase().trim()) {
    case 'text':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
            ) : ''
          }
          <TextInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'textarea':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <TextInput id={id} title={title} multiline {...omitProps(props, ['type', 'id', 'multiline'])} />
        </>
      );
    case 'email':
    case 'e-mail':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <EmailInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'password':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <PasswordInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'number':
    case 'num':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <NumberInput id={id} title={title} {...omitProps(props, ['type', 'id'])} />
        </>
      );
    case 'url':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <UrlInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'creditcard':
    case 'credit-card':
    case 'card':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <CreditCardInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'phone':
    case 'telephone':
    case 'tel':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <PhoneInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'currency':
    case 'money':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <CurrencyInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'time':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <TimeInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'date':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <DateInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'rating':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <RatingInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'slider':
    case 'range':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <SliderInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'color':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <ColorInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'file':
    case 'upload':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <FileInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'radio':
    case 'radio-group':
    case 'radiogroup':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <RadioGroup id={id} title={title} {...omitProps(props, ['type', 'id'])} />
        </>
      );
    case 'select':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <SelectInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    case 'combo':
    case 'combobox':
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <ComboboxInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
    default:
      return (
        <>
          {props.label ? (
            <FormLabel htmlFor={id}>
              {props.label}
            </FormLabel>
          ) : ''
          }
          <TextInput id={id} title={title} style={style} className={className} {...omitProps(props, ['type', 'id', 'style', 'className'])} />
        </>
      );
  }

};

export default InputHOC;