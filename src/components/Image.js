import React from 'react';
import { omitProps, combineStyles } from '../utilities/utils';

const Image = ({
  width = 'auto',
  height = 'auto',
  className,
  src,
  alt = 'An image',
  withCaption = false,
  ...rest
}) =>
  withCaption ? (
    <figure>
      <img
        className={className}
        height={height}
        width={width}
        src={src}
        alt={alt}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />
      <figcaption>{alt}</figcaption>
    </figure>
  )
    : (
      <img
        className={className}
        height={height}
        width={width}
        src={src}
        alt={alt}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />);

export default Image;
