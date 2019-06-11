import React from 'react';
import Icon from './Icon';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Sidebar = ({ className, outline = 'none', children, ...rest }) => {
  return (
    <aside
      className={combineClassNames([ outline !== 'none' ? outline : '', className, 'layout-sidebar' ])}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {children}
    </aside>
  );
};

/* istanbul ignore next */
const SidebarTab = ({ open, onClick, ...rest }) =>
  open
    ? <>
      <button 
        className='layout-sidebar-tab' onClick={onClick} 
        title='Hide sidebar'
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      >
        <Icon name='x' />
      </button>
      <div className='layout-sidebar-overlay' />
    </>
    : <button 
        className='layout-sidebar-tab' onClick={onClick} 
        title='Show sidebar'
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      >
      <Icon name='menu' />
    </button>
;

export {Sidebar, SidebarTab};
