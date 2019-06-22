import React from 'react';
import { Paragraph } from './Typography';
import Image from './Image';
import { normalizeChildren, combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const castCardSection = val => {
  if(val.type && val.type.name && CardSection.name === val.type.name)
    return val;
  if(val.type && val.type.name && Image.name === val.type.name) 
    return (<CardSection media={val.props.src} {...omitProps(val.props, 'src')} />);
  if(typeof val === 'string')
    return (<Paragraph className='card-section'>{val}</Paragraph>);
  let _val = Object.assign({}, val);
  _val.props = Object.assign({
    className: combineClassNames([val.props.className, 'card-section'])
  }, val.props);
  return _val;
}

const CardSection = ({
  height = 'auto',
  media = '',
  className,
  children,
  ...rest
}) => {
  if (media.length) {
    return (
      <div 
        className={combineClassNames([className, 'card-media-section'])} 
        style={combineStyles(rest, rest.style, { height: height, backgroundImage: `url(${encodeURI(media)})` })}
        {...omitProps(rest)}
      />
    );
  } else {
    return (
      <div 
        className={combineClassNames([className, 'card-section'])} 
        style={combineStyles(rest, rest.style)}
        {...omitProps(rest)}
      >
        {children}
      </div>
      );
  }
};

const Card = ({
  width = 'auto',
  className,
  children,
  ...rest
}) => {
  const sections = normalizeChildren(children).map(castCardSection);
  return (
    <div 
      className={combineClassNames([className, 'card'])}
      style={combineStyles(rest, rest.style, {width: width})}
      {...omitProps(rest)}
    >
      {sections}
    </div>
  );
};

export { Card, CardSection };
