import React from 'react';
import { omitProps, combineStyles } from '../utilities/utils';

const Iframe = ({
  width = 'auto',
  height = 'auto',
  className,
  src,
  alt = 'An embed',
  withCaption = false,
  allowFullScreen = false,
  children,
  ...rest
}) => {
  let _iframe = (
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
  );
  return withCaption ? (
    <figure>
      {_iframe}
      <figcaption>{alt}</figcaption>
    </figure>
  ) : _iframe;
};

export default Iframe;
