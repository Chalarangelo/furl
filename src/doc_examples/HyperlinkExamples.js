import React from 'react';
import { Hyperlink, Paragraph } from '../lib';

const HyperlinkExamples = (props) => (
  <div className="example-wrapper">
    <Paragraph>
      <Hyperlink href='https://google.com'>Opens in same tab.</Hyperlink>
    </Paragraph>
    <Paragraph>
      <Hyperlink href='https://google.com' openIn='_blank'>Opens in new tab.</Hyperlink>
    </Paragraph>
    <Paragraph>
      <Hyperlink href='https://google.com' openIn='external'>Opens in new tab with noopener noreferrer.</Hyperlink>
    </Paragraph>
  </div>
);

export default HyperlinkExamples;