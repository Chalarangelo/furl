import React from 'react';
import { Radio } from '../components';
import { hasKey, omitProps, generateUniqueId, normalizeChildren } from '../utilities/utils';

const RadioGroupHOC = (props) => {
  let name = hasKey(props, 'name') ? props.name : 
    hasKey(props, 'title') ? props.title : 
    hasKey(props, 'id') ? props.id :
    generateUniqueId('radio-group');
  if (!hasKey(props, 'data')){
    const radios = normalizeChildren(props.children).filter(item => Radio.name === item.type.name)
      .map(r => {
        let _r = Object.assign({}, r);
        _r.props = Object.assign({
          name: name,
          color: props.color
        }, r.props);
        return _r;
      });
    return (
      <>
        {radios}
      </>
    )
  }

  let data = props.data;

  return (
    <>
      {data.map((val, i) => {
        let content = hasKey(val, 'title') ? val.title : hasKey(val, 'value') ? val.value : val;
        let value = hasKey(val, 'value') ? val.value : hasKey(val, 'title') ? val.title : val;
        return (
          <Radio key={`i_${i}_${value}`} value={value} name={name} {...omitProps(val, ['title', 'value'])}>
            {content}
          </Radio>
        )
      })}
    </>
  );
};

export default RadioGroupHOC;
