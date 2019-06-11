import React from 'react';
import { normalizeChildren, combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const ModalSection = ({
  height = 'auto',
  media = '',
  className,
  children,
  ...rest
}) => {
  if (media.length) {
    return (
      <div 
        className={combineClassNames([className, 'modal-media-section'])}
        style={combineStyles(rest, rest.style, { height: height, backgroundImage: `url(${encodeURI(media)})` })}
        {...omitProps(rest)}
      />
    );
  } else {
    return (
      <div 
        className={[className, 'modal-section'].join(' ').trim()}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      >
        {children}
      </div>
    );
  }
};

const Modal = ({
  className,
  children,
  ...rest
}) => (
  <div
    className={combineClassNames(['modal', className])}
    role='dialog'
    style={combineStyles(rest, rest.style)}
    {...omitProps(rest)}
  >
    {children}
  </div>
);

const ModalCenter = React.forwardRef(
  ({isOpen = false, className, children, ...rest}, ref) => {
    const modal = normalizeChildren(children).filter(item => Modal.name === item.type.name);
    let [__isOpen, __setIsOpen] = React.useState(isOpen);
    let [__content, __setContent] = React.useState(modal);
    /* istanbul ignore next */
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
        ? <div 
            className={combineClassNames(['modal-center', className])}
            style={combineStyles(rest, rest.style)}
            {...omitProps(rest)}
          >
            <div className='modal-overlay' />
            {__content}
          </div>
        : ''
    );
  }
);

export {ModalCenter, Modal, ModalSection};
