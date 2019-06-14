import React from 'react';
import { Tab, TabItem } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const TabsHOC = (props) => {
  if (!hasKey(props, 'data'))
    return (
      <Tab {...props} />
    );

  let data = props.data;

  return (
    <Tab {...omitProps(props, ['data'])}>
      {data.map((val, i) => (
        <TabItem title={val.title ? val.title : val.id ? val.id : `${i}`} key={`i_${i}_${val.title}`}>
          {val.content}
        </TabItem>
      ))}
    </Tab>
  );
};

export default TabsHOC;
