import React from 'react';
import Icon from './Icon';

const Collapse = ({
  isOpen = false,
  fill = 'solid',
  onClick,
  title,
  className,
  children,
  ...rest }) => {
  let classNames = ['collapse', fill !== 'solid' ? fill : '', className];
  return (
    <details className={classNames.join(' ').trim()} open={isOpen} {...rest}>
      <summary onClick={onClick}>{title}
        <Icon name='chevron-down' width={16} height={16} />
      </summary>
      <div className='collapse-content'>
        {children}
      </div>
    </details>
  );
};

export default Collapse;
