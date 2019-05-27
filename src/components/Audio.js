import React from 'react';

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
  ...rest
}) =>
  withCaption ? (
    <figure>
      <audio
        className={className}
        id={id}
        height={height}
        width={width}
        src={src}
        title={alt}
        autoPlay={autoplay} controls={controls} loop={loop} muted={muted} preload={preload} volume={volume}
        {...rest}
      />
      <figcaption>{alt}</figcaption>
    </figure>
  )
    : (
      <audio
        className={className}
        id={id}
        height={height}
        width={width}
        src={src}
        title={alt}
        autoPlay={autoplay} controls={controls} loop={loop} muted={muted} preload={preload} volume={volume}
        {...rest}
      />);

export default Audio;
