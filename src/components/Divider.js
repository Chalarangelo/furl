import React from 'react';
import { combineClassNames } from '../utilities/utils';

const Divider = ({ vertical = false, className, ...rest }) =>
  vertical ? (
    <span className={combineClassNames(['divider', className])} {...rest} role='separator'/>
  )
    : (
      <hr className={className} {...rest} />
    );

export default Divider; 