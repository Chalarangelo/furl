import React from 'react';
import { Breadcrumbs, Breadcrumb } from '../lib';

const BreadcrumbExamples = (props) => (
  <div className="example-wrapper">
    <Breadcrumbs>
      <Breadcrumb><a href='#'>My files</a></Breadcrumb>
      <Breadcrumb>My documents</Breadcrumb>
    </Breadcrumbs>
    <Breadcrumbs separator='>'>
      <Breadcrumb><a href='#'>My files</a></Breadcrumb>
      <Breadcrumb>My documents</Breadcrumb>
    </Breadcrumbs>
  </div>
);

export default BreadcrumbExamples;