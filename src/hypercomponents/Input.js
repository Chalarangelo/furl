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
import { isUndefined, hasKey, omitProps, generateUniqueId, combineStyles, combineClassNames } from '../utilities/utils';
import generateBackgroundIcon from '../utilities/iconGenerator';

const InputHOC = ({
  type = 'text',
  id,
  title,
  label,
  icon,
  name,
  style,
  className,
  ...rest
}) => {
  let _id = !isUndefined(id) ? id :generateUniqueId('input');
  let _title = !isUndefined(title) ? title : !isUndefined(name) ? name : '';
  let _style = combineStyles(rest, style, !isUndefined(icon) ? generateBackgroundIcon({ name: icon, stroke: '#6e7e8c', height: 18, width: 18 }) : {});
  let classNames = [className, !isUndefined(icon) ? 'with-icon' : ''];

  switch (type.toLowerCase().trim()) {
    case 'text':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
            ) : ''
          }
          <TextInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest} />
        </>
      );
    case 'textarea':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <TextInput multiline id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest} />
        </>
      );
    case 'email':
    case 'e-mail':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <EmailInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest} />
        </>
      );
    case 'password':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <PasswordInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'number':
    case 'num':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <NumberInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'url':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <UrlInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'creditcard':
    case 'credit-card':
    case 'card':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <CreditCardInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'phone':
    case 'telephone':
    case 'tel':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <PhoneInput id={id} id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest} />
        </>
      );
    case 'currency':
    case 'money':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <CurrencyInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'time':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <TimeInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'date':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <DateInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'rating':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <RatingInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'slider':
    case 'range':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <SliderInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'color':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <ColorInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'file':
    case 'upload':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <FileInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest} />
        </>
      );
    case 'radio':
    case 'radio-group':
    case 'radiogroup':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <RadioGroup id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'checkbox':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <Checkbox id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest} />
        </>
      );
    case 'select':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <SelectInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    case 'combo':
    case 'combobox':
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <ComboboxInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
    default:
      return (
        <>
          {label ? (
            <FormLabel htmlFor={id}>
              {label}
            </FormLabel>
          ) : ''
          }
          <TextInput id={_id} title={_title} style={_style} className={combineClassNames(classNames)} {...rest}  />
        </>
      );
  }

};

export default InputHOC;