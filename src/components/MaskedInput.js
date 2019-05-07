import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import MaskedInput from "react-text-mask";
import { normalizeChildren, generateUniqueId } from "../utilities/utils";
import createNumberMask from "../utilities/createNumberMask";
import createAutoCorrectedDatePipe from "../utilities/createAutoCorrectedDatePipe";
import Calendar from "./Calendar";

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
  __ref,
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
      ref={__ref}
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
  let mask = [], pipeFormat = '';
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
    type='text' id={id} placeholder={placeholder} 
    mask={mask} keepCharPositions={true}
    pipe={createAutoCorrectedDatePipe(pipeFormat)}
    className={className} size={size} disabled={disabled} 
    required={required} name={name} onChange={onChange}
  />
  )
};

const DateInput = ({
  size = 'normal',
  disabled = false,
  required = false,
  monthBeforeDay = false,
  separator = '/',
  minYear = 1,
  maxYear = 9999,
  placeholder,
  name,
  onChange,
  id,
  className
}) => {
  let mask = [/\d/, /\d/, separator, /\d/, /\d/, separator, /\d/, /\d/, /\d/, /\d/], 
  pipeFormat = monthBeforeDay ? `mm${separator}dd${separator}yyyy` : `dd${separator}mm${separator}yyyy`;
  const [inputValue, setInputValue] = React.useState(undefined);
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  const inputRef = React.createRef();
  const pipe = createAutoCorrectedDatePipe(pipeFormat, { minYear: minYear, maxYear: maxYear });
  const localeOptions = { year: 'numeric', month: '2-digit', day: '2-digit'};

  React.useEffect(() => {
    console.log('state ' + inputValue);
  }, [inputValue]);

  const parseDate = (date) => {
    if(date === undefined) return;
    let dr = date.split('').filter(v => v !== separator);
    console.log(dr);
    let year = dr.slice(-4).join('');
    let month = monthBeforeDay ? dr.slice(0, 2).join('') : dr.slice(2, 4).join('');
    let day = !monthBeforeDay ? dr.slice(0,2).join('') : dr.slice(2,4).join('');
    console.table([year, month, day]);
    if (month.trim().length > 0 && day.trim().length > 0 && year.trim().length > 0) 
      return new Date(`${year}-${month}-${day}`);
  }

  return (
    <React.Fragment>
      <MaskedInputBase
        type='text' id={id} placeholder={placeholder}
        mask={mask} keepCharPositions={true}
        pipe={pipe}
        className={[className,'date'].join(' ').trim()} size={size} disabled={disabled}
        required={required} name={name} value={inputValue == undefined ? '' : inputValue} onChange={(e) => {setInputValue(e.target.value); typeof onChange == 'function' && onChange(e); }}
        __ref={inputRef}
      />
      <Button onClick={(e) => { setCalendarOpen(!calendarOpen); }} className='calendar-toggler'>
        <Icon name='calendar' width={16} height={16} />&zwnj;
        {
          calendarOpen ? <Calendar
            fill='solid'
            className='date-calendar-picker'
            date={parseDate(inputValue)}
            onDateChanged={dt => {
              console.log(dt);
              let _dt = monthBeforeDay ? dt.toLocaleDateString('en-US', localeOptions) : dt.toLocaleDateString('en-GB', localeOptions);
              if (dt.getFullYear() <= maxYear && dt.getFullYear() >= minYear) {
                setInputValue(_dt);
                setCalendarOpen(false);
              }
            }
            }
          /> : ''
        }
      </Button>
    </React.Fragment>
  );
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



export { MaskedInputBase, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, ColorInput, DateInput };