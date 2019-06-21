import React from 'react';
import { hasKey, omitProps, combineStyles } from '../utilities/utils';
import { Title, Text, Paragraph } from '../components';
import MediaObject from './MediaObject';
import { Timy, formatConfig } from 'react-timy';

const ItemHOC = (props) => {
  if (!hasKey(props, 'media'))
    return (
      <div {...props} />
    );

  let author = hasKey(props, 'author') ? props.author : '';
  let date = hasKey(props, 'date') ? props.date : false;
  let data = hasKey(props, 'data') ? props.data : props.children;

  return (
    <MediaObject media={props.media} {...omitProps(props, ['data', 'date', 'author'])} mediaClassNames='avatar circle medium'>
      <Title className='item-author' level={6} semantic={false} fontSize={'ts-50p'} style={{marginTop: date ? 'var(--ls-0p)' : 'var(--ls-50p)'}}>
        <Text textStyle='bold'>{author}</Text>
        <Text textStyle='small' color='interface-gray-500' fontSize={'ts-25p'}>{date ? <Timy date={date}/> : ''}</Text>
      </Title>
      <Paragraph>{data}</Paragraph>
    </MediaObject>
  );
};

export default ItemHOC;
