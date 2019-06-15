import React from 'react';
import { Menu, MenuItem } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const MenuHOC = (props) => {
  if (!hasKey(props, 'data'))
    return (
      <Menu {...props} />
    );

  let data = props.data;

  return (
    <Menu {...omitProps(props, ['data'])}>
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
};

export default MenuHOC;
