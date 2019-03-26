import React from "react";

const Image = ({
  width = 'auto',
  height = 'auto',
  id,
  className,
  src,
  alt = 'an image'
}) =>(
  <img 
    className={className}
    id={id !== undefined ? id : false} 
    height={height} 
    width={width} 
    src ={src}
    alt={alt}
  />);

export default Image;