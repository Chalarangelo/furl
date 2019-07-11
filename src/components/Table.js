import React from 'react';
import { normalizeChildren, combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const TableCaption = ({ className, children, ...rest }) => (
  <caption 
    className={className}
    style={combineStyles(rest, rest.style)}
    {...omitProps(rest)}
  >
    {children}
  </caption>
);

const TableCell = ({ heading = false, className, colSpan = 1, rowSpan = 1, children, ...rest }) => {
  if (heading) return (
    <th 
      className={className} 
      colSpan={colSpan} 
      rowSpan={rowSpan}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {children}
    </th>
  );
  else return (
    <td 
      className={className} 
      colSpan={colSpan} 
      rowSpan={rowSpan}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {children}
    </td>
  );
};

const TableRow = ({ className, children, ...rest }) => {
  const cells = normalizeChildren(children).filter(item => item.type && item.type.name && TableCell.name === item.type.name);
  return (
    <tr 
      className={className}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {cells}
    </tr>
  );
};

const TableHead = ({ className, children, ...rest }) => {
  const headItems = normalizeChildren(children).filter(item => item.type && item.type.name && TableRow.name === item.type.name);
  return (
    <thead 
      className={className}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {headItems}
    </thead>
  );
};

const TableBody = ({ className, children, ...rest }) => {
  const bodyItems = normalizeChildren(children).filter(item => item.type && item.type.name && TableRow.name === item.type.name);
  return (
    <tbody 
      className={className}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {bodyItems}
    </tbody>
  );
};

const Table = ({
  tableStyle = 'none',
  className,
  children,
  ...rest
}) => {
  const tableItems = normalizeChildren(children).filter(item => item.type && item.type.name && (TableHead.name === item.type.name || TableBody.name === item.type.name || TableCaption.name === item.type.name));
  let classNames = [tableStyle !== 'none' ? tableStyle : '', className];
  return (
    <table 
      className={combineClassNames(classNames)}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {tableItems}
    </table>
  );
};

export { Table, TableHead, TableBody, TableRow, TableCell, TableCaption };
