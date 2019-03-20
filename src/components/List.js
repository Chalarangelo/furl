import React from "react";
import ListItem from "./ListItem";

const List = ({ 
  ordered = false,
  listStyle = 'none',
  id, 
  className, 
  children
}) => {
  if (!Array.isArray(children)) children = [children];
  const listItems = children.filter(item => ListItem.name == item.type.name);
  let classNames = [className, listStyle !== 'none' ? listStyle : ''];
  if (ordered)
    return (
    <ol id={id !== undefined ? id : false} className = {classNames.join(' ').trim()}>
        {listItems}
    </ol>
    );
  else
    return (
      <ul id={id !== undefined ? id : false} className={classNames.join(' ').trim()}>
        {listItems}
      </ul>
    );
};

export {List, ListItem};