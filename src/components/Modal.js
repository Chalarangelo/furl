import React from "react";

const Modal = ({
  color = 'normal',
  size = 'normal',
  isOpen = false,
  id,
  className,
  children
}) => (
  isOpen ?
  <React.Fragment>
  <div className='modal-overlay' />
    <div
      className={['modal', className].join(' ').trim()}
      id={id !== undefined ? id : false} 
    >
      {children}
    </div>
  </React.Fragment>
  : ''
  );

export default Modal;