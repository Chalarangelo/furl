import React from 'react';
import { Breadcrumb, BreadcrumbItem, Hyperlink } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const BreadcrumbsHOC = (props) => {
  if (!hasKey(props, 'data'))
    return (
      <Breadcrumb {...props} />
    );

  let data = props.data;

  return (
    <Breadcrumb {...omitProps(props, ['data'])}>
      {data.map((val, i) => {
        let content = typeof val === 'string' ? val : val.title;
        return (
          <BreadcrumbItem key={`i_${i}_${content}`}>
            {val.href ? (
              <Hyperlink {...omitProps(val, ['title'])}>{content}</Hyperlink>
            ) : content}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbsHOC;
