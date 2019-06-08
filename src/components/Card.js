import React from 'react';
import { normalizeChildren, combineClassNames, omitProps, combineStyles } from '../utilities/utils';

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
  const sections = normalizeChildren(children).filter(item => CardSection.name === item.type.name);
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
