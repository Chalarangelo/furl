import React from 'react';

const ModalSection = ({
  height = 'auto',
  media = '',
  id,
  className,
  children,
  ...rest
}) => {
  if (media.length) {
    return (<div className={[className, 'modal-media-section'].join(' ').trim()}
      id={id} {...rest} style={{ height: height, backgroundImage: `url(${encodeURI(media)})` }} />);
  } else {
    return (<div className={[className, 'modal-section'].join(' ').trim()}
      id={id} {...rest}>{children}</div>);
  }
};

const Modal = ({
  // color = 'normal',
  // size = 'normal',
  id,
  className,
  children,
  ...rest
}) => (
  <div
    className={['modal', className].join(' ').trim()}
    id={id}
    {...rest}
  >
    {children}
  </div>
);

const ModalCenter = React.forwardRef(
  ({isOpen = false, id, className, children, ...rest}, ref) => {
    let [__isOpen, __setIsOpen] = React.useState(isOpen);
    let [__content, __setContent] = React.useState(children);
    React.useImperativeHandle(ref, () => ({
      setContent: (content) => {
        __setContent(content);
      },
      show: () => {
        __setIsOpen(true);
      },
      hide: () => {
        __setIsOpen(false);
      }
    }));
    return (
      __isOpen
        ? <div className={['modal-center', className].join(' ').trim()} id={id} {...rest}>
          <div className='modal-overlay' />
          {__content}
        </div>
        : ''
    );
  }
);

export {ModalCenter, Modal, ModalSection};