import React from 'react';
import { ButtonGroup, Button } from '../lib';

const ButtonGroupExamples = (props) => (
  <div className="example-wrapper">
    <ButtonGroup>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup color='primary'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup color='secondary'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup color='success'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup color='warning'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup color='danger'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup size='small'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup size='large'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup fill='solid'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup fill='light'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup fill='gradient'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup fill='outline'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup fill='ghost'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup fill='link'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
    <ButtonGroup shape='rounded'>
      <Button>A</Button><Button>B</Button><Button>C</Button><Button>D</Button>
    </ButtonGroup>
  </div>
);

export default ButtonGroupExamples;