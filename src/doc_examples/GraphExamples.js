import React from 'react';
import { Graph } from '../lib';

const GraphExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <Graph width={300} height={260} data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} withCaption alt='Curve graph'/>
    <Graph width={300} height={260} type='line' data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} withCaption alt='Line graph'/>
    <Graph width={300} height={260} type='bar' data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} withCaption alt='Bar graph'/>
    <Graph width={300} height={260} type='pie' data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} withCaption alt='Pie graph'/>
  </div>
);

export default GraphExamples;