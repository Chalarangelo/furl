import React from 'react';
import { List, ListItem } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const ListHOC = (props) => {
  if(!hasKey(props, 'data')) 
    return (
      <List {...props} />
    );
  
  let data = props.data;

  return (
    <List {...omitProps(props, ['data'])}>
      {data.map((val, i ) => (<ListItem key={`i_${i}_${val}`}>{val}</ListItem>))}
    </List>
  );
};

export default ListHOC;
