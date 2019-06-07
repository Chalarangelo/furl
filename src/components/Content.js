import React from 'react';

const Content = ({ className, children, ...rest }) => {
  return (<main
    className={[className, 'layout-content'].join(' ').trim()} {...rest}>{children}</main>);
};

export default Content;
