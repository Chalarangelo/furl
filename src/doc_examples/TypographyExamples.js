import React from 'react';
import { Title, Text, Paragraph, Quote, Code, Kbd, Preformatted } from '../lib';

const TypographyExamples = (props) => (
  <div className="example-wrapper">
    <Title level={1}>Title level 1<Text textStyle='small'>Subtitle level 1</Text></Title>
    <Title level={2}>Title level 2<Text textStyle='small'>Subtitle level 2</Text></Title>
    <Title level={3}>Title level 3<Text textStyle='small'>Subtitle level 3</Text></Title>
    <Title level={4}>Title level 4<Text textStyle='small'>Subtitle level 4</Text></Title>
    <Title level={5}>Title level 5<Text textStyle='small'>Subtitle level 5</Text></Title>
    <Title level={6}>Title level 6<Text textStyle='small'>Subtitle level 6</Text></Title>
    <Paragraph><Text textStyle='bold'>Sloths</Text> are arboreal mammals noted for slowness of movement and for spending most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America. The six species are in two families: <Text textStyle="italics">two-toed sloths</Text> and <Text textStyle="italics">three-toed sloths</Text>. In spite of this traditional naming, all sloths actually have three toes. The two-toed sloths have two digits, or fingers, on each forelimb. <Text autolink>You can learn more about sloths by visiting https://en.wikipedia.org/wiki/Sloth</Text>. One fun fact is that a sloth is not at all capable of using a key on a human keyboard, such as <Kbd>Ctrl</Kbd>, or writing any code, such as <Code>console.log('Hello world!)'</Code>!</Paragraph>
    <Quote cite='Albert Einstein'>Creativity Is Intelligence Having Fun.</Quote>
    <Preformatted>console.log('Hello world');</Preformatted>
  </div>
);

export default TypographyExamples;