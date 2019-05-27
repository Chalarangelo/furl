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
  id,
  className,
  children,
  ...rest }) => {
  children = normalizeChildren(children);
  let classNames = [selected ? 'selected' : '', className, 'menu-item', children.some(item => item.type && item.type.name && Dropdown.name === item.type.name) ? 'with-dropdown' : ''];
  return (
    <Button
      id={id}
      className={classNames.join(' ').trim()}
      fill='' size='normal' text='normal' color=''
      type={href !== undefined ? 'link' : 'button'}
      disabled={disabled}
      openIn={openIn}
      onClick={onClick}
      href={href}
      {...rest}
    >
      {children}
    </Button>
  );
};

const Menu = ({ type = 'horizontal', highlight = 'top', id, className, children, ...rest }) => {
  children = normalizeChildren(children);
  const menuItems = children.filter(item => MenuItem.name === item.type.name);
  let classNames = [type, className, `${highlight}-highlight`, 'menu'];
  return (<nav
    id={id} className={classNames.join(' ').trim()} {...rest}>{menuItems}</nav>);
};

export {Menu, MenuItem};
