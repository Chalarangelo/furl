import React from 'react';
import Icon from './Icon';
import { combineClassNames } from '../utilities/utils';

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
    <details className={combineClassNames(classNames)} open={isOpen} {...rest}>
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
