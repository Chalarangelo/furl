import React from 'react';
import { Menu, MenuItem, Title, Dropdown } from '../lib';

const MenuExamples = (props) => (
  <div className="example-wrapper">
    <Title level={5}>Horizontal</Title>
    <Menu type='horizontal'>
      <MenuItem>
        <Dropdown title='Item 1 (Dropdown)'>
          <MenuItem>Item 1.1</MenuItem>
          <MenuItem>Item 1.2</MenuItem>
          <MenuItem>Item 1.3</MenuItem>
        </Dropdown>
      </MenuItem>
      <MenuItem selected href='#'>Item 2</MenuItem>
      <MenuItem href='#'>Item 3</MenuItem>
      <MenuItem>Item 4</MenuItem>
    </Menu>
    <Menu type='horizontal' highlight='bottom'>
      <MenuItem>
        <Dropdown title='Item 1 (Dropdown)' reverse>
          <MenuItem>Item 1.1</MenuItem>
          <MenuItem>Item 1.2</MenuItem>
          <MenuItem>Item 1.3</MenuItem>
        </Dropdown>
      </MenuItem>
      <MenuItem href='#'>Item 2</MenuItem>
      <MenuItem href='#'>Item 3</MenuItem>
      <MenuItem selected >Item 4</MenuItem>
    </Menu>
    <Title level={5}>Vertical</Title>
    <Menu type='vertical' highlight='right'>
      <MenuItem>Item 1</MenuItem>
      <MenuItem selected>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
      <MenuItem>
        <Dropdown title='Item 4 (Dropdown)'>
          <MenuItem>Item 4.1</MenuItem>
          <MenuItem>Item 4.2</MenuItem>
          <MenuItem>Item 4.3</MenuItem>
        </Dropdown>
      </MenuItem>
    </Menu>
    <Menu type='vertical' highlight='left'>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem selected>Item 3</MenuItem>
      <MenuItem>
        <Dropdown title='Item 4 (Dropdown)'>
          <MenuItem>Item 4.1</MenuItem>
          <MenuItem>Item 4.2</MenuItem>
          <MenuItem>Item 4.3</MenuItem>
        </Dropdown>
      </MenuItem>
    </Menu>
  </div>
);

export default MenuExamples;