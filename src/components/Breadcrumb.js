import React from "react";
import { normalizeChildren } from "../utilities/utils";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = ({
  separator = '/',
  id,
  className,
  children
}) => {
  children = normalizeChildren(children);
  let breadcrumbs = children.filter(item => BreadcrumbItem.name == item.type.name);
  breadcrumbs = breadcrumbs.reduce((acc,v,i) => {
    acc.push(v);
    if (i !== breadcrumbs.length - 1) acc.push(<span className='breadcrumb-separator'>{separator}</span>);
    return acc;
  }, []);
  let classNames = [className, 'breadcrumb'];
  return (
    <nav id={id !== undefined ? id : false} className={classNames.join(' ').trim()}>
      {breadcrumbs}
    </nav>
  );
};

export { Breadcrumb, BreadcrumbItem };