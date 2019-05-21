import React from "react";

const ModalSection = ({
  height = 'auto',
  media = '',
  id,
  className,
  children
}) => {
  if(media.length)
    return (<div className={[className, "modal-media-section"].join(' ').trim()}
      id={id !== undefined ? id : false} style={{ height: height, backgroundImage: `url(${encodeURI(media)})`}}/>);
  else
    return (<div className={[className, "modal-section"].join(' ').trim()}
      id={id !== undefined ? id : false}>{children}</div>);
};

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

export {Modal, ModalSection};