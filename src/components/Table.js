import React from 'react';
import {normalizeChildren} from '../utilities/utils';

const TableCaption = ({ id, className, children }) => (
  <caption id={id !== undefined ? id : false} className={className}>{children}</caption>
);

const TableCell = ({ heading = false, id, className, colSpan = 1, rowSpan = 1, children }) => {
  if (heading) return (<th id={id !== undefined ? id : false} className={className} colSpan={colSpan} rowSpan={rowSpan}>{children}</th>);
  else return (<td id={id !== undefined ? id : false} className={className} colSpan={colSpan} rowSpan={rowSpan}>{children}</td>);
};

const TableRow = ({ id, className, children }) => {
  if (!Array.isArray(children)) children = [children];
  const cells = children.filter(item => TableCell.name === item.type.name);
  return (<tr id={id !== undefined ? id : false} className={className}>{cells}</tr>);
};

const TableHead = ({ id, className, children }) => {
  if (!Array.isArray(children)) children = [children];
  const headItems = children.filter(item => TableRow.name === item.type.name);
  return (<thead id={id !== undefined ? id : false} className={className}>{headItems}</thead>);
};

const TableBody = ({ id, className, children }) => {
  if (!Array.isArray(children)) children = [children];
  const bodyItems = children.filter(item => TableRow.name === item.type.name);
  return (<tbody id={id !== undefined ? id : false} className={className}>{bodyItems}</tbody>);
};

const Table = ({
  tableStyle = 'none',
  id,
  className,
  children
}) => {
  children = normalizeChildren(children);
  const tableItems = children.filter(item => TableHead.name === item.type.name || TableBody.name === item.type.name || TableCaption.name === item.type.name);
  let classNames = [tableStyle !== 'none' ? tableStyle : '', className];
  return <table className={classNames.join(' ').trim()} id={id !== undefined ? id : false}>
    {tableItems}
  </table>;
};

export { Table, TableHead, TableBody, TableRow, TableCell, TableCaption };
