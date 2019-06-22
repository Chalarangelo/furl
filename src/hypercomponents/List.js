import React from 'react';
import { List, ListItem } from '../components';
import { isUndefined } from '../utilities/utils';

const ListHOC = ({
  data,
  ...rest
}) =>
  isUndefined(data) ?
    (<List {...rest} />) :
    (
      <List {...rest}>
        {data.map((val, i) => (<ListItem key={`i_${i}_${val}`}>{val}</ListItem>))}
      </List>
    );

export default ListHOC;
