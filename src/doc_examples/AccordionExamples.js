import React from 'react';
import { Accordion, Collapse } from '../lib';

const AccordionExamples = (props) => (
  <div className="example-wrapper">
    <Accordion>
      <Collapse title="1. How do I create an egg wash?">
        To create an egg wash, whisk together a large egg with one tablespoon of water until smooth. Use as a glue to seal pastries, then brush on top for a glossy appearance.
      </Collapse>
      <Collapse title="2. How do I easily peel tomatoes?">
        Peel tomatoes with ease! Cut an X in the top, and then simmer in a pot of hot water for 15 to 30 seconds. Cool down and the skin will fall right off.
      </Collapse>
    </Accordion>
    <Accordion fill='flat' openIndex={1}>
      <Collapse title="1. How do I create an egg wash?">
        To create an egg wash, whisk together a large egg with one tablespoon of water until smooth. Use as a glue to seal pastries, then brush on top for a glossy appearance.
      </Collapse>
      <Collapse title="2. How do I easily peel tomatoes?">
        Peel tomatoes with ease! Cut an X in the top, and then simmer in a pot of hot water for 15 to 30 seconds. Cool down and the skin will fall right off.
      </Collapse>
    </Accordion>
  </div>
);

export default AccordionExamples;