import React from 'react';
import { Progress } from '../lib';

const ProgressExamples = (props) => (
  <div className="example-wrapper">
    <Progress value={15} max={100}/>
    <Progress value={35} max={100} color='primary' />
    <Progress value={50} max={100} color='secondary' />
    <Progress value={65} max={100} color='success' />
    <Progress value={80} max={100} color='warning' />
    <Progress value={100} max={100} color='danger' />
  </div>
);

export default ProgressExamples;