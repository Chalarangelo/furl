import React from 'react';

const Popover = ({
  content,
  position = 'top',
  id,
  className,
  children,
  ...rest
}) => {
  const [show, setShow] = React.useState(false);
  return (
    <span className={[className, 'popover'].join(' ').trim()} id={id} {...rest}>
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
