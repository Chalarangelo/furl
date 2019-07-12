import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Button = ({
  fill = 'flat',
  text = 'normal',
  size = 'normal',
  color = 'plain',
  shape = 'normal',
  type = 'button',
  disabled = false,
  openIn,
  href,
  onClick,
  id,
  className,
  children,
  ...rest}) => {
  let classNames = ['button', fill, className];
  if (text !== 'normal') classNames.push(text);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  let _type = 
    (className && typeof className.indexOf === 'function' && className.indexOf('with-dropdown') !== -1) 
    ? 'with-dropdown' : href ? 'link' : 'button';
  switch (_type) {
    case 'link':
      return (['external', '_external'].includes(openIn)
        ? <a
          href={disabled ? '' : href}
          className={combineClassNames(classNames)}
          rel='noopener noreferrer'
          target='_blank'
          disabled={disabled}
          onClick={onClick}
          id={id}
          aria-label={rest['aria-label'] ? rest['aria-label'] : rest.title ? rest.title : rest.name ? rest.name : id ? id : 'button'}
          role='button'
          style={combineStyles(rest, rest.style)}
          {...omitProps(rest)}
        >
          {children}
        </a>
        : <a
          href={disabled ? '' : href}
          className={combineClassNames(classNames)}
          target={['blank', '_blank'].includes(openIn) ? '_blank' : '_self'}
          disabled={disabled}
          onClick={onClick}
          id={id}
          aria-label={rest['aria-label'] ? rest['aria-label'] : rest.title ? rest.title : rest.name ? rest.name : id ? id : 'button'}
          role='button'
          style={combineStyles(rest, rest.style)}
          {...omitProps(rest)}
        >
          {children}
        </a>);
    case 'submit':
      return (
        <button
          type='submit'
          className={combineClassNames(classNames)}
          disabled={disabled}
          onClick={onClick}
          id={id}
          aria-label={rest['aria-label'] ? rest['aria-label'] : rest.title ? rest.title : rest.name ? rest.name : id ? id : 'button'}
          style={combineStyles(rest, rest.style)}
          {...omitProps(rest)}
        >
          {children}
        </button>
      );
    case 'reset':
      return (
        <button
          type='reset'
          className={combineClassNames(classNames)}
          disabled={disabled}
          onClick={onClick}
          id={id}
          aria-label={rest['aria-label'] ? rest['aria-label'] : rest.title ? rest.title : rest.name ? rest.name : id ? id : 'button'}
          style={combineStyles(rest, rest.style)}
          {...omitProps(rest)}
        >
          {children}
        </button>
      );
    case 'with-dropdown':
      return(
        <span
          className={combineClassNames(classNames)}
          disabled={disabled}
          onClick={onClick}
          id={id}
          aria-label={rest['aria-label'] ? rest['aria-label'] : rest.title ? rest.title : rest.name ? rest.name : id ? id : 'button'}
          role='button'
          style={combineStyles(rest, rest.style)}
          {...omitProps(rest)}
        >
          {children}
        </span>
      );
    default:
      classNames = classNames.slice(1);
      return (
        <button
          className={combineClassNames(classNames)}
          disabled={disabled}
          onClick={onClick}
          id={id}
          aria-label={rest['aria-label'] ? rest['aria-label'] : rest.title ? rest.title : rest.name ? rest.name : id ? id : 'button'}
          style={combineStyles(rest, rest.style)}
          {...omitProps(rest)}
        >
          {children}
        </button>
      );
  }
};

export default Button;
