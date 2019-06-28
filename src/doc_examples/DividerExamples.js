import React from 'react';
import { Paragraph, Divider } from '../lib';

const DividerExamples = (props) => (
  <div className="example-wrapper">
    <Paragraph>This is some content <Divider vertical /> This is some other content</Paragraph>
    <Divider />
    <Paragraph>This is some entirely different content.</Paragraph>
  </div>
);

export default DividerExamples;