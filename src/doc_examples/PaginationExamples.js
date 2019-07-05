import React from 'react';
import { Pagination, PaginationItem, Icon } from '../lib';

const PaginationExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <Pagination
      currentPage={1} pageCount={6}
      firstText='First'
      previousText='Previous'
      nextText='Next'
      lastText='Last'
    /><br/>
    <Pagination shape='rounded'
      currentPage={1} pageCount={15}
      firstText={'<<'}
      previousText={'<'}
      nextText={'>'}
      lastText={'>>'}
    /><br/>
    <Pagination
      currentPage={1} pageCount={8}
      firstText={(<Icon name='chevrons-left' width={16} height={16} />)}
      previousText={(<Icon name='chevron-left' width={16} height={16} />)}
      nextText={(<Icon name='chevron-right' width={16} height={16} />)}
      lastText={(<Icon name='chevrons-right' width={16} height={16} />)}
    />
  </div>
);

export default PaginationExamples;