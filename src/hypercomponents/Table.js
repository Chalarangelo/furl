import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableCaption, Button, Icon } from '../components';
import { hasKey, omitProps } from '../utilities/utils';
import { orderBy } from '../utilities/tableUtils';

const updateSorting = (obj, prop) => {
  let _obj = Object.assign({}, obj);
  _obj[prop] = obj[prop] === false ? 'asc' : obj[prop] === 'asc' ? 'desc' : false;
  return _obj; 
}

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

  const [isSorted, setIsSorted] = React.useState(
    propertyNames.reduce((acc,val) => {acc[val] = false; return acc; }, {})
  );
  const [_data, _setData] = React.useState(data);

  React.useEffect(() => {
    let sortedProps = Object.keys(isSorted).filter(k => isSorted[k] !== false);
    let propOrders = sortedProps.map(k => isSorted[k]);
    if (sortedProps.data === 0) 
      _setData(data);
    _setData(orderBy(data, sortedProps, propOrders));
  }, [isSorted]);

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
                <Button 
                  className='table-control'
                  onClick={() => { setIsSorted(updateSorting(isSorted, val)); }}
                >
                  <Icon 
                    name={isSorted[val] !== 'desc' ? 'arrow-up' : 'maximize-2'} 
                    width={20} 
                    height={20} 
                    title={isSorted[val] === false ? 'Sort ascending' : isSorted[val] === 'asc' ? 'Sort descending' : 'Clear sorting'}
                    className = { isSorted[val] === 'asc' ? 'reverse' : isSorted[val] === 'desc' ? 'rotated' : ''}
                  />
                </Button>) : '' 
              }
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {_data.map((val, i) => (
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
