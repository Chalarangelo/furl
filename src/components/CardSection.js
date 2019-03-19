import React from "react";

const CardSection = ({
  height = 'auto',
  media = '',
  id,
  children
}) => {
  if(media.length)
    return (<div className="card-media-section"
      id={id !== undefined ? id : false} style={{ height: height, backgroundImage: `url(${encodeURI(media)})`}}/>);
  else
    return (<div className="card-section"
      id={id !== undefined ? id : false}>{children}</div>);
}

export default CardSection;