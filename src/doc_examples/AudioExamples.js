import React from 'react';
import { Audio } from '../lib';

const AudioExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <Audio 
      src="https://sample-videos.com/audio/mp3/crowd-cheering.mp3"
      alt="Crowd Cheering"
      withCaption
      volume={0.5}
    />
  </div>
);

export default AudioExamples;