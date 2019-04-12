import React from "react";

const BreadcrumbItem = ({ id, className, children}) => (
  <span id={id !== undefined ? id : false} className={['breadcrumb-item', className].join(' ').trim()}>
    {children}
  </span>
);

export default BreadcrumbItem;