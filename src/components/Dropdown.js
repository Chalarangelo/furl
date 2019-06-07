import React from 'react';
import Icon from './Icon';
import { combineClassNames } from '../utilities/utils';

const Dropdown = ({
  isOpen = false,
  text,
  reverse = false,
  className,
  children,
  ...rest }) => {
  let classNames = ['dropdown', reverse ? 'reverse' : '', className];
  return (
    <details className={combineClassNames(classNames)} open={isOpen} {...rest}>
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
