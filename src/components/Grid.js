import React from 'react';
import {normalizeChildren} from '../utilities/utils';
import Row from './Row';
import Column from './Column';

const Grid = ({ justify = 'start', align = 'start', className, children, ...rest }) => {
  const rows = normalizeChildren(children).filter(item => Row.name === item.type.name);
  return (<div
    className={['grid-container', className, `align-${align}`, `justify-${justify}`].join(' ').trim()}
    {...rest}>
    {rows}
  </div>);
};

export { Grid, Row, Column };
