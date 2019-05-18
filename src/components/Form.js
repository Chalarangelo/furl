import React from "react";

const FormLegend = ({ id, className, children }) => (
  <legend id={id !== undefined ? id : false} className={className}>{children}</legend>
);

const Form = ({
  fill = 'flat',
  size = 'normal',
  color = 'normal',
  action,
  method,
  name,
  enctype,
  autocomplete,
  openIn = 'self',
  id, 
  className, 
  children,
  ...rest }) => {
  let classNames = [];
  classNames.push(fill);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'normal') classNames.push(color);
  return (
  <form
    enctype={enctype} target={['blank', '_blank'].includes(openIn) ? '_blank' : '_self'}
    action={action} autocomplete={autocomplete ? 'on' : 'off'} method={method} name={name}
    id={id !== undefined ? id : false} className={[className, ...classNames].join(' ').trim()} {...rest}
  >
    {children}
  </form>
)};

export {Form, FormLegend};