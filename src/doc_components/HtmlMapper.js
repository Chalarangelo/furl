import React from 'react';
import ReactHtmlParser from 'html-react-parser';
import { Paragraph, Title, Text, Alert, Hyperlink } from '../lib';

const tagMappings = {
  'a': Hyperlink,
  'p': Paragraph,
  'h1': Title,
  'h2': Title,
  'h3': Title,
  'h4': Title,
  'h5': Title,
  'h6': Title,
  'b': Text,
  'strong': Text,
  'i': Text,
  'em': Text,
  'alert': Alert
};

const transformer = ({ type, name, children, attribs, next, prev, parent, data }, index) => {
  if (type === 'tag') {
    if (!tagMappings[name])
      return undefined;

    const TagName = tagMappings[name];
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(name)) {
      return (
        <TagName level={name.slice(1)}>
          {children.map(transformer)}
        </TagName>
      );
    }
    if (['strong', 'b', 'i', 'em'].includes(name)) {
      return (
        <TagName textStyle={(name === 'strong' || name === 'b') ? 'bold' : 'italics'}>
          {children.map(transformer)}
        </TagName>
      );
    }
    return (
      <TagName {...attribs}>
        {children.map(transformer)}
      </TagName>
    );
  }
  console.log(type, name);
  return data;
}

const HtmlMapper = ({ html }) => ReactHtmlParser(html, { replace: transformer });

export default HtmlMapper;