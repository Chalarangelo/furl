import React from 'react';
import {normalizeChildren} from '../utilities/utils';

const TableCaption = ({ className, children, ...rest }) => (
  <caption className={className} {...rest}>{children}</caption>
);

const TableCell = ({ heading = false, className, colSpan = 1, rowSpan = 1, children, ...rest }) => {
  if (heading) return (<th className={className} colSpan={colSpan} rowSpan={rowSpan} {...rest}>{children}</th>);
  else return (<td className={className} colSpan={colSpan} rowSpan={rowSpan} {...rest}>{children}</td>);
};

const TableRow = ({ className, children, ...rest }) => {
  const cells = normalizeChildren(children).filter(item => TableCell.name === item.type.name);
  return (<tr className={className} {...rest}>{cells}</tr>);
};

const TableHead = ({ className, children, ...rest }) => {
  const headItems = normalizeChildren(children).filter(item => TableRow.name === item.type.name);
  return (<thead className={className} {...rest}>{headItems}</thead>);
};

const TableBody = ({ className, children, ...rest }) => {
  const bodyItems = normalizeChildren(children).filter(item => TableRow.name === item.type.name);
  return (<tbody className={className} {...rest}>{bodyItems}</tbody>);
};

const Table = ({
  tableStyle = 'none',
  className,
  children,
  ...rest
}) => {
  const tableItems = normalizeChildren(children).filter(item => TableHead.name === item.type.name || TableBody.name === item.type.name || TableCaption.name === item.type.name);
  let classNames = [tableStyle !== 'none' ? tableStyle : '', className];
  return <table className={classNames.join(' ').trim()} {...rest}>
    {tableItems}
  </table>;
};

export { Table, TableHead, TableBody, TableRow, TableCell, TableCaption };
