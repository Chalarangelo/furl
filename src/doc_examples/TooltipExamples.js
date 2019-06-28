import React from 'react';
import { Paragraph, Tooltip } from '../lib';

const TooltipExamples = (props) => (
  <div className="example-wrapper">
    <Paragraph>
      A cappuccino is an <Tooltip content='A type of coffee.' position='right'>espresso</Tooltip>-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam (microfoam).
  </Paragraph>
  </div>
);

export default TooltipExamples;