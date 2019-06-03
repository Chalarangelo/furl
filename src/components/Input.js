import React from 'react';
import Button from './Button';
import Icon from './Icon';
import { normalizeChildren, generateUniqueId } from '../utilities/utils';
import { MaskedInputBase, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, ColorInput, DateInput } from './MaskedInput';

const InputBase = ({
  size = 'normal',
  shape = 'normal',
  type,
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className,
  defaultValue,
  ...rest
}) => {
  let classNames = [
    size !== 'normal' ? size : '',
    shape !== 'normal' ? shape : '',
    className];
  return (
    <input
      type={type}
      id={id}
      className={classNames.join(' ').trim()}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      defaultValue={defaultValue}
      {...rest}
    />
  );
};

const TextInput = ({
  size = 'normal',
  shape = 'normal',
  disabled = false,
  required = false,
  placeholder,
  multiline = false,
  rows = 5,
  name,
  onChange,
  id,
  className,
  ...rest
}) =>
  multiline ? (
    <textarea
      id={id}
      className={className}
      size={size} shape={shape}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      rows={rows}
      {...rest}
    />
  ) : (
    <InputBase
      type='text' id={id} placeholder={placeholder} shape={shape}
      className={className} size={size} disabled={disabled}
      required={required} name={name} onChange={onChange}
      {...rest}
    />
  );

const EmailInput = ({
  size = 'normal',
  shape = 'normal',
  disabled = false,
  required = false,
  placeholder,
  pattern = '.+@.+\..+',
  name,
  onChange,
  id,
  className,
  ...rest
}) => (
  <InputBase
    type='email' id={id} placeholder={placeholder} pattern={pattern}
    className={className} size={size} disabled={disabled} shape={shape}
    required={required} name={name} onChange={onChange} {...rest}
  />
);

const UrlInput = ({
  size = 'normal',
  shape = 'normal',
  disabled = false,
  required = false,
  placeholder,
  pattern = 'https?://.+',
  name,
  onChange,
  id,
  className,
  ...rest
}) => (
  <InputBase
    type='url' id={id} placeholder={placeholder} pattern={pattern}
    className={className} size={size} disabled={disabled} shape={shape}
    required={required} name={name} onChange={onChange} {...rest}
  />
);

const PasswordInput = ({
  size = 'normal',
  shape = 'normal',
  disabled = false,
  readOnly = false,
  required = false,
  placeholder,
  name,
  withRevealer = false,
  onChange,
  id,
  className,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return withRevealer ? (
    <>
      <InputBase
        type={passwordVisible ? 'text' : 'password'} id={id} placeholder={placeholder}
        className={['revealer', className].join(' ').trim()} size={size} disabled={disabled} readOnly={readOnly}
        required={required} name={name} onChange={onChange} shape={shape} {...rest}
      />
      <Button disabled={disabled} readOnly={readOnly} onClick={() => {
        if (disabled || readOnly) return;
        setPasswordVisible(!passwordVisible);
      }}>
        <Icon name={passwordVisible ? 'eye-off' : 'eye'} width={16} height={16} />&zwnj;
      </Button>
    </>
  )
    : (
      <InputBase
        type='password' id={id} placeholder={placeholder}
        className={className} size={size} disabled={disabled}
        required={required} name={name} onChange={onChange}
        {...rest}
      />
    );
}
;

const NumberInput = ({
  size = 'normal',
  shape = 'normal',
  min,
  max,
  step = 1,
  disabled = false,
  readOnly = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className,
  ...rest
}) => {
  const [inputValue, setInputValue] = React.useState(0);
  return (
    <>
      <Button disabled={disabled} readOnly={readOnly} onClick={(e) => {
        if (readOnly || disabled) return;
        setInputValue(+inputValue - step);
        typeof onChange === 'function' && onChange(e);
      }} className='number-input-minus'>
        <Icon name='minus' width={16} height={16} />&zwnj;
      </Button>
      <InputBase
        type='number' id={id} placeholder={placeholder} readOnly={readOnly}
        className={className} size={size} shape={shape} disabled={disabled}
        required={required} name={name} onChange={(e) => {
          if (readOnly || disabled) return;
          setInputValue(e.target.value);
          typeof onChange === 'function' && onChange(e);
        }}
        min={min} max={max} step={step} value={inputValue} {...rest}
      />
      <Button disabled={disabled} readOnly={readOnly} onClick={(e) => {
        if (readOnly || disabled) return;
        setInputValue(+inputValue + step);
        onChange(e);
      }} className='number-input-plus'>
        <Icon name='plus' width={16} height={16} />&zwnj;
      </Button>
    </>
  );
};

const Option = ({ disabled, selected, value, id, className, children, ...rest }) => (
  <option
    id={id} className={className}
    value={value !== undefined ? value : `${children}`} disabled={disabled}
    {...rest}
  >
    {children}
  </option>
);

const SelectInput = ({
  size = 'normal',
  shape = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  multiple,
  selectSize,
  onChange,
  id,
  className,
  children,
  ...rest
}) => {
  children = normalizeChildren(children);
  let options = children.filter(item => Option.name === item.type.name);
  let defaultValue = options
    .filter(v => v.props.selected)
    .map(v => v.props.value !== undefined ? v.props.value : `${v.props.children}`);
  if (multiple) {
    return (<select
      id={id}
      className={[size !== 'normal' ? size : '', shape !== 'normal' ? shape : '', className].join(' ').trim()}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      multiple={multiple} size={selectSize} {...rest}
      defaultValue={defaultValue}
    >
      {options}
    </select>);
  } else {
    return (<><select
      id={id}
      className={[size !== 'normal' ? size : '', shape !== 'normal' ? shape : '', className].join(' ').trim()}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      name={name}
      onChange={onChange} {...rest}
      defaultValue={defaultValue[0]}
    >
      {options}
    </select><Button>
      <Icon name='chevron-down' width={16} height={16} />&zwnj;
    </Button></>
    );
  }
};

const ComboboxInput = ({
  size = 'normal',
  shape = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className,
  children,
  ...rest
}) => {
  const [optionsId, setOptionsId] = React.useState(generateUniqueId('combo-input'));
  children = normalizeChildren(children);
  let options = children.filter(item => Option.name === item.type.name);
  let defaultValue = options
    .filter(v => v.props.selected)
    .map(v => v.props.value !== undefined ? v.props.value : `${v.props.children}`);

  return (
    <>
      <datalist id={optionsId}>
        {options}
      </datalist>
      <InputBase
        id={id} placeholder={placeholder} list={optionsId}
        className={[size !== 'normal' ? size : '', shape !== 'normal' ? shape : '', className].join(' ').trim()} size={size} disabled={disabled}
        required={required} name={name} onChange={onChange} {...rest} defaultValue={defaultValue[0]}
      />
      <Button>
        <Icon name='chevron-down' width={16} height={16} />&zwnj;
      </Button>
    </>
  );
}
;

const FileInput = ({
  size = 'normal',
  shape = 'normal',
  multiple = false,
  disabled = false,
  readOnly = false,
  required = false,
  placeholder,
  name,
  onFilesChanged,
  id,
  className,
  ...rest
}) => {
  const [drag, setDrag] = React.useState(false);
  const [filename, setFilename] = React.useState([]);
  let dropRef = React.createRef();
  let inputRef = React.createRef();

  let dragCounter = 0;

  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setDrag(true);
  };

  const handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter === 0) setDrag(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (multiple) setFilename(Array.from(e.dataTransfer.files));
      else setFilename([e.dataTransfer.files[0]]);
      e.dataTransfer.clearData();
      dragCounter = 0;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    inputRef.current && inputRef.current.click();
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (multiple) setFilename(Array.from(e.target.files));
      else setFilename([e.target.files[0]]);
    }
  };

  React.useEffect(() => {
    let div = dropRef.current;
    if (div === null) return;
    if (readOnly || disabled) return;
    div.addEventListener('dragenter', handleDragIn);
    div.addEventListener('dragleave', handleDragOut);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDrop);
    div.addEventListener('click', handleClick);
    return function cleanup () {
      div.removeEventListener('dragenter', handleDragIn);
      div.removeEventListener('dragleave', handleDragOut);
      div.removeEventListener('dragover', handleDrag);
      div.removeEventListener('drop', handleDrop);
    };
  }, [dropRef]);

  React.useEffect(() => {
    typeof onFilesChanged === 'function' && onFilesChanged(filename);
  }, [filename]);

  return (<>
    <input
      type='file' disabled={disabled} required={required} name={name} multiple={multiple}
      onChange={handleFileInput} ref={inputRef} onClick={e => e.stopPropagation()} {...rest}
    />
    <div
      role='button'
      className={[
        className, 'upload',
        drag ? 'drag' : (filename && filename.length > 0) ? 'ready' : '',
        shape !== 'normal' ? shape : '',
        size !== 'normal' ? size : '',
        disabled ? 'disabled' : '',
        readOnly ? 'readonly' : ''
      ].join(' ').trim()}
      ref={dropRef}
      id={id}>
      {
        filename && filename.length > 0 && !drag
          ? <>
            <Icon name='check-circle' />
            <ul>{filename.map(f => <li>{f.name}</li>)}</ul>
          </>
          : <>
            <Icon name='upload' />
            <span>{placeholder}</span>
          </>
      }
    </div>
  </>);
};

const Star = ({ marked, starId, iconName, iconStyle, iconFillColor, ...rest }) => (
  <Icon star-id={starId} name={iconName}
    fill={marked ? iconFillColor : iconStyle !== 'fill' ? 'none' : 'var(--interface-gray-300)'}
    stroke={marked ? iconFillColor : 'var(--interface-gray-300)'} {...rest}
  />
);

const RatingInput = ({
  iconName = 'star',
  iconStyle = 'outline',
  iconFillColor = 'var(--warning-yellow-500)',
  disabled = false,
  readOnly = false,
  required = false,
  name,
  onChange,
  id,
  className,
  defaultValue = 0,
  ...rest
}) => {
  const [rating, setRating] = React.useState(typeof defaultValue === 'number' ? defaultValue : 0);
  const [selection, setSelection] = React.useState(0);

  const hoverOver = e => {
    if (disabled || readOnly) return;
    let val = 0;
    if (e && e.target && e.target.getAttribute('star-id')) { val = e.target.getAttribute('star-id'); }
    setSelection(val);
  };

  return (
    <div
      id={id}
      onMouseOut={() => hoverOver(null)}
      onClick={(event) => {
        if (disabled || readOnly) return;
        setRating(event.target.getAttribute('star-id') || rating);
      }}
      onMouseOver={hoverOver}
      className={[className, 'rating', disabled ? 'disabled' : '', readOnly ? 'readonly' : ''].join(' ').trim()}
      {...rest} // TODO: Check if this should all go here
    >
      <input
        type='number' disabled={disabled} required={required} name={name} onChange={onChange} value={rating} readOnly={readOnly}
      />
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          iconName={iconName}
          iconStyle={iconStyle}
          iconFillColor={iconFillColor}
          starId={i + 1}
          key={`star_${i + 1} `}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};

const SliderInput = ({
  size = 'normal',
  disabled = false,
  readOnly = false,
  required = false,
  range = false,
  min = 0,
  max = 100,
  placeholder,
  name,
  onChange,
  id,
  className,
  defaultValue,
  ...rest
}) => {
  const [inputValue, setInputValue] = React.useState(range
    ? (Array.isArray(defaultValue) && typeof defaultValue[1] === 'number') ? defaultValue[1] : max
    : typeof defaultValue === 'number' ? defaultValue : min
  );
  const [lowInputValue, setLowInputValue] = React.useState(range
    ? (Array.isArray(defaultValue) && typeof defaultValue[0] === 'number') ? defaultValue[0] : min
    : min
  );
  return (
    range
      ? <>
        <InputBase
          type='range' id={id} placeholder={placeholder}
          className={className} size={size} disabled={disabled} readOnly={readOnly}
          required={required} name={name} onChange={(e) => {
            if (disabled || readOnly) return;
            if (e.target.value > lowInputValue) setInputValue(e.target.value);
            typeof onChange === 'function' && onChange(e);
          }}
          value={inputValue} min={min} max={max} style={{
            background: `linear-gradient(to right, var(--background-color) 0%, var(--background-color) ${(lowInputValue - min) / (max - min) * 100}%, var(--secondary-background-color) ${(lowInputValue - min) / (max - min)}%,  var(--secondary-background-color) ${(inputValue - min) / (max - min) * 100}%, var(--background-color) ${(inputValue - min) / (max - min) * 100}%)`
          }}
          {...rest}
        />
        <InputBase
          type='range' id={id} placeholder={placeholder}
          className={'low'} size={size} disabled={disabled} readOnly={readOnly}
          required={required} name={name} onChange={(e) => {
            if (disabled || readOnly) return;
            if (e.target.value < inputValue) setLowInputValue(e.target.value);
            typeof onChange === 'function' && onChange(e);
          }}
          value={lowInputValue} min={min} max={max} style={{
            background: `transparent`
          }}
          {...rest}
        />
      </>
      : <InputBase
        type='range' id={id} placeholder={placeholder}
        className={className} size={size} disabled={disabled} readOnly={readOnly}
        required={required} name={name} onChange={(e) => { if (disabled || readOnly) return; setInputValue(e.target.value); typeof onChange === 'function' && onChange(e); }}
        value={inputValue} min={min} max={max} style={{
          background: `linear-gradient(to right, var(--secondary-background-color) 0%, var(--secondary-background-color) ${(inputValue - min) / (max - min) * 100}%, var(--background-color) ${(inputValue - min) / (max - min) * 100}%)`
        }}
        {...rest}
      />
  );
};

export {
  InputBase, TextInput, EmailInput, PasswordInput, NumberInput, UrlInput, Option, SelectInput, ComboboxInput,
  MaskedInputBase, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, ColorInput, FileInput, DateInput, RatingInput, SliderInput
};
