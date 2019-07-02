import React from 'react';
import { Dropdown, Hyperlink } from '../lib';

const DropdownExamples = (props) => (
  <div className="example-wrapper">
    <Dropdown title='Dropdown'>
      <Hyperlink href='#'>Item 1</Hyperlink>
      <Hyperlink href='#'>Item 2</Hyperlink>
      <Hyperlink href='#'>Item 3</Hyperlink>
    </Dropdown>
    <Dropdown title='Reverse dropdown' reverse>
      <Hyperlink href='#'>Item 1</Hyperlink>
      <Hyperlink href='#'>Item 2</Hyperlink>
      <Hyperlink href='#'>Item 3</Hyperlink>
    </Dropdown>
  </div>
);

export default DropdownExamples;