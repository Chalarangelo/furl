import React from 'react';
import { combineClassNames } from '../utilities/utils';

const Progress = ({
  value = 0,
  max = 100,
  color = 'normal',
  size = 'normal',
  className,
  ...rest
}) => (
  <progress
    value={value} max={max}
    className={combineClassNames([color !== 'normal' ? color : '', size !== 'normal' ? size : '', className])}
    {...rest}
  >
    {`${+value / +max * 100}%`}
  </progress>
);

export default Progress;
