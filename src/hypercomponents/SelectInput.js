import React from 'react';
import { Option, SelectInput } from '../components';
import { isUndefined, hasKey, omitProps } from '../utilities/utils';

const SelectInputHOC = ({
  data,
  ...rest
}) => 
  isUndefined(data) ?
    (<SelectInput {...rest} />) :
    (
      <SelectInput {...rest}>
        {data.map((val, i) => {
          let content = hasKey(val, 'title') ? val.title : hasKey(val, 'value') ? val.value : val;
          let value = hasKey(val, 'value') ? val.value : hasKey(val, 'title') ? val.title : val;
          return (
            <Option key={`i_${i}_${value}`} value={value} {...omitProps(val, ['title', 'value'])}>
              {content}
            </Option>
          );
        })}
      </SelectInput>
    );

export default SelectInputHOC;
