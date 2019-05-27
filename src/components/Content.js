import React from 'react';

const Content = ({ id, className, children, ...rest }) => {
  return (<main
    id={id} className={[className, 'layout-content'].join(' ').trim()} {...rest}>{children}</main>);
};

export default Content;
