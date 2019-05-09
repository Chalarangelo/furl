import React from "react";
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
  id, 
  className,
  ...rest
}) => (
  <span 
    id={id !== undefined ? id : false} 
    className={[ className, 'icon'].join(' ').trim()}
    {...rest}
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