import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Popover = ({
  content,
  position = 'top',
  className,
  children,
  ...rest
}) => {
  const [show, setShow] = React.useState(false);
  return (
    <span 
      className={combineClassNames([className, 'popover'])}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {show && <span className={`popover-bubble popover-${position}`}>
        <span className='popover-message'>{content}</span>
      </span>}
      <span className='popover-trigger' onClick={() => setShow(!show)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        tabIndex={0}>
        {children}
      </span>
    </span>
  );
};

export default Popover;
