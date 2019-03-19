import React from "react";
import Column from "./Column";

const Row = ({ id, children }) => {
  if (!Array.isArray(children)) children = [children];
  const columns = children.filter(item => Column.name == item.type.name);
  return (<div 
      id={id !== undefined ? id : false} className='grid-row'>{columns}</div>);
}

export default Row;