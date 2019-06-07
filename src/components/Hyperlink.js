import React from 'react';

const Hyperlink = ({ openIn = 'self', href, className, children, ...rest }) =>
  (['external', '_external'].includes(openIn)
    ? <a
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      className={className}
      {...rest}
    >
      {children}
    </a>
    : <a
      href={href}
      target={['blank', '_blank'].includes(openIn) ? '_blank' : '_self'}
      className={className}
      {...rest}
    >
      {children}
    </a>)
;

export default Hyperlink;
