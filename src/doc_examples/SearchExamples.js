import React from 'react';
import { Search, Paragraph, Title } from '../lib';

const SearchExamples = (props) => (
  <div className="example-wrapper" style={{paddingBottom: 120}}>
    <Search size='small' placeholder='Small'/>
    <Search withIcon placeholder='Normal search with icon'/>
    <Search size='large' placeholder='Large' />
    <Search placeholder='With results'>
      <Title level={5}>Search Results</Title>
      <Paragraph>Found 6 results...</Paragraph>
    </Search>
  </div>
);

export default SearchExamples;