import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';
const feather = require('feather-icons');

const Icon = ({
  name,
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 2,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  className,
  ...rest
}) => (
  <span
    title={name}
    className={combineClassNames([ className, 'icon' ])}
    style={combineStyles(rest, rest.style)}
    {...omitProps(rest)}
    dangerouslySetInnerHTML={{ __html: feather.icons[name].toSvg({
      class: className,
      width: width,
      height: height,
      viewBox: viewBox,
      fill: fill,
      stroke: stroke,
      'stroke-width': strokeWidth,
      'stroke-linecap': strokeLinecap,
      'stroke-linejoin': strokeLinejoin
    })}}
  />
);

export default Icon;
