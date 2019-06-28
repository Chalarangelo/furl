import React from 'react';
import { Alert } from '../lib';

const AlertExamples = (props) => (
  <div className="example-wrapper">
    <Alert>This is an alert.</Alert>
    <Alert color='primary'>This is a primary alert.</Alert>
    <Alert color='secondary'>This is a secondary alert.</Alert>
    <Alert color='success'>This is a success alert.</Alert>
    <Alert color='warning'>This is a warning alert.</Alert>
    <Alert color='danger'>This is a danger alert.</Alert>
    <Alert size='small'>This is a small alert.</Alert>
    <Alert size='large'>This is a large alert.</Alert>
    <Alert fill='gradient'>This is a gradient alert.</Alert>
    <Alert fill='solid'>This is a solid alert.</Alert>
    <Alert shape='rounded'>This is a rounded alert.</Alert>
  </div>
);

export default AlertExamples;