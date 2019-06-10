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
    width={size === 'large' ? 48 : 24}
    height={size === 'large' ? 48 : 24}
    className={combineClassNames(['loader', color !== 'normal' ? color : '', size !== 'normal' ? size : '', className])}
    style={combineStyles(rest, rest.style)}
    {...omitProps(rest)}
  />
);

export default Loader;
