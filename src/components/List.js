import React from 'react';
import { normalizeChildren, combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const ListItem = ({ children, ...rest }) => (
  <li style={combineStyles(rest, rest.style)} {...omitProps(rest)}>{ children }</li>
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
      <ol 
        className={combineClassNames(classNames)}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      >
        {listItems}
      </ol>
    );
  } else {
    return (
      <ul 
        className={combineClassNames(classNames)}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      >
        {listItems}
      </ul>
    );
  }
};

export {List, ListItem};
