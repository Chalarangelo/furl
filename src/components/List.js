import React from 'react';
import {normalizeChildren} from '../utilities/utils';

const ListItem = ({ id, className, children }) => (
  <li id={id} className={className}>
    {children}
  </li>
);

const List = ({
  ordered = false,
  listStyle = 'none',
  id,
  className,
  children
}) => {
  children = normalizeChildren(children);
  const listItems = children.filter(item => ListItem.name === item.type.name);
  let classNames = [className, listStyle !== 'none' ? listStyle : ''];
  if (ordered) {
    return (
      <ol id={id} className={classNames.join(' ').trim()}>
        {listItems}
      </ol>
    );
  } else {
    return (
      <ul id={id} className={classNames.join(' ').trim()}>
        {listItems}
      </ul>
    );
  }
};

export {List, ListItem};
