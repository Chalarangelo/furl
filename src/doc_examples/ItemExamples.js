import React from 'react';
import { Item } from '../lib';

const ItemExamples = (props) => (
  <div className="example-wrapper">
    <Item
      author='Joe Henderson'
      date={new Date('11/03/2018')}
      media='https://images.unsplash.com/photo-1511806754518-53bada35f930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
      data='I have posted this amazing article here. Check it out!'
    />
    <Item
      author='Sophie Gray'
      date={new Date()}
      media='https://images.unsplash.com/photo-1478637665880-719251fb077d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
      data='Dude, this is awesome. Thanks so much.'
    />
  </div>
);

export default ItemExamples;