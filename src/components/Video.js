import React from 'react';
import { omitProps, combineStyles } from '../utilities/utils';

const Video = ({
  width = 'auto',
  height = 'auto',
  className,
  src,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  alt = 'A video',
  withCaption = false,
  ...rest
}) => {
  let _video = (
    <video
      className={className}
      height={height}
      width={width}
      src={src}
      title={alt}
      autoPlay={autoplay} 
      controls={controls} 
      loop={loop} 
      muted={muted}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    />
  );
  return withCaption ? (
    <figure>
      {_video}
      <figcaption>{alt}</figcaption>
    </figure>
  ) : _video;
};

export default Video;
