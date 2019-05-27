import React from 'react';
import Icon from './Icon';

const Loader = ({
  color = 'normal',
  size = 'normal',
  id,
  className
}) => (
  <Icon
    name='circle'
    width={size === 'large' ? 48 : 24}
    height={size === 'large' ? 48 : 24}
    className={['loader', color !== 'normal' ? color : '', className].join(' ').trim()}
    id={id}
  />
);

export default Loader;
