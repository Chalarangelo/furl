import React from 'react';
import ReactHtmlParser from 'html-react-parser';
import { Paragraph, Title, Text, Alert, Hyperlink } from '../lib';
import { AnchorExamples, HyperlinkExamples, ImageExamples, VideoExamples } from '../doc_examples';

const tagMappings = {
  'anchorexamples': AnchorExamples,
  'hyperlinkexamples': HyperlinkExamples,
  'imageexamples': ImageExamples,
  'videoexamples': VideoExamples,
};

const transformer = ({ type, name, children, attribs, next, prev, parent, data }, index) => {    
  if (type === 'tag' && name === 'p' && children.length === 1 && children[0].name && children[0].name.indexOf('example') !== -1) 
    return (
      <>
        {children.map(transformer)}
      </>
    );
  if (type === 'tag') {
    if (!tagMappings[name])
      return undefined;

    const TagName = tagMappings[name];
    return (
      <TagName {...attribs}>
        {children.map(transformer)}
      </TagName>
    );
  }
  return data;
}

const HtmlMapper = ({ html }) => ReactHtmlParser(html, { replace: transformer });

export default HtmlMapper;