import React from 'react';
import { normalizeChildren, combineClassNames } from '../utilities/utils';

const ListItem = ({ className, children, ...rest }) => (
  <li className={className} {...rest}>
    {children}
  </li>
);

const List = ({
  ordered = false,
  listStyle = 'none',
  className,
  children,
  ...rest
}) => {
  const listItems = normalizeChildren(children).filter(item => ListItem.name === item.type.name);
  let classNames = [className, listStyle !== 'none' ? listStyle : ''];
  if (ordered) {
    return (
      <ol className={combineClassNames(classNames)} {...rest}>
        {listItems}
      </ol>
    );
  } else {
    return (
      <ul className={combineClassNames(classNames)} {...rest}>
        {listItems}
      </ul>
    );
  }
};

export {List, ListItem};
