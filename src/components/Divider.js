import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Divider = ({ vertical = false, className, ...rest }) =>
  vertical ? (
    <span 
      className={combineClassNames(['divider', className])} 
      role='separator'
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    />
  )
    : (
      <hr 
        className={className}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />
    );

export default Divider; 