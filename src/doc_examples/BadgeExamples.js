import React from 'react';
import { Badge } from '../lib';

const BadgeExamples = (props) => (
  <div className="example-wrapper">
    <Badge>Badge</Badge>
    <Badge color='primary'>Primary</Badge>
    <Badge color='secondary'>Secondary</Badge>
    <Badge color='success'>Success</Badge>
    <Badge color='warning'>Warning</Badge>
    <Badge color='danger'>Danger</Badge>
    <Badge size='large'>Large</Badge>
    <Badge fill='outline'>Outline</Badge>
    <Badge fill='light'>Light</Badge>
    <Badge shape='rounded'>Rounded</Badge>
  </div>
);

export default BadgeExamples;