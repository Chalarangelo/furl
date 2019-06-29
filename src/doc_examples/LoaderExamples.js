import React from 'react';
import { Loader } from '../lib';

const LoaderExamples = (props) => (
  <div className="example-wrapper">
    <Loader />
    <Loader color='primary' />
    <Loader color='secondary' />
    <Loader color='success' />
    <Loader color='warning' />
    <Loader color='danger' />
    <Loader size='large' />
  </div>
);

export default LoaderExamples;