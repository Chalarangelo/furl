import React from 'react';
import Icon from './Icon';

const Dropdown = ({
  isOpen = false,
  text,
  reverse = false,
  id,
  className,
  children }) => {
  let classNames = ['dropdown', reverse ? 'reverse' : '', className];
  return (
    <details className={classNames.join(' ').trim()} id={id} open={isOpen}>
      <summary>{text}
        {reverse
          ? <Icon name='chevron-up' width={16} height={16} />
          : <Icon name='chevron-down' width={16} height={16} />
        }
      </summary>
      <div className='dropdown-content'>
        {children}
      </div>
    </details>
  );
};

export default Dropdown;
