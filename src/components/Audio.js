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
}) => {
  let _audio = (
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
  );
  return withCaption ? (
    <figure>
      {_audio}
      <figcaption>{alt}</figcaption>
    </figure>
  ) : _audio;
};

export default Audio;
