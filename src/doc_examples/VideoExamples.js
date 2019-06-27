import React from 'react';
import { Video } from '../lib';

const VideoExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <Video 
      src="http://media.w3.org/2010/05/sintel/trailer.mp4"
      alt="Sintel Trailer"
      withCaption
      height="400px"
    />
  </div>
);

export default VideoExamples;