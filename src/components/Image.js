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
}) => {
  let _image = (
    <img
      className={className}
      height={height}
      width={width}
      src={src}
      alt={alt}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    />
  );
  return withCaption ? (
    <figure>
      {_image}
      <figcaption>{alt}</figcaption>
    </figure>
  ) : _image;
};

export default Image;
