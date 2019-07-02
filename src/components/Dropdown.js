import React from 'react';
import Icon from './Icon';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Dropdown = ({
  isOpen = false,
  title ='Show/hide content',
  reverse = false,
  className,
  children,
  ...rest }) => {
  let classNames = ['dropdown', reverse ? 'reverse' : '', className];
  return (
    <details 
      className={combineClassNames(classNames)} 
      open={isOpen}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      <summary>{title}
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
