import React from 'react';

const FormLegend = ({ id, className, children, ...rest }) => (
  <legend id={id} className={className} {...rest}>{children}</legend>
);

const FormLabel = ({ id, className, htmlFor, children, ...rest }) => (
  <label htmlFor={htmlFor} id={id} className={className} {...rest}>{children}</label>
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
      encType={enctype} target={['blank', '_blank'].includes(openIn) ? '_blank' : '_self'}
      action={action} autoComplete={autocomplete ? 'on' : 'off'} method={method} name={name}
      id={id} className={[className, ...classNames].join(' ').trim()} {...rest}
    >
      {children}
    </form>
  );
};

export { Form, FormLegend, FormLabel };
