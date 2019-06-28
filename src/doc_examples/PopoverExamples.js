import React from 'react';
import { Paragraph, Popover } from '../lib';

const PopoverExamples = (props) => (
  <div className="example-wrapper">
    <Paragraph>
      A cappuccino is an <Popover content='A type of coffee.' position='right'>espresso</Popover>-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam (microfoam).
  </Paragraph>
  </div>
);

export default PopoverExamples;