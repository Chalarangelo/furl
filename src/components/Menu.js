import React from 'react';
import {normalizeChildren} from '../utilities/utils';
import Button from './Button';
import Dropdown from './Dropdown';

const MenuItem = ({
  selected = false,
  disabled = false,
  openIn,
  href,
  onClick,
  className,
  children,
  ...rest }) => {
  let _children = normalizeChildren(children);
  let classNames = [selected ? 'selected' : '', className, 'menu-item', _children.some(item => item.type && item.type.name && Dropdown.name === item.type.name) ? 'with-dropdown' : ''];
  return (
    <Button
      className={classNames.join(' ').trim()}
      fill='' size='normal' text='normal' color=''
      type={href !== undefined ? 'link' : 'button'}
      disabled={disabled}
      openIn={openIn}
      onClick={onClick}
      href={href}
      {...rest}
    >
      {_children}
    </Button>
  );
};

const Menu = ({ type = 'horizontal', highlight = 'top', className, children, ...rest }) => {
  const menuItems = normalizeChildren(children).filter(item => MenuItem.name === item.type.name);
  let classNames = [type, className, `${highlight}-highlight`, 'menu'];
  return (<nav
    className={classNames.join(' ').trim()} {...rest}>{menuItems}</nav>);
};

export {Menu, MenuItem};
