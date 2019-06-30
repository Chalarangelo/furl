import React from 'react';
import { InputBase } from './Input';
import { normalizeChildren, combineClassNames, omitProps, combineStyles } from '../utilities/utils';
import Icon from './Icon';

const Search = ({
  size = 'normal',
  disabled = false,
  placeholder,
  name,
  onChange,
  className,
  withIcon,
  children,
  ...rest
}) =>
  withIcon ? (
    <>
      <InputBase
        type='search' placeholder={placeholder}
        className={combineClassNames(['with-search-icon', className])} size={size} disabled={disabled}
        name={name} onChange={onChange} 
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />
      <span>
        <Icon name='search' width={16} height={16} />&zwnj;
      </span>
      {normalizeChildren(children).length ? <div className='search-result-box'>{children}</div> : ''}
    </>
  ) : (
    <>
      <InputBase
        type='search' placeholder={placeholder}
        className={className} size={size} disabled={disabled}
        name={name} onChange={onChange} 
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />
      {normalizeChildren(children).length ? <div className='search-result-box'>{children}</div> : ''}
    </>
  );

export default Search;
