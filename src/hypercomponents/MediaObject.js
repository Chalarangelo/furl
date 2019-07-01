import React from 'react';
import { isUndefined, combineStyles, combineClassNames, parseLayout } from '../utilities/utils';

const MediaObjectHOC = ({
  media,
  data,
  children,
  mediaWidth = 'ls-200p',
  mediaHeight = 'ls-200p',
  className,
  style,
  mediaClassName,
  ...rest
}) => {
  if (isUndefined(media))
    return (<div {...rest} />);

  let _data = !isUndefined(data) ? data : children;
  let _width = parseLayout(mediaWidth);
  let _height = parseLayout(mediaHeight);
  let _className = combineClassNames([className, 'media-object']);
  let _style = combineStyles(rest, style, { '--media-size': _width });

  return (
    <div className={_className} style={_style} {...rest}>
      <div
        className={combineClassNames(['media-image', mediaClassName])}
        style={{
          width: _width,
          height: _height,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${encodeURI(media)})`
        }}
      />
      <div className='media-content'>
        {_data}
      </div>
    </div>
  );
};

export default MediaObjectHOC;
