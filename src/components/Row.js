import React from 'react';
import { normalizeChildren, combineClassNames } from '../utilities/utils';
import Column from './Column';

const Row = ({ className, children, ...rest }) => {
  const columns = normalizeChildren(children).filter(item => Column.name === item.type.name);
  return (<div className={combineClassNames([className, 'grid-row'])} {...rest}>{columns}</div>);
};

export default Row;
