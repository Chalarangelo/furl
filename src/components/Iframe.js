import React from 'react';
import { omitProps, combineStyles } from '../utilities/utils';

const Iframe = ({
  width = 'auto',
  height = 'auto',
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
        height={height}
        width={width}
        src={src}
        title={alt}
        allowFullScreen={allowFullScreen}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      >
        {children}
      </iframe>
      <figcaption>{alt}</figcaption>
    </figure>
  )
    : (
      <iframe
        className={className}
        height={height}
        width={width}
        src={src}
        title={alt}
        allowFullScreen={allowFullScreen}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      >
        {children}
      </iframe>);

export default Iframe;
