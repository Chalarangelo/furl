import React from 'react';
import { Tabs, Tab } from '../lib';

const TabExamples = (props) => (
  <div className="example-wrapper">
    <Tabs>
      <Tab title="1. How do I create an egg wash?">
        To create an egg wash, whisk together a large egg with one tablespoon of water until smooth. Use as a glue to seal pastries, then brush on top for a glossy appearance.
      </Tab>
      <Tab title="2. How do I easily peel tomatoes?">
        Peel tomatoes with ease! Cut an X in the top, and then simmer in a pot of hot water for 15 to 30 seconds. Cool down and the skin will fall right off.
      </Tab>
    </Tabs>
    <Tabs controlStyle='button-group' openIndex={1}>
      <Tab title="1. How do I create an egg wash?">
        To create an egg wash, whisk together a large egg with one tablespoon of water until smooth. Use as a glue to seal pastries, then brush on top for a glossy appearance.
      </Tab>
      <Tab title="2. How do I easily peel tomatoes?">
        Peel tomatoes with ease! Cut an X in the top, and then simmer in a pot of hot water for 15 to 30 seconds. Cool down and the skin will fall right off.
      </Tab>
    </Tabs>
  </div>
);

export default TabExamples;