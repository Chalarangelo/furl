import React from 'react';
import { normalizeChildren } from '../utilities/utils';

const CardSection = ({
  height = 'auto',
  media = '',
  id,
  className,
  children
}) => {
  if (media.length) {
    return (<div className={[className, 'card-media-section'].join(' ').trim()}
      id={id} style={{ height: height, backgroundImage: `url(${encodeURI(media)})` }} />);
  } else {
    return (<div className={[className, 'card-section'].join(' ').trim()}
      id={id}>{children}</div>);
  }
};

const Card = ({
  width = 'auto',
  id,
  className,
  children
}) => {
  children = normalizeChildren(children);
  const sections = children.filter(item => CardSection.name === item.type.name);
  return (<div className={[className, 'card'].join(' ').trim()}
    id={id} style={{width: width}}>
    {sections}
  </div>);
};

export { Card, CardSection };
