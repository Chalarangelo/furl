import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableCaption, Button, Icon } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const TableHOC = (props) => {
  if(!hasKey(props, 'data')) 
    return (
      <Table {...props} />
    );

  let propertyNames = hasKey(props, 'propertyNames') 
    ? props.propertyNames 
    : props.data.reduce((acc, obj) => {
      let next = acc;
      let keys = Object.keys(obj);
      next = next.filter(v => keys.includes(v));
      return next;
    }, Object.keys(props.data[0]))
    ;
  let data = props.data.map(v => 
    Object.keys(v)
      .filter(k => propertyNames.includes(k))
      .reduce((acc, key) => ((acc[key] = v[key]), acc), {})
  );

  return (
    <Table {...omitProps(props, ['data', 'propertyNames', 'title'])}>
      {props.title ? (
        <TableCaption>{props.title}</TableCaption>
      ) : <br/> }
      <TableHead>
        <TableRow>
          {propertyNames.map(val => (
            <TableCell heading key={`h_${val}`}>
              {val}
              { props.sortable ? (
                <Button className='table-control'>
                  <Icon name='arrow-down' width={20} height={20} title='Sort descending'/>
                </Button>) : '' 
              }
              { props.filterable ? (
                <Button className='table-control'>
                  <Icon name='filter' width={20} height={20} title='Filter column'/>
                </Button>) : '' 
              }
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((val, i) => (
          <TableRow key={`i_${i}`}>
            {propertyNames.map(p => (
              <TableCell key={`i_${i}_${p}`}>{val[p]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableHOC;
