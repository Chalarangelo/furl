import React from 'react';
import { Form, FormLegend } from '../components';
import Input from './Input';
import { hasKey, omitProps, generateUniqueId, combineClassNames } from '../utilities/utils';

const FormHOC = (props) => {

  let className = hasKey(props, 'className') ? props.className : '';
  className = `${className} ${(hasKey(props, 'twoColumn') && props.twoColumn) ? 'two-column' : ''}`.trim();
  if(!hasKey(props, 'data')) 
    return (
      <Form {...omitProps(props, ['className', 'twoColumn'])} className={className} />
    );
  
  let data = props.data;
  let title = hasKey(props, 'legend') ? props.legend : hasKey(props, 'label') ? props.label : hasKey(props, 'title') ? props.title : false;

  return (
    <Form {...omitProps(props, ['data', 'legend', 'className', 'twoColumn'])} className={className}>
      {
        title !== false ? <FormLegend>{title}</FormLegend> : null
      }
      {data.map((val, i ) => {
        let id = hasKey(val, 'id') ? val.id : hasKey(val, 'name') ? val.name : generateUniqueId('input');
        let type = hasKey(val, 'type') ? val.type : 'text';
        let name = hasKey(val, 'name') ? val.name : hasKey(val, 'title') ? val.title : id;
        let label = hasKey(val, 'label') ? val.label : name;
        let placeholder = hasKey(val, 'placeholder') ? val.placeholder : label;
        return (
          <Input 
            id={id}
            type={type}
            name={name}
            label={label}
            placeholder={placeholder}
            {...omitProps(val, ['id', 'type', 'name', 'label', 'placeholder'])}
          />
        );
      })}
    </Form>
  );
};

export default FormHOC;
