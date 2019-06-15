import React from 'react';
import { Option, ComboboxInput } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const ComboboxInputHOC = (props) => {
  if (!hasKey(props, 'data'))
    return (
      <ComboboxInput {...props} />
    );

  let data = props.data;

  return (
    <ComboboxInput {...omitProps(props, ['data'])}>
      {data.map((val, i) => {
        let content = hasKey(val, 'title') ? val.title : hasKey(val, 'value') ? val.value : val;
        let value = hasKey(val, 'value') ? val.value : hasKey(val, 'title') ? val.title : val;
        return (
          <Option key={`i_${i}_${value}`} value={value} {...omitProps(val, ['title', 'value'])}>
            {content}
          </Option>
        );
      })}
    </ComboboxInput>
  );
};

export default ComboboxInputHOC;
