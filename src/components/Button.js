import React from "react";

const Button = ({
  fill = 'flat', 
  text ='normal', 
  size = 'normal', 
  color='plain', 
  shape='normal',
  type='button', 
  disabled = false,
  openIn,
  href,
  onClick,
  children}) => {
  let classNames = [];
  classNames.push(fill);
  if (text !== 'normal') classNames.push(text);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  switch (type) {
    case 'link':
      return (['external', '_external'].includes(openIn)
        ?
        <a
          href={disabled ? '' : href}
          className={['button', ...classNames].join(' ')}
          rel='noopener noreferrer'
          target='_blank'
          disabled={disabled} 
          onClick={onClick}
        >
          {children}
        </a>
        :
        <a
          href={disabled ? '' : href}
          className={['button', ...classNames].join(' ')}
          target={['blank', '_blank'].includes(openIn) ? '_blank' : '_self'}
          disabled={disabled} 
          onClick={onClick}
        >
          {children}
        </a>);
    case 'submit':
      return (
        <button 
          type='submit' 
          className={classNames.join(' ')} 
          disabled={disabled} 
          onClick={onClick}
        >
          {children}
        </button>
      );
    case 'reset':
      return (
        <button 
          type='reset' 
          className={classNames.join(' ')} 
          disabled={disabled} 
          onClick={onClick}
        >
          {children}
        </button>
      );
    default:
      return (
        <button 
          className={classNames.join(' ')} 
          disabled={disabled} 
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};

export default Button;