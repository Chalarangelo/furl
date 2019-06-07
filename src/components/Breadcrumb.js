import React from 'react';
import { normalizeChildren, generateUniqueId, combineClassNames } from '../utilities/utils';

const BreadcrumbItem = ({ className, children, ...rest }) => (
  <span className={combineClassNames(['breadcrumb-item', className])} {...rest}>
    {children}
  </span>
);

const Breadcrumb = ({
  separator = '/',
  className,
  children,
  ...rest
}) => {
  const [breadcrumbsId, setBreadcrumbsId] = React.useState(generateUniqueId('breadcrumb'));
  let breadcrumbs = normalizeChildren(children).filter(item => BreadcrumbItem.name === item.type.name);
  breadcrumbs = breadcrumbs.reduce((acc, v, i) => {
    acc.push(v);
    if (i !== breadcrumbs.length - 1) acc.push(<span className='breadcrumb-separator' key={`${breadcrumbsId}-${i}`}>{separator}</span>);
    return acc;
  }, []);
  return (
    <nav className={combineClassNames([className, 'breadcrumb'])} {...rest}>
      {breadcrumbs}
    </nav>
  );
};

export { Breadcrumb, BreadcrumbItem };
