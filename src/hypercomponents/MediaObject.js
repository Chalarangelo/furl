import React from 'react';
import { hasKey, omitProps, combineStyles, combineClassNames } from '../utilities/utils';

const MediaObjectHOC = (props) => {
  if (!hasKey(props, 'media'))
    return (
      <div {...props} />
    );

  let data =  hasKey(props, 'data') ? props.data : props.children;
  let width = hasKey(props, 'mediaWidth') ? props.mediaWidth : 'var(--ls-200p)';
  let height = hasKey(props, 'mediaHeight') ? props.mediaHeight : 'var(--ls-200p)';

  let className = hasKey(props, 'className') ? props.className : '';
  className = `${className} media-object`.trim();

  let style = hasKey(props, 'style') ? props.style : '';
  style = combineStyles(style, { '--media-size': width });

  return (
    <div className={className} style={style} {...omitProps(props, ['data', 'media', 'mediaWidth', 'mediaHeight', 'className', 'style'])}>
      <div 
        className={combineClassNames(['media-image', hasKey(props, 'mediaClassNames') ? props.mediaClassNames : ''])}
        style={{ 
          width: width, 
          height: height,
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center', 
          backgroundImage: `url(${encodeURI(props.media)})` 
        }} 
      />
      <div className='media-content'>
        {data}
      </div>
    </div>
  );
};

export default MediaObjectHOC;
