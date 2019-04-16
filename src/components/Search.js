import React from "react";
import {InputBase} from "./Input";
import Icon from "./Icon";

const Search = ({
  size = 'normal',
  disabled = false,
  required = false,
  placeholder,
  name,
  onChange,
  id,
  className,
  withIcon
}) => 
  withIcon ? (
    <React.Fragment>
      <InputBase
        type='search' id={id} placeholder={placeholder}
        className={['with-search-icon', className].join(' ').trim()} size={size} disabled={disabled}
        required={required} name={name} onChange={onChange}
      />
      <span>
        <Icon name='search' width={16} height={16} />&zwnj;
      </span>
    </React.Fragment>
  ) : (
    <InputBase 
      type='search' id={id} placeholder={placeholder}
      className={className} size={size} disabled={disabled} 
      required={required} name={name} onChange={onChange}
    />
  );


export default Search;