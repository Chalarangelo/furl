import React from 'react';
import { omitProps, combineStyles } from '../utilities/utils';

const Video = ({
  width = 'auto',
  height = 'auto',
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
        height={height}
        width={width}
        src={src}
        title={alt}
        autoPlay={autoplay} 
        controls={controls} 
        loop={loop} 
        muted={muted}
        preload={`${preload}`} 
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />
      <figcaption>{alt}</figcaption>
    </figure>
  )
    : (
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
        preload={preload}
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      />);

export default Video;
