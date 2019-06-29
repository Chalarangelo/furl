import React from 'react';
import { List, ListItem } from '../lib';

const ListExamples = (props) => (
  <div className="example-wrapper">
    <List>
      <ListItem>Apples</ListItem>
      <ListItem>Oranges</ListItem>
    </List>
    <List listStyle='circle'>
      <ListItem>Eggs</ListItem>
      <ListItem>Milk</ListItem>
    </List>
    <List listStyle='disc'>
      <ListItem>Nuts</ListItem>
      <ListItem>Bolts</ListItem>
    </List>
    <List listStyle='square'>
      <ListItem>Cats</ListItem>
      <ListItem>Dogs</ListItem>
    </List>
    <List listStyle='triangle'>
      <ListItem>Black</ListItem>
      <ListItem>White</ListItem>
    </List>
    <List listStyle='checkmark'>
      <ListItem>Work</ListItem>
      <ListItem>Fun</ListItem>
    </List>
    <List listStyle='xmark'>
      <ListItem>Oil</ListItem>
      <ListItem>Water</ListItem>
    </List>
    <List ordered>
      <ListItem>First</ListItem>
      <ListItem>Last</ListItem>
    </List>
    <List ordered listStyle='decimal'>
      <ListItem>Wake up</ListItem>
      <ListItem>Eat breakfast</ListItem>
    </List>
    <List ordered listStyle='decimal-leading-zero'>
      <ListItem>Brush teeth</ListItem>
      <ListItem>Go to sleep</ListItem>
    </List>
    <List ordered listStyle='lower-latin'>
      <ListItem>Code</ListItem>
      <ListItem>Debug</ListItem>
    </List>
    <List ordered listStyle='lower-roman'>
      <ListItem>Cook</ListItem>
      <ListItem>Eat</ListItem>
    </List>
    <List ordered listStyle='upper-latin'>
      <ListItem>Exercise</ListItem>
      <ListItem>Shower</ListItem>
    </List>
    <List ordered listStyle='upper-roman'>
      <ListItem>Work</ListItem>
      <ListItem>Play</ListItem>
    </List>
  </div>
);

export default ListExamples;