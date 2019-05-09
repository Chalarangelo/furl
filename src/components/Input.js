import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import { normalizeChildren, generateUniqueId } from "../utilities/utils";
import { MaskedInputBase, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, ColorInput, DateInput } from "./MaskedInput";

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
  ...rest
}) => {
  let classNames = [
    size !== 'normal' ? size : '', 
    shape !== 'normal' ? shape : '', 
    className];
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
  shape = 'normal',
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
      className={className}
      size={size} shape={shape}
      disabled={disabled}
      required={required}
      placeholder={placeholder !== undefined ? placeholder : false}
      name={name !== undefined ? name : false}
      onChange={onChange}
      rows={rows}
    />
  ) : (
    <InputBase 
      type='text' id={id} placeholder={placeholder} shape={shape}
      className={className} size={size} disabled={disabled} 
      required={required} name={name} onChange={onChange}
    />
  );

const EmailInput = ({
  size = 'normal',
  shape = 'normal',
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
    className={className} size={size} disabled={disabled} shape={shape}
    required={required} name={name} onChange={onChange}
  />
);

const UrlInput = ({
  size = 'normal',
  shape = 'normal',
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
    className={className} size={size} disabled={disabled} shape={shape}
    required={required} name={name} onChange={onChange}
  />
);

const PasswordInput = ({
  size = 'normal',
  shape = 'normal',
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
        required={required} name={name} onChange={onChange} shape={shape}
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
  shape = 'normal',
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
        className={className} size={size} shape={shape} disabled={disabled}
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
  children
}) =>  {
  children = normalizeChildren(children);
  let options = children.filter(item => Option.name == item.type.name);
  if(multiple)
    return (<select
      id={id !== undefined ? id : false}
      className={[size !== 'normal' ? size : '', shape !== 'normal' ? shape : '', className].join(' ').trim()}
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
      className={[size !== 'normal' ? size : '', shape !== 'normal' ? shape : '', className].join(' ').trim()}
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
  shape = 'normal',
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
        className={[size !== 'normal' ? size : '', shape !== 'normal' ? shape : '',className].join(' ').trim()} size={size} disabled={disabled} 
        required={required} name={name} onChange={onChange}
      />
      <Button>
        <Icon name='chevron-down' width={16} height={16} />&zwnj;
      </Button>
    </React.Fragment>
  )
}
;

const FileInput = ({
  size = 'normal',
  shape = 'normal',
  multiple = false,
  disabled = false,
  required = false,
  placeholder,
  name,
  onFilesChanged,
  id,
  className
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
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (multiple) setFilename(Array.from(e.target.files));
      else setFilename([e.target.files[0]]);
    }
  }

  React.useEffect(() => {
    let div = dropRef.current;
    if (div === null) return;
    div.addEventListener('dragenter', handleDragIn);
    div.addEventListener('dragleave', handleDragOut);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDrop);
    div.addEventListener('click', handleClick);
    return function cleanup() {
      div.removeEventListener('dragenter', handleDragIn);
      div.removeEventListener('dragleave', handleDragOut);
      div.removeEventListener('dragover', handleDrag);
      div.removeEventListener('drop', handleDrop);
    };
  },[dropRef]);

  React.useEffect(() => {
    typeof onFilesChanged == 'function' && onFilesChanged(filename);
  },[filename]);

  return (<React.Fragment>
    <input 
      type='file' disabled={disabled} required={required} name={name} multiple={multiple}
      onChange={handleFileInput} ref={inputRef} onClick={e => e.stopPropagation()}
    />
    <div 
      role="button"
      className={[
        className, 'upload', 
        drag ? 'drag' : (filename && filename.length > 0) ? 'ready' : '',
        shape !== 'normal' ? shape : '',
        size !== 'normal' ? size : '',
        disabled ? 'disabled' : ''
      ].join(' ').trim()} 
      ref={dropRef} 
      id={id !== undefined ? id : false}>
      {
        filename && filename.length > 0 && !drag 
        ? <React.Fragment>
            <Icon name='check-circle'/>
            <ul>{filename.map(f => <li>{f.name}</li>)}</ul> 
          </React.Fragment>
          : <React.Fragment>
            <Icon name='upload' />
            <span>{placeholder}</span>
          </React.Fragment>
        }
    </div>
  </React.Fragment>);
};

const Star = ({ marked, starId, iconName, iconStyle, iconFillColor }) => (
  <Icon star-id={starId} name={iconName} 
    fill={marked ? iconFillColor : iconStyle !== 'fill' ? 'none' : 'var(--interface-gray-300)'} 
    stroke = { marked ? iconFillColor : 'var(--interface-gray-300)'} 
  />
)

const RatingInput = ({
  iconName = 'star',
  iconStyle = 'outline',
  iconFillColor = 'var(--warning-yellow-500)',
  disabled = false,
  required = false,
  name,
  onChange,
  id,
  className
}) =>  {
  const [rating, setRating] = React.useState(typeof defaultValue == 'number' ? defaultValue : 0);
  const [selection, setSelection] = React.useState(0);

  const hoverOver = e => {
    let val = 0;
    if (e && e.target && e.target.getAttribute('star-id'))
      val = e.target.getAttribute('star-id');
    setSelection(val);
  };

  return (
    <div
      id={id !== undefined ? id : false}
      onMouseOut={() => hoverOver(null)}
      onClick={(event) => setRating(event.target.getAttribute('star-id') || rating)}
      onMouseOver={hoverOver}
      className={[className, 'rating'].join(' ').trim()}
    >
      <input
        type='number' disabled={disabled} required={required} name={name} onChange={onChange} value={rating}
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
  shape = 'normal',
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
    <InputBase
      type='range' id={id} placeholder={placeholder}
      className={className} size={size} disabled={disabled} shape={shape}
      required={required} name={name} onChange={(e) => { setInputValue(e.target.value); onChange && onChange(e);}}
      value={inputValue} min={1} max={100} style={{
        background: `linear-gradient(to right, var(--secondary-background-color) 0%, var(--secondary-background-color) ${inputValue}%, var(--background-color) ${inputValue}%)`
      }}
    />
  )
};


export { 
  InputBase, TextInput, EmailInput, PasswordInput, NumberInput, UrlInput, Option, SelectInput, ComboboxInput,
  MaskedInputBase, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, ColorInput, FileInput, DateInput, RatingInput, SliderInput
};