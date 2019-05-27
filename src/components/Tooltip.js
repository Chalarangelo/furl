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
      {show && <div className={`tooltip-bubble tooltip-${position}`}>
        <div className='tooltip-message'>{content}</div>
      </div>}
      <span className='tooltip-trigger' onMouseOver={() => setShow(true)}>
        {children}
      </span>
    </span>
  );
};

export default Tooltip;
