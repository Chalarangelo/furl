import React from 'react';
import Icon from './Icon';

const Sidebar = ({ id, className, outline = 'none', children, ...rest }) => {
  return (<aside
    id={id}
    className={[ outline !== 'none' ? outline : '', className, 'layout-sidebar' ].join(' ').trim()}
    {...rest}>
    {children}
  </aside>);
};

const SidebarTab = ({ open, onClick, ...rest }) =>
  open
    ? <React.Fragment>
      <button className='layout-sidebar-tab' onClick={onClick} {...rest}>
        <Icon name='x' />
      </button>
      <div className='layout-sidebar-overlay' />
    </React.Fragment>
    : <button className='layout-sidebar-tab' onClick={onClick} {...rest}>
      <Icon name='menu' />
    </button>
;

export {Sidebar, SidebarTab};
