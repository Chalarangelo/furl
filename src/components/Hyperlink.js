import React from 'react';
import { omitProps, combineStyles } from '../utilities/utils';

const Hyperlink = ({ openIn = 'self', href, className, children, ...rest }) =>
  (['external', '_external'].includes(openIn)
    ? <a
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      className={className}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {children}
    </a>
    : <a
      href={href}
      target={['blank', '_blank'].includes(openIn) ? '_blank' : '_self'}
      className={className}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {children}
    </a>)
;

export default Hyperlink;
