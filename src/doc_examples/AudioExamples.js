import React from 'react';
import { Audio } from '../lib';

const AudioExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <Audio 
      src="http://alexkatz.me/codepen/music/interlude.mp3"
      alt="Interlude - Alex Katz"
      withCaption
      volume={0.5}
    />
  </div>
);

export default AudioExamples;