import React from "react";
import Row from "./Row";
import Column from "./Column";

const Grid = ({ justify='start', align='start', id, children }) => {
  if (!Array.isArray(children)) children = [children];
  const rows = children.filter(item => Row.name == item.type.name);
  return (<div
    id={id !== undefined ? id : false} className={['grid-container', `align-${align}`, `justify-${justify}`].join(' ')} >{rows}</div>);
}

export { Grid , Row, Column };