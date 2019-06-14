import React from 'react';
import { Accordion, Collapse } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const AccordionHOC = (props) => {
  if (!hasKey(props, 'data'))
    return (
      <Accordion {...props} />
    );

  let data = props.data;

  return (
    <Accordion {...omitProps(props, ['data'])}>
      {data.map((val, i) => (
        <Collapse title={val.title ? val.title : val.id ? val.id : `${i}`} key={`i_${i}_${val.title}`}>
          {val.content}
        </Collapse>
      ))}
    </Accordion>
  );
};

export default AccordionHOC;
