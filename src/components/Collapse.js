import React from 'react';
import Icon from './Icon';
import { Paragraph } from './Typography';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Collapse = ({
  isOpen = false,
  fill = 'solid',
  onClick,
  title='Show/hide content',
  className,
  children,
  ...rest }) => {
  let classNames = ['collapse', fill !== 'solid' ? fill : '', className];
  return (
    <details 
      className={combineClassNames(classNames)} 
      open={isOpen} 
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      <summary onClick={onClick}>{title}
        <Icon name='chevron-down' width={16} height={16} />
      </summary>
      <div className='collapse-content'>
        {typeof children === 'string' ? <Paragraph>{children}</Paragraph>: children}
      </div>
    </details>
  );
};

export default Collapse;
