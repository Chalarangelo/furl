import React from 'react';
import { Anchor, Title } from '../lib';

const AnchorExamples = (props) => (
  <div className="example-wrapper">
    <Title id="hello" level={3}>Hello<Anchor href='#hello' /></Title>
  </div>
);

export default AnchorExamples;