import React from 'react';
import { MediaObject, Paragraph, Text } from '../lib';

const MediaObjectExamples = (props) => (
  <div className="example-wrapper">
    <MediaObject media='https://images.unsplash.com/photo-1511806754518-53bada35f930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'>
      <Paragraph><Text textStyle='bold'>Joe Henderson</Text><br />I have posted this amazing article here. Check it out!</Paragraph>
    </MediaObject>
    <MediaObject media='https://images.unsplash.com/photo-1478637665880-719251fb077d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' mediaClassName='avatar circle'>
      <Paragraph><Text textStyle='bold'>Sophie Gray</Text><br />Dude, this is awesome. Thanks so much.</Paragraph>
    </MediaObject>
  </div>
);

export default MediaObjectExamples;