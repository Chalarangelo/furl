import React from 'react';

const Iframe = ({
  width = 'auto',
  height = 'auto',
  id,
  className,
  src,
  alt = 'An image',
  withCaption = false,
  allowFullScreen = false,
  children,
  ...rest
}) =>
  withCaption ? (
    <figure>
      <iframe
        className={className}
        id={id}
        height={height}
        width={width}
        src={src}
        title={alt}
        allowFullScreen={allowFullScreen}
        {...rest}
      >
        {children}
      </iframe>
      <figcaption>{alt}</figcaption>
    </figure>
  )
    : (
      <iframe
        className={className}
        id={id}
        height={height}
        width={width}
        src={src}
        title={alt}
        allowFullScreen={allowFullScreen}
        {...rest}
      >
        {children}
      </iframe>);

export default Iframe;
