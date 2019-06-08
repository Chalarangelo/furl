import React from 'react';
import { normalizeChildren, combineClassNames, omitProps, combineStyles } from '../utilities/utils';
import Row from './Row';
import Column from './Column';

const Grid = ({ justify = 'start', align = 'start', className, children, ...rest }) => {
  const rows = normalizeChildren(children).filter(item => Row.name === item.type.name);
  return (
    <div
      className={combineClassNames(['grid-container', className, `align-${align}`, `justify-${justify}`])}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {rows}
    </div>
  );
};

export { Grid, Row, Column };
