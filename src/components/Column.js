import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const sizeNames = ['xs', 'sm', 'md', 'lg'];
const Column = ({
  size = 'fluid',
  className,
  children,
  ...rest
}) => {
  let sizes; let classNames = []; let style;
  if (!Array.isArray(size)) sizes = [size, size, size, size];
  else sizes = size;

  style = sizes.reduce((acc, v, i) => {
    if ((+v >= 1 && +v <= 12) || (v === 'fluid')) {
      return acc;
    } else if (+v < 1) {
      switch (i) {
        case 0:
          return acc + `.grid-col-xs-c${`${v}`.replace(/\(|\)|\.|\s|%/g, '')} { --col-xs-size: ${v * 100}%; } `;
        case 1:
          return acc + `.grid-col-sm-c${`${v}`.replace(/\(|\)|\.|\s|%/g, '')} { --col-sm-size: ${v * 100}%; } `;
        case 2:
          return acc + `.grid-col-md-c${`${v}`.replace(/\(|\)|\.|\s|%/g, '')} { --col-md-size: ${v * 100}%; } `;
        case 3:
          return acc + `.grid-col-lg-c${`${v}`.replace(/\(|\)|\.|\s|%/g, '')} { --col-lg-size: ${v * 100}%; } `;
        default:
          return acc;
      }
    } else {
      switch (i) {
        case 0:
          return acc + `.grid-col-xs-p${`${v}`.replace(/\(|\)|\.|\s|%/g, '')} { --col-xs-size: ${v}; } `;
        case 1:
          return acc + `.grid-col-sm-p${`${v}`.replace(/\(|\)|\.|\s|%/g, '')} { --col-sm-size: ${v}; } `;
        case 2:
          return acc + `.grid-col-md-p${`${v}`.replace(/\(|\)|\.|\s|%/g, '')} { --col-md-size: ${v}; } `;
        case 3:
          return acc + `.grid-col-lg-p${`${v}`.replace(/\(|\)|\.|\s|%/g, '')} { --col-lg-size: ${v}; } `;
        default:
          return acc;
      }
    }
  }, '');

  classNames = sizes.map((v, i) => `grid-col-${sizeNames[i]}-${((+v >= 1 && +v <= 12) || (v === 'fluid')) ? `${v}` : (+v < 1) ? `c${`${v}`.replace(/\(|\)|\.|\s|%/g, '')}` : `p${`${v}`.replace(/\(|\)|\.|\s|%/g, '')}`}`);
  if (style.length > 0) {
    return (<>
      <style>{style}</style>
      <div 
        className={combineClassNames([className, ...classNames])}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      >
        {children}
      </div>
    </>);
  } else {
    return (
      <div 
        className={combineClassNames([className, ...classNames])}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      >
        {children}
      </div>
    );
  }
};

export default Column;
