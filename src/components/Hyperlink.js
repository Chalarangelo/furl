import React from 'react';

const Hyperlink = ({ openIn = 'self', href, id, className, children, ...rest }) =>
  (['external', '_external'].includes(openIn)
    ? <a
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      id={id}
      className={className}
      {...rest}
    >
      {children}
    </a>
    : <a
      href={href}
      target={['blank', '_blank'].includes(openIn) ? '_blank' : '_self'}
      id={id}
      className={className}
      {...rest}
    >
      {children}
    </a>)
;

export default Hyperlink;
