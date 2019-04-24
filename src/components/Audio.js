import React from "react";

const Audio = ({
  width = 'auto',
  height = 'auto',
  id,
  className,
  src,
  volume = 1.0,
  autoplay = false,
  controls = false,
  loop = false,
  muted = false,
  preload = true,
  alt = 'An audio clip',
  withCaption = false,
}) =>
  withCaption ? (
  <figure>
    <audio 
      className={className}
      id={id !== undefined ? id : false} 
      height={height} 
      width={width} 
      src ={src}
      title={alt}
      autoplay={autoplay} controls={controls} loop = {loop} muted={muted} preload={preload} volume={volume}
    />
    <figcaption>{alt}</figcaption>
  </figure>
  )
  : (
  <audio 
    className={className}
    id={id !== undefined ? id : false} 
    height={height} 
    width={width} 
    src ={src}
    title={alt}
    autoplay={autoplay} controls={controls} loop = {loop} muted={muted} preload={preload} volume={volume}
  />);

export default Audio;