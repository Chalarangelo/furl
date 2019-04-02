import React from "react";

const Content = ({ id, className, children }) => {
  return (<main 
    id={id !== undefined ? id : false} className={[className, 'layout-content'].join(' ').trim()}>{children}</main>);
}

export default Content;