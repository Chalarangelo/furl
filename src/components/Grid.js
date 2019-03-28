import React from "react";
import {normalizeChildren} from "../utilities/utils";
import Row from "./Row";
import Column from "./Column";

const Grid = ({ justify = 'start', align = 'start', id, className, children }) => {
  normalizeChildren(children);
  const rows = children.filter(item => Row.name == item.type.name);
  return (<div
    id={id !== undefined ? id : false} className={['grid-container', className, `align-${align}`, `justify-${justify}`].join(' ').trim()} >{rows}</div>);
}

export { Grid , Row, Column };