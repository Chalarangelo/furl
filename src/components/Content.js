import React from "react";

const Content = ({ id, children }) => {
  return (<main 
          id={id !== undefined ? id : false} className='layout-content'>{children}</main>);
}

export default Content;