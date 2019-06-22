import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableCaption, Button, Icon } from '../components';
import { isUndefined } from '../utilities/utils';
import { orderBy } from '../utilities/tableUtils';

const updateSorting = (obj, prop) => {
  let _obj = Object.assign({}, obj);
  _obj[prop] = obj[prop] === false ? 'asc' : obj[prop] === 'asc' ? 'desc' : false;
  return _obj; 
}

const TableHOC = ({
  data,
  propertyNames,
  title,
  sortable,
  ...rest
}) => {
  if(isUndefined(data)) 
    return (
      <Table {...rest} />
    );

  let _propertyNames = !isUndefined(propertyNames) ? propertyNames 
    : data.reduce((acc, obj) => {
      let next = acc;
      let keys = Object.keys(obj);
      next = next.filter(v => keys.includes(v));
      return next;
    }, Object.keys(data[0]))
    ;
  let initData = data.map(v => 
    Object.keys(v)
      .filter(k => _propertyNames.includes(k))
      .reduce((acc, key) => ((acc[key] = v[key]), acc), {})
  );

  const [isSorted, setIsSorted] = React.useState(
    _propertyNames.reduce((acc,val) => {acc[val] = false; return acc; }, {})
  );
  const [_data, _setData] = React.useState(initData);

  React.useEffect(() => {
    let sortedProps = Object.keys(isSorted).filter(k => isSorted[k] !== false);
    let propOrders = sortedProps.map(k => isSorted[k]);
    if (sortedProps.data === 0) 
      _setData(initData);
    _setData(orderBy(initData, sortedProps, propOrders));
  }, [isSorted]);

  return (
    <Table {...rest}>
      {title ? (
        <TableCaption>{title}</TableCaption>
      ) : <br/> }
      <TableHead>
        <TableRow>
          {_propertyNames.map(val => (
            <TableCell heading key={`h_${val}`}>
              {val}
              { sortable ? (
                <Button 
                  className='table-control'
                  onClick={() => { setIsSorted(updateSorting(isSorted, val)); }}
                >
                  <Icon 
                    name={isSorted[val] !== false ? 'arrow-up' : 'maximize-2'} 
                    width={20} 
                    height={20} 
                    title={isSorted[val] === false ? 'Sort ascending' : isSorted[val] === 'asc' ? 'Sort descending' : 'Clear sorting'}
                    className = { isSorted[val] === 'desc' ? 'reverse' : isSorted[val] === false ? 'rotated' : ''}
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
            {_propertyNames.map(p => (
              <TableCell key={`i_${i}_${p}`}>{val[p]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableHOC;
