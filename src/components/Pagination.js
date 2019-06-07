import React from 'react';
import { normalizeChildren, combineClassNames } from '../utilities/utils';
import Button from './Button';

const PaginationItem = ({
  fill = 'flat',
  size = 'normal',
  shape = 'normal',
  className,
  children,
  ...rest }) => (
  <span // eslint-disable-line semistandard-react/jsx-indent
    className={combineClassNames(['pagination-item', fill, size !== 'normal' ? size : '', shape !== 'normal' ? shape : '', className])}
    {...rest}>
    {children}
  </span>
);

const Pagination = ({
  size = 'normal',
  shape = 'normal',
  className,
  children,
  ...rest
}) => {
  const buttons = normalizeChildren(children).filter(item => Button.name === item.type.name || PaginationItem.name === item.type.name)
    .map(b => {
      let _b = Object.assign({}, b);
      _b.props = Object.assign({
        fill: 'flat',
        size: size,
        shape: shape
      }, b.props);
      return _b;
    });
  let classNames = [className, 'pagination'];
  if (size !== 'normal') classNames.push(size);
  if (shape !== 'normal') classNames.push(shape);
  return (
    <div className={combineClassNames(classNames)} {...rest} role='group'>
      {buttons}
    </div>
  );
};

export {Pagination, PaginationItem};
