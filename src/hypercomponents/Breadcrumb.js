import React from 'react';
import { Breadcrumb, BreadcrumbItem, Hyperlink } from '../components';
import { hasKey, isUndefined, omitProps } from '../utilities/utils';

const BreadcrumbsHOC = ({
  data,
  ...rest
}) => 
  isUndefined(data) ? 
    ( <Breadcrumb {...rest} /> ) :
    (
      <Breadcrumb {...rest}>
        {data.map((val, i) => {
          let content = hasKey(val, 'title') ? val.title : val;
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

export default BreadcrumbsHOC;
