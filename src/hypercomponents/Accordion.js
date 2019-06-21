import React from 'react';
import { Accordion, Collapse } from '../components';
import { isUndefined } from '../utilities/utils';

const AccordionHOC = ({
  data,
  ...rest
}) => 
  isUndefined(data) ? 
    ( <Accordion {...rest} /> ) :
    (
      <Accordion {...rest}>
        {data.map((val, i) => (
          <Collapse title={val.title ? val.title : val.id ? val.id : `${i}`} key={`i_${i}_${val.title}`}>
            {val.content}
          </Collapse>
        ))}
      </Accordion>
    );

export default AccordionHOC;
