import React from 'react';

const Tooltip = ({
  content,
  position = 'top',
  className,
  children,
  ...rest
}) => {
  const [show, setShow] = React.useState(false);
  return (
    <span className={[className, 'tooltip'].join(' ').trim()} onMouseLeave={() => setShow(false)} {...rest}>
      {show && <span className={`tooltip-bubble tooltip-${position}`}>
        <span className='tooltip-message'>{content}</span>
      </span>}
      <span className='tooltip-trigger' 
        onMouseOver={() => setShow(true)} 
        onFocus={() => setShow(true)} 
        onBlur={() => setShow(false)}
      tabIndex={0}>
        {children}
      </span>
    </span>
  );
};

export default Tooltip;
