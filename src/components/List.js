import React from 'react';
import {normalizeChildren} from '../utilities/utils';

const ListItem = ({ id, className, children, ...rest }) => (
  <li id={id} className={className} {...rest}>
    {children}
  </li>
);

const List = ({
  ordered = false,
  listStyle = 'none',
  id,
  className,
  children,
  ...rest
}) => {
  const listItems = normalizeChildren(children).filter(item => ListItem.name === item.type.name);
  let classNames = [className, listStyle !== 'none' ? listStyle : ''];
  if (ordered) {
    return (
      <ol id={id} className={classNames.join(' ').trim()} {...rest}>
        {listItems}
      </ol>
    );
  } else {
    return (
      <ul id={id} className={classNames.join(' ').trim()} {...rest}>
        {listItems}
      </ul>
    );
  }
};

export {List, ListItem};
