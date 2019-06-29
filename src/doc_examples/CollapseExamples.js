import React from 'react';
import { Paragraph, Collapse } from '../lib';

const CollapseExamples = (props) => (
  <div className="example-wrapper">
    <Collapse title='Terms of use' isOpen>
      These are our and conditions for use of platform.
    </Collapse>
    <Collapse fill='flat' title='Flat terms of use'>
      These are our and conditions for use of platform.
    </Collapse>
  </div>
);

export default CollapseExamples;