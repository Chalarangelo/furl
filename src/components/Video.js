import React from 'react';

const Video = ({
  width = 'auto',
  height = 'auto',
  id,
  className,
  src,
  autoplay = false,
  controls = false,
  loop = false,
  muted = false,
  preload = true,
  alt = 'A video',
  withCaption = false,
  ...rest
}) =>
  withCaption ? (
    <figure>
      <video
        className={className}
        id={id}
        height={height}
        width={width}
        src={src}
        title={alt}
        autoPlay={autoplay} controls={controls} loop={loop} muted={muted} preload={preload} {...rest}
      />
      <figcaption>{alt}</figcaption>
    </figure>
  )
    : (
      <video
        className={className}
        id={id}
        height={height}
        width={width}
        src={src}
        title={alt}
        autoPlay={autoplay} controls={controls} loop={loop} muted={muted} preload={preload} {...rest}
      />);

export default Video;
