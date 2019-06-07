import React from 'react';
import { normalizeChildren } from '../utilities/utils';

const CardSection = ({
  height = 'auto',
  media = '',
  id,
  className,
  children,
  ...rest
}) => {
  if (media.length) {
    return (<div className={[className, 'card-media-section'].join(' ').trim()} {...rest}
      id={id} style={{ height: height, backgroundImage: `url(${encodeURI(media)})` }} />);
  } else {
    return (<div className={[className, 'card-section'].join(' ').trim()} {...rest}
      id={id}>{children}</div>);
  }
};

const Card = ({
  width = 'auto',
  id,
  className,
  children,
  ...rest
}) => {
  const sections = normalizeChildren(children).filter(item => CardSection.name === item.type.name);
  return (<div className={[className, 'card'].join(' ').trim()}
    id={id} style={{width: width}} {...rest}>
    {sections}
  </div>);
};

export { Card, CardSection };
