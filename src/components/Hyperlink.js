import React from "react";

const Hyperlink = ({openIn = 'self', href, children }) => 
  ['external', '_external'].includes(openIn) 
  ?
    <a
      href={href} 
      rel='noopener noreferrer'
      target='_blank'
    >
      {children}
    </a>
  :
    <a 
      href={href} 
      target={['blank', '_blank'].includes(openIn) ? '_blank' : '_self'}
    >
      {children}
    </a>
;

export default Hyperlink;