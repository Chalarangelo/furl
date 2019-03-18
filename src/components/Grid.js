import React from "react";
import Row from "./Row";
import Column from "./Column";

const Grid = ({ children }) => {
  if (!Array.isArray(children)) children = [children];
  const rows = children.filter(item => Row.name == item.type.name);
  return (<div className='grid-container'>{rows}</div>);
}

export { Grid , Row, Column };