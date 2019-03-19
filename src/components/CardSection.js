import React from "react";

const CardSection = ({
  height = 'auto',
  media = '',
  id,
  className,
  children
}) => {
  if(media.length)
    return (<div className={[className, "card-media-section"].join(' ').trim()}
      id={id !== undefined ? id : false} style={{ height: height, backgroundImage: `url(${encodeURI(media)})`}}/>);
  else
    return (<div className={[className, "card-section"].join(' ').trim()}
      id={id !== undefined ? id : false}>{children}</div>);
}

export default CardSection;