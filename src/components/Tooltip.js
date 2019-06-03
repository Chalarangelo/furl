import React from 'react';

const Tooltip = ({
  content,
  position = 'top',
  id,
  className,
  children,
  ...rest
}) => {
  const [show, setShow] = React.useState(false);
  return (
    <span id={id} className={[className, 'tooltip'].join(' ').trim()} onMouseLeave={() => setShow(false)} {...rest}>
      {show && <span className={`tooltip-bubble tooltip-${position}`}>
        <span className='tooltip-message'>{content}</span>
      </span>}
      <span className='tooltip-trigger' onMouseOver={() => setShow(true)}>
        {children}
      </span>
    </span>
  );
};

export default Tooltip;
