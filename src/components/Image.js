import React from 'react';

const Image = ({
  width = 'auto',
  height = 'auto',
  id,
  className,
  src,
  alt = 'An image',
  withCaption = false
}) =>
  withCaption ? (
    <figure>
      <img
        className={className}
        id={id}
        height={height}
        width={width}
        src={src}
        alt={alt}
      />
      <figcaption>{alt}</figcaption>
    </figure>
  )
    : (
      <img
        className={className}
        id={id}
        height={height}
        width={width}
        src={src}
        alt={alt}
      />);

export default Image;
