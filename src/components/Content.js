import React from 'react';
import { combineClassNames } from '../utilities/utils';

const Content = ({ className, children, ...rest }) => {
  return (<main
    className={combineClassNames([className, 'layout-content'])} {...rest}>{children}</main>);
};

export default Content;
