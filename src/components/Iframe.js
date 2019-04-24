import React from "react";

const Iframe = ({
  width = 'auto',
  height = 'auto',
  id,
  className,
  src,
  alt = 'An image',
  withCaption = false,
  allowFullScreen = false,
  children
}) =>
  withCaption ? (
  <figure>
    <iframe 
      className={className}
      id={id !== undefined ? id : false} 
      height={height} 
      width={width} 
      src ={src}
      title={alt}
      allowFullScreen={allowFullScreen}
    >
      {children}
    </iframe>
    <figcaption>{alt}</figcaption>
  </figure>
  )
  : (
  <iframe 
    className={className}
    id={id !== undefined ? id : false} 
    height={height} 
    width={width} 
    src ={src}
    title={alt}
    allowFullScreen={allowFullScreen}
  >
    {children}
  </iframe>);

export default Iframe;