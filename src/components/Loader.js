import React from 'react';
import Icon from './Icon';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Loader = ({
  color = 'normal',
  size = 'normal',
  className,
  ...rest
}) => (
  <Icon
    role='progressbar'
    name='circle'
    width={48}
    height={48}
    className={combineClassNames(['loader', color !== 'normal' ? color : '', size !== 'normal' ? size : '', className])}
    style={combineStyles(rest, rest.style, size === 'normal' ? {transform: 'scale(0.75)'} : {})}
    {...omitProps(rest)}
  />
);

export default Loader;
