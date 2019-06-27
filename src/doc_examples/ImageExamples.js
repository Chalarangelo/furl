import React from 'react';
import { Image } from '../lib';

const ImageExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <Image 
      src="https://images.unsplash.com/photo-1561363702-e07252da3399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt="Photo by Cristina Gottardi on Unsplash"
      withCaption
      height="400px"
    />
  </div>
);

export default ImageExamples;