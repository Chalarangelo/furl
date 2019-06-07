import React from 'react';

const FormLegend = ({ className, children, ...rest }) => (
  <legend className={className} {...rest}>{children}</legend>
);

const FormLabel = ({ className, htmlFor, children, ...rest }) => (
  <label htmlFor={htmlFor} className={className} {...rest}>{children}</label>
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
      className={[className, ...classNames].join(' ').trim()} {...rest}
    >
      {children}
    </form>
  );
};

export { Form, FormLegend, FormLabel };
