import React from 'react';

const Popover = ({
  content,
  position = 'top',
  id,
  className,
  children
}) => {
  const [show, setShow] = React.useState(false);
  return (
    <span className={[className, 'popover'].join(' ').trim()} id={id}>
      {show && <div className={`popover-bubble popover-${position}`}>
        <div className='popover-message'>{content}</div>
      </div>}
      <span className='popover-trigger' onClick={() => setShow(!show)}>
        {children}
      </span>
    </span>
  );
};

export default Popover;
