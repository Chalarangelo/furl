import React from 'react';
import {normalizeChildren} from '../utilities/utils';

const TableCaption = ({ id, className, children, ...rest }) => (
  <caption id={id} className={className} {...rest}>{children}</caption>
);

const TableCell = ({ heading = false, id, className, colSpan = 1, rowSpan = 1, children, ...rest }) => {
  if (heading) return (<th id={id} className={className} colSpan={colSpan} rowSpan={rowSpan} {...rest}>{children}</th>);
  else return (<td id={id} className={className} colSpan={colSpan} rowSpan={rowSpan} {...rest}>{children}</td>);
};

const TableRow = ({ id, className, children, ...rest }) => {
  const cells = normalizeChildren(children).filter(item => TableCell.name === item.type.name);
  return (<tr id={id} className={className} {...rest}>{cells}</tr>);
};

const TableHead = ({ id, className, children, ...rest }) => {
  const headItems = normalizeChildren(children).filter(item => TableRow.name === item.type.name);
  return (<thead id={id} className={className} {...rest}>{headItems}</thead>);
};

const TableBody = ({ id, className, children, ...rest }) => {
  const bodyItems = normalizeChildren(children).filter(item => TableRow.name === item.type.name);
  return (<tbody id={id} className={className} {...rest}>{bodyItems}</tbody>);
};

const Table = ({
  tableStyle = 'none',
  id,
  className,
  children,
  ...rest
}) => {
  const tableItems = normalizeChildren(children).filter(item => TableHead.name === item.type.name || TableBody.name === item.type.name || TableCaption.name === item.type.name);
  let classNames = [tableStyle !== 'none' ? tableStyle : '', className];
  return <table className={classNames.join(' ').trim()} id={id} {...rest}>
    {tableItems}
  </table>;
};

export { Table, TableHead, TableBody, TableRow, TableCell, TableCaption };
