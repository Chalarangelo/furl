import React from 'react';
import { omitProps, combineStyles } from '../utilities/utils';

const Audio = ({
  className,
  src,
  volume = 1.0,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  alt = 'An audio clip',
  withCaption = false,
  ...rest
}) =>
  withCaption ? (
    <figure>
      <audio
        className={className}
        src={src}
        title={alt}
        autoPlay={autoplay} 
        controls={controls} 
        loop={loop} 
        muted={muted} 
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
        src={src}
        title={alt}
        autoPlay={autoplay} 
        controls={controls} 
        loop={loop} 
        muted={muted} 
        volume={volume}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />);

export default Audio;
