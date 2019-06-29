import React from 'react';
import { Iframe } from '../lib';

const IframeExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <Iframe
      style={{margin: 'var(--margin-vertical) auto'}}
      width={560}
      height={315}
      src="https://www.youtube.com/embed/dqT-UlYlg1s"
      allowFullScreen
      withCaption
      alt='Giant Pandas 101 | Nat Geo Wild'
    />
  </div>
);

export default IframeExamples;

<iframe width="560" height="315" src="https://www.youtube.com/embed/dqT-UlYlg1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>