import React from 'react';
import { omitProps, combineStyles } from '../utilities/utils';

const Audio = ({
  width = 'auto',
  height = 'auto',
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
        height={height}
        width={width}
        src={src}
        title={alt}
        autoPlay={autoplay} 
        controls={controls} 
        loop={loop} 
        muted={muted} 
        preload={preload} 
        volume={volume}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />
      <figcaption>{alt}</figcaption>
    </figure>
  )
    : (
      <audio
        className={className}
        height={height}
        width={width}
        src={src}
        title={alt}
        autoPlay={autoplay} 
        controls={controls} 
        loop={loop} 
        muted={muted} 
        preload={preload} 
        volume={volume}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />);

export default Audio;
