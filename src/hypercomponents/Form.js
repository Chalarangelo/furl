import React from 'react';
import { Form, FormLegend, Title, Divider, Paragraph } from '../components';
import Input from './Input';
import { hasKey, omitProps, generateUniqueId, isUndefined, combineClassNames } from '../utilities/utils';

const mapDataToInput = (val, i) => {
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
      key={`i_${i}_${id}`}
      {...omitProps(val, ['id', 'type', 'name', 'label', 'placeholder'])}
    />
  );
}

const FormHOC = ({
  data,
  className,
  twoColumn = false,
  legend,
  label,
  title,
  ...rest
}) => {
  let classNames = [className, twoColumn ? 'two-column' : ''];
  if(isUndefined(data)) {
    return (
      <Form className={combineClassNames(classNames)} {...rest}/>
    );
  }

  let _title = !isUndefined(legend) ? legend : !isUndefined(label) ? label : !isUndefined(title) ? title : false;

  return (
    <Form {...rest} className={combineClassNames(classNames)}>
      {
        _title ? <FormLegend>{_title}</FormLegend> : null
      }
      {data.map((val, i) => {
        if (hasKey(val, 'data')) {
          let __title = hasKey(val, 'legend') ? val.legend : hasKey(val, 'label') ? val.label : hasKey(val, 'title') ? val.title : false;
          let _description = hasKey(val, 'description') ? val.description : false;
          return (
            <>
              {
                __title ? <Title level={5} semantic={false}>{__title}</Title> : null
              }
              {
                _description ? <Paragraph>{_description}</Paragraph> : null
              }
              {
                val.data.map(mapDataToInput)
              }
              {
                i !== data.length - 1 ? <Divider /> : ''
              }
            </>
          );
        }
        return mapDataToInput(val, i);
      })}
    </Form>
  );
};

export default FormHOC;
