import React from 'react';

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
        {...rest}
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
        {...rest}
      />);

export default Image;
