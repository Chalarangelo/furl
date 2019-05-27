import React from 'react';

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
  let classNames = [];
  classNames.push(fill);
  if (text !== 'normal') classNames.push(text);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  switch (type) {
    case 'link':
      return (['external', '_external'].includes(openIn)
        ? <a
          href={disabled ? '' : href}
          className={['button', className, ...classNames].join(' ').trim()}
          rel='noopener noreferrer'
          target='_blank'
          disabled={disabled}
          onClick={onClick}
          id={id}
          {...rest}
        >
          {children}
        </a>
        : <a
          href={disabled ? '' : href}
          className={['button', className, ...classNames].join(' ').trim()}
          target={['blank', '_blank'].includes(openIn) ? '_blank' : '_self'}
          disabled={disabled}
          onClick={onClick}
          id={id}
          {...rest}
        >
          {children}
        </a>);
    case 'submit':
      return (
        <button
          type='submit'
          className={[className, ...classNames].join(' ').trim()}
          disabled={disabled}
          onClick={onClick}
          id={id}
          {...rest}
        >
          {children}
        </button>
      );
    case 'reset':
      return (
        <button
          type='reset'
          className={[className, ...classNames].join(' ').trim()}
          disabled={disabled}
          onClick={onClick}
          id={id}
          {...rest}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className={[className, ...classNames].join(' ').trim()}
          disabled={disabled}
          onClick={onClick}
          id={id}
          {...rest}
        >
          {children}
        </button>
      );
  }
};

export default Button;
