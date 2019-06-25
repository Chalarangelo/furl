import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Paragraph, Title, Text } from '../lib';

const tagMappings = {
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
};

const transformer = ({ type, name, children, next, prev, parent, data }, index) => {
  console.log(type, name, data);
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
      <TagName>
        {children.map(transformer)}
      </TagName>
    );
  }
  return data;
}

const HtmlMapper = ({ html }) => ReactHtmlParser(html, { transform: transformer });

export default HtmlMapper;