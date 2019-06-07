import React from 'react';
import { normalizeChildren, combineClassNames } from '../utilities/utils';

const CardSection = ({
  height = 'auto',
  media = '',
  className,
  children,
  ...rest
}) => {
  if (media.length) {
    return (<div className={combineClassNames([className, 'card-media-section'])} {...rest}
      style={{ height: height, backgroundImage: `url(${encodeURI(media)})` }} />);
  } else {
    return (<div className={combineClassNames([className, 'card-section'])} {...rest}>{children}</div>);
  }
};

const Card = ({
  width = 'auto',
  className,
  children,
  ...rest
}) => {
  const sections = normalizeChildren(children).filter(item => CardSection.name === item.type.name);
  return (<div className={combineClassNames([className, 'card'])}
    style={{width: width}} {...rest}>
    {sections}
  </div>);
};

export { Card, CardSection };
