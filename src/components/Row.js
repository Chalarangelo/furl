import React from "react";
import {normalizeChildren} from "../utilities/utils";
import Column from "./Column";

const Row = ({ id, className, children }) => {
  children = normalizeChildren(children);
  const columns = children.filter(item => Column.name === item.type.name);
  return (<div 
    id={id !== undefined ? id : false} className={[className, 'grid-row'].join(' ').trim()}>{columns}</div>);
}

export default Row;