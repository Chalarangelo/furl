import React from 'react';
import { Button } from '../lib';

const ButtonExamples = (props) => (
  <div className="example-wrapper">
    <Button>Button</Button>
    <Button color='primary'>Primary</Button>
    <Button color='secondary'>Secondary</Button>
    <Button color='success'>Success</Button>
    <Button color='warning'>Warning</Button>
    <Button color='danger'>Danger</Button>
    <Button size='small'>Small</Button>
    <Button size='large'>Large</Button>
    <Button fill='solid'>Solid</Button>
    <Button fill='light'>Light</Button>
    <Button fill='gradient'>Gradient</Button>
    <Button fill='outline'>Outline</Button>
    <Button fill='ghost'>Ghost</Button>
    <Button fill='link'>Link</Button>
    <Button shape='rounded'>Rounded</Button>
  </div>
);

export default ButtonExamples;