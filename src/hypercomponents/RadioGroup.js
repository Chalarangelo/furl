import React from 'react';
import { Radio } from '../components';
import { isUndefined, hasKey, omitProps, generateUniqueId, normalizeChildren } from '../utilities/utils';

const RadioGroupHOC = ({
  data,
  name,
  children,
  color,
  ...rest
}) => {
  let _name = !isUndefined(name) ? name : 
    hasKey(rest, 'title') ? rest.title :
    hasKey(rest, 'id') ? rest.id :
    generateUniqueId('radio-group');
  if(isUndefined(data)) {
    const radios = normalizeChildren(children).filter(item => item.type && item.type.name && Radio.name === item.type.name)
      .map(r => {
        let _r = Object.assign({}, r);
        _r.props = Object.assign({
          name: name,
          color: color
        }, r.props);
        return _r;
      });
    return ( <> {radios} </> );
  }
  return (
    <>
      {data.map((val, i) => {
        let content = hasKey(val, 'title') ? val.title : hasKey(val, 'value') ? val.value : val;
        let value = hasKey(val, 'value') ? val.value : hasKey(val, 'title') ? val.title : val;
        return (
          <Radio key={`i_${i}_${value}`} value={value} name={_name} {...omitProps(val, ['title', 'value'])}>
            {content}
          </Radio>
        )
      })}
    </>
  );
}

export default RadioGroupHOC;
