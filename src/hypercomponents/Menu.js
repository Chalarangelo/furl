import React from 'react';
import { Menu, MenuItem } from '../components';
import { isUndefined, hasKey, omitProps } from '../utilities/utils';

const MenuHOC = ({
  data,
  ...rest
}) =>
  isUndefined(data) ?
    (<Menu {...rest} />) :
    (
      <Menu {...rest}>
        {data.map((val, i) => {
          let content = hasKey(val, 'title') ? val.title : val;
          return (
            <MenuItem key={`i_${i}_${content}`} {...omitProps(val, ['title'])}>
              {content}
            </MenuItem>
          );
        })}
      </Menu>
    );

export default MenuHOC;
