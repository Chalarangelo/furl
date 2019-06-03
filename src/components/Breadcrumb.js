import React from 'react';
import { normalizeChildren, generateUniqueId } from '../utilities/utils';

const BreadcrumbItem = ({ id, className, children, ...rest }) => (
  <span id={id} className={['breadcrumb-item', className].join(' ').trim()} {...rest}>
    {children}
  </span>
);

const Breadcrumb = ({
  separator = '/',
  id,
  className,
  children,
  ...rest
}) => {
  const [breadcrumbsId, setBreadcrumbsId] = React.useState(generateUniqueId('breadcrumb'));
  children = normalizeChildren(children);
  let breadcrumbs = children.filter(item => BreadcrumbItem.name === item.type.name);
  breadcrumbs = breadcrumbs.reduce((acc, v, i) => {
    acc.push(v);
    if (i !== breadcrumbs.length - 1) acc.push(<span className='breadcrumb-separator' key={`${breadcrumbsId}-${i}`}>{separator}</span>);
    return acc;
  }, []);
  let classNames = [className, 'breadcrumb'];
  return (
    <nav id={id} className={classNames.join(' ').trim()} {...rest}>
      {breadcrumbs}
    </nav>
  );
};

export { Breadcrumb, BreadcrumbItem };
