import React from 'react';
import { normalizeChildren } from '../utilities/utils';

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
  id,
  className,
  children,
  ...rest
}) => (
  <div
    className={['modal', className].join(' ').trim()}
    id={id}
    role='dialog'
    {...rest}
  >
    {children}
  </div>
);

const ModalCenter = React.forwardRef(
  ({isOpen = false, id, className, children, ...rest}, ref) => {
    const modal = normalizeChildren(children).filter(item => Modal.name === item.type.name);
    let [__isOpen, __setIsOpen] = React.useState(isOpen);
    let [__content, __setContent] = React.useState(modal);
    React.useImperativeHandle(ref, () => ({
      setContent: (content) => {
        const modal = normalizeChildren(content).filter(item => Modal.name === item.type.name);
        __setContent(modal);
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
