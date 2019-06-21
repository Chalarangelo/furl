import React from 'react';
import { Tab, TabItem } from '../components';
import { isUndefined } from '../utilities/utils';

const TabsHOC = ({
  data,
  ...rest
}) =>
  isUndefined(data) ?
    (<Tab {...rest} />) :
    (
      <Tab {...rest}>
        {data.map((val, i) => (
          <TabItem title={val.title ? val.title : val.id ? val.id : `${i}`} key={`i_${i}_${val.title}`}>
            {val.content}
          </TabItem>
        ))}
      </Tab>
    );

export default TabsHOC;
