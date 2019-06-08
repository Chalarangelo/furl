import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Content = ({ className, children, ...rest }) => {
  return (
    <main
      className={combineClassNames([className, 'layout-content'])}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      {children}
    </main>
  );
};

export default Content;
