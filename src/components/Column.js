import React from "react";

const sizeNames = ['xs','sm','md','lg'];
const Column = ({ 
  size = 'fluid',
  offset = '0',
  order = 'normal', 
  children 
}) => {
  let sizes, offsets, orders, classNames = [], style;
  if (!Array.isArray(size)) sizes = [size, size, size, size];
  else sizes = size;
  if (!Array.isArray(offset)) offsets = [offset, offset, offset, offset];
  else offsets = offset;
  if (!Array.isArray(order)) orders = [order, order, order, order];
  else orders = order;

  style = sizes.reduce((acc,v,i) => {
    if (+v >= 1 && +v <= 12 || v == 'fluid') {
      return acc;
    }
    else if (+v < 1) {
      switch (i) {
        case 0:
          return acc + `.grid-col-xs-c${`${v}`.replace('.','')} { --col-size: ${v * 100}%; } `;
        case 1:
          return acc + `@media screen and (min-width: 600px) { .grid-col-sm-c${`${v}`.replace('.', '')} { --col-size: ${v * 100}%; }} `;
        case 2:
          return acc + `@media screen and (min-width: 900px) {.grid-col-md-c${`${v}`.replace('.', '')} { --col-size: ${v * 100}%; }} `;
        case 3:
          return acc + `@media screen and (min-width: 1200px) {.grid-col-lg-c${`${v}`.replace('.', '')} { --col-size: ${v * 100}%; }} `;
        default:
          return acc;
      }
    }
    else {
      switch (i) {
        case 0:
          return acc + `.grid-col-xs-p${`${v}`.replace('.', '')} { --col-size: ${v}; } `;
        case 1:
          return acc + `@media screen and (min-width: 600px) { .grid-col-sm-p${`${v}`.replace('.', '')} { --col-size: ${v}; }} `;
        case 2:
          return acc + `@media screen and (min-width: 900px) {.grid-col-md-p${`${v}`.replace('.', '')} { --col-size: ${v}; }} `;
        case 3:
          return acc + `@media screen and (min-width: 1200px) {.grid-col-lg-p${`${v}`.replace('.', '')} { --col-size: ${v}; }} `;
        default:
          return acc;
      }
    }
  }, '');

  classNames = sizes.map((v, i) => `grid-col-${sizeNames[i]}-${(+v >= 1 && +v <= 12 || v == 'fluid') ? `${v}` : (+v < 1) ? `c${`${v}`.replace('.', '')}` :  `p${`${v}`.replace('.', '')}`}`);
  classNames = [...classNames, ...offsets.map((v, i) => `grid-col-${sizeNames[i]}-offset-${v}`)];
  classNames = [...classNames, ...orders.map((v, i) => `grid-col-${sizeNames[i]}-${v}`)];
  if(style.length > 0) 
    return (<React.Fragment>
      <style>{style}</style>
      <div className={classNames.join(' ')}>
          {children}
      </div>
    </React.Fragment>);
  else
    return (<div className={classNames.join(' ')}>
      {children}
    </div>);
}

export default Column;