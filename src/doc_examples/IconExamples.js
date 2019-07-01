import React from 'react';
import { Icon } from '../lib';

const IconExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <Icon name='bell' width={16} height={16} />&nbsp;&nbsp;
    <Icon name='bell' />&nbsp;&nbsp;
    <Icon name='bell' stroke='var(--interface-gray-400)' />&nbsp;&nbsp;
    <Icon name='bell' fill='var(--interface-gray-200)' />&nbsp;&nbsp;
    <Icon name='bell' width={32} height={32} />
  </div>
);

export default IconExamples;