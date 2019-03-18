import React from "react";

const CardSection = ({
  height = 'auto',
  media = '',
  children
}) => {
  if(media.length)
    return (<div className="card-media-section" style={{ height: height, backgroundImage: `url(${encodeURI(media)})`}}/>);
  else
    return (<div className="card-section">{children}</div>);
}

export default CardSection;