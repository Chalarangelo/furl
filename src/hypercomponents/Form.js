import React from 'react';
import { Form } from '../components';
import Input from './Input';
import { hasKey, omitProps, generateUniqueId } from '../utilities/utils';

const FormHOC = (props) => {
  if(!hasKey(props, 'data')) 
    return (
      <Form {...props} />
    );
  
  let data = props.data;

  return (
    <Form {...omitProps(props, ['data'])}>
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
