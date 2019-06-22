import React from 'react';
import { isUndefined } from '../utilities/utils';
import { Title, Text, Paragraph } from '../components';
import MediaObject from './MediaObject';
import { Timy, formatConfig } from 'react-timy';

const ItemHOC = ({
  media,
  data,
  children,
  date,
  author,
  dateConfig = formatConfig,
  ...rest
}) => {
  if (isUndefined(media))
    return ( <div {...rest}>{children}</div> );

  let [_data, _usesData] = !isUndefined(data) ? [data, true] : [children, false];

  return (
    <MediaObject media={media} {...rest} mediaClassNames='avatar circle medium'>
      <Title 
        className='item-author' 
        level={6} 
        semantic={false} 
        fontSize={'ts-100p'} 
        style={{marginTop: date ? 'var(--ls-0p)' : 'var(--ls-50p)'}}
      >
        {author ? (<Text textStyle='bold'>{author}</Text>) : ''}
        <Text textStyle='small' color='interface-gray-500' fontSize={'ts-25p'}>
          {date ? <Timy date={date} config={dateConfig} /> : ''}
        </Text>
      </Title>
      {
        _usesData ? (
          <Paragraph>{ _data }</Paragraph>
        ) : (
          <> { _data } </>
        )
      }
    </MediaObject>
  );
};

export default ItemHOC;
