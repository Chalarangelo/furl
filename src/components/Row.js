import React from 'react';
import {normalizeChildren} from '../utilities/utils';
import Column from './Column';

const Row = ({ className, children, ...rest }) => {
  const columns = normalizeChildren(children).filter(item => Column.name === item.type.name);
  return (<div className={[className, 'grid-row'].join(' ').trim()} {...rest}>{columns}</div>);
};

export default Row;
