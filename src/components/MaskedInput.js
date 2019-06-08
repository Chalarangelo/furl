import React from 'react';
import Button from './Button';
import Icon from './Icon';
import MaskedInput from 'react-text-mask';
import createNumberMask from '../utilities/createNumberMask';
import createAutoCorrectedDatePipe from '../utilities/createAutoCorrectedDatePipe';
import Calendar from './Calendar';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

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
  defaultValue,
  __ref,
  ...rest
}) => {
  let classNames = [size !== 'normal' ? size : '', className];
  return (
    <MaskedInput
      type={type} mask={mask} guide placeholderChar={'\u2000'}
      id={id}
      className={combineClassNames(classNames)}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      defaultValue={defaultValue} 
      title={name ? name : id ? id : rest.title ? rest.title : 'Search'}
      ref={__ref}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    />
  );
};

const CreditCardInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  className,
  ...rest
}) => (
  <MaskedInputBase
    type='text' placeholder={placeholder}
    mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
    className={className} size={size} disabled={disabled}
    required={required} name={name} onChange={onChange} {...rest}
  />
);

const PhoneInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  className,
  ...rest
}) => (
  <MaskedInputBase
    type='tel' placeholder={placeholder}
    mask={['+', /\d/, /\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    className={className} size={size} disabled={disabled}
    required={required} name={name} onChange={onChange} {...rest}
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
  className,
  ...rest
}) => (
  <MaskedInputBase
    type='text' placeholder={placeholder}
    mask={createNumberMask({
      prefix: `${currencySymbol} `,
      allowDecimal: true
    })}
    className={className} size={size} disabled={disabled}
    required={required} name={name} onChange={onChange} {...rest}
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
  className,
  ...rest
}) => {
  let mask = []; let pipeFormat = '';
  if (displayHours) {
    mask.push(/\d/); mask.push(/\d/); mask.push(':');
    pipeFormat += 'HH:';
  }
  mask.push(/\d/); mask.push(/\d/);
  pipeFormat += 'MM';
  if (displaySeconds) {
    mask.push(':'); mask.push(/\d/); mask.push(/\d/);
    pipeFormat += ':SS';
  }
  if (!displaySeconds && !displayHours) {
    mask.push(':'); mask.push('0'); mask.push('0');
  }
  return (
    <MaskedInputBase
      type='text' placeholder={placeholder}
      mask={mask} keepCharPositions
      pipe={createAutoCorrectedDatePipe(pipeFormat)}
      className={className} size={size} disabled={disabled}
      required={required} name={name} onChange={onChange}
      {...rest}
    />
  );
};

const DateInput = ({
  size = 'normal',
  disabled = false,
  readOnly = false,
  required = false,
  monthBeforeDay = false,
  separator = '/',
  minYear = 1,
  maxYear = 9999,
  placeholder,
  name,
  onChange,
  className,
  defaultValue,
  ...rest
}) => {
  let mask = [/\d/, /\d/, separator, /\d/, /\d/, separator, /\d/, /\d/, /\d/, /\d/];
  let pipeFormat = monthBeforeDay ? `mm${separator}dd${separator}yyyy` : `dd${separator}mm${separator}yyyy`;
  const [inputValue, setInputValue] = React.useState(defaultValue || undefined);
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  const inputRef = React.createRef();
  const pipe = createAutoCorrectedDatePipe(pipeFormat, { minYear: minYear, maxYear: maxYear });
  const localeOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

  const parseDate = (date) => {
    if (date === undefined) return;
    let dr = date.split('').filter(v => v !== separator);
    let year = dr.slice(-4).join('');
    let month = monthBeforeDay ? dr.slice(0, 2).join('') : dr.slice(2, 4).join('');
    let day = !monthBeforeDay ? dr.slice(0, 2).join('') : dr.slice(2, 4).join('');
    if (month.trim().length > 0 && day.trim().length > 0 && year.trim().length > 0) { return new Date(`${year}-${month}-${day}`); }
  };

  return (
    <>
      <MaskedInputBase
        type='text' placeholder={placeholder}
        mask={mask} keepCharPositions
        pipe={pipe}
        className={[className, 'date'].join(' ').trim()} size={size} disabled={disabled} readOnly={readOnly}
        required={required} name={name} value={inputValue === undefined ? '' : inputValue} onChange={(e) => { setInputValue(e.target.value); typeof onChange === 'function' && onChange(e); }}
        __ref={inputRef} {...rest}
      />
      <Button disabled={disabled} readOnly={readOnly} onClick={() => {
        if (readOnly || disabled) return;
        setCalendarOpen(!calendarOpen);
      }} className='calendar-toggler' aria-label='Open calendar'>
        <Icon name='calendar' width={16} height={16} />&zwnj;
      </Button>
      <div>
        {
          calendarOpen ? <Calendar
            fill='solid'
            className='date-calendar-picker'
            date={parseDate(inputValue)}
            onDateChanged={dt => {
              if (readOnly || disabled) return;
              let _dt = monthBeforeDay ? dt.toLocaleDateString('en-US', localeOptions) : dt.toLocaleDateString('en-GB', localeOptions);
              if (dt.getFullYear() <= maxYear && dt.getFullYear() >= minYear) {
                setInputValue(_dt.replace(/\//g, separator));
                setCalendarOpen(false);
              }
            }
            }
          /> : ''
        }
      </div>
    </>
  );
};

const ColorInput = ({
  size = 'normal',
  disabled = false,
  readOnly = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className,
  defaultValue,
  ...rest
}) => {
  const [inputValue, setInputValue] = React.useState(defaultValue || '#000000');
  return (
    <>
      <MaskedInputBase
        type='text' id={id} placeholder={placeholder}
        mask={['#', /[A-Fa-f0-9]/, /[A-Fa-f0-9]/, /[A-Fa-f0-9]/, /[A-Fa-f0-9]/, /[A-Fa-f0-9]/, /[A-Fa-f0-9]/]}
        className={combineClassNames(['color-input', className])} size={size} disabled={disabled} readOnly={readOnly}
        required={required} name={name}
        onChange={(e) => {
          if (readOnly || disabled) return;
          setInputValue(e.target.value);
          typeof onChange === 'function' && onChange(e);
        }} value={inputValue} {...rest}
      />
      <input type='color' onChange={(e) => {
        if (readOnly || disabled) return;
        setInputValue(e.target.value);
        onChange(e);
      }} value={inputValue} disabled={disabled} readOnly={readOnly}
        title={name ? name : id ? id : rest.title ? rest.title : 'Search'} />
    </>
  );
};

export { MaskedInputBase, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, ColorInput, DateInput };
