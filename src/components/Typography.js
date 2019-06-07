import React from 'react';
import {normalizeChildren} from '../utilities/utils';
import AutoLink from '../utilities/AutoLink';

const Quote = ({ cite, id, className, children, ...rest }) => {
  return (<blockquote
    cite={cite}
    id={id}
    className={[className].join(' ').trim()}
    {...rest}>
    {children}
  </blockquote>);
};

const Preformatted = ({ id, className, children, ...rest }) => {
  return (<pre
    id={id}
    className={[className].join(' ').trim()}
    {...rest}>
    {children}
  </pre>);
};

const Paragraph = ({ id, className, children, ...rest }) => {
  return (<p
    id={id}
    className={[className].join(' ').trim()}
    {...rest}>
    {children}
  </p>);
};

const Code = ({ id, className, children, ...rest }) => {
  return (<code
    id={id}
    className={[className].join(' ').trim()}
    {...rest}>
    {children}
  </code>);
};

const Kbd = ({ id, className, children, ...rest }) => {
  return (<kbd
    id={id}
    className={[className].join(' ').trim()}
    {...rest}>
    {children}
  </kbd>);
};

const Title = ({ level = 1, semantic = true, id, className, children, ...rest }) => {
  switch (level) {
    case 1:
      if (semantic) { return <h1 id={id} className={[className].join(' ').trim()}{...rest}>{children}</h1>; } else { return <span id={id} className={['title1', className].join(' ').trim()} {...rest}>{children}</span>; }
    case 2:
      if (semantic) { return <h2 id={id} className={[className].join(' ').trim()}{...rest}>{children}</h2>; } else { return <span id={id} className={['title2', className].join(' ').trim()} {...rest}>{children}</span>; }
    case 3:
      if (semantic) { return <h3 id={id} className={[className].join(' ').trim()}{...rest}>{children}</h3>; } else { return <span id={id} className={['title3', className].join(' ').trim()} {...rest}>{children}</span>; }
    case 4:
      if (semantic) { return <h4 id={id} className={[className].join(' ').trim()}{...rest}>{children}</h4>; } else { return <span id={id} className={['title4', className].join(' ').trim()} {...rest}>{children}</span>; }
    case 5:
      if (semantic) { return <h5 id={id} className={[className].join(' ').trim()}{...rest}>{children}</h5>; } else { return <span id={id} className={['title5', className].join(' ').trim()} {...rest}>{children}</span>; }
    case 6:
      if (semantic) { return <h6 id={id} className={[className].join(' ').trim()}{...rest}>{children}</h6>; } else { return <span id={id} className={['title6', className].join(' ').trim()} {...rest}>{children}</span>; }
    default:
      if (semantic) { return <h1 id={id} className={[className].join(' ').trim()}{...rest}>{children}</h1>; } else { return <span id={id} className={['title1', className].join(' ').trim()} {...rest}>{children}</span>; }
  }
};

const Text = ({ autolink = false, textStyle, id, className, children, ...rest }) => {
  let _children = normalizeChildren(children);
  if (autolink) {
    _children = _children.map(v => {
      if (typeof v !== 'string') {
        console.error('AutolinkWarning: Cannot autolink children that are elements or components. Certain elements have not been autolinked.');
        return v;
      } else return (<AutoLink text={v} />);
    });
  }
  switch (textStyle) {
    case 'small':
      return <small
        id={id}
        className={[className].join(' ').trim()} {...rest}>
        {_children}
      </small>;
    case 'bold':
      return <strong
        id={id}
        className={[className].join(' ').trim()} {...rest}>
        {_children}
      </strong>;
    case 'italics':
      return <em
        id={id}
        className={[className].join(' ').trim()} {...rest}>
        {_children}
      </em>;
    default:
      return <span
        id={id}
        className={[textStyle, className].join(' ').trim()} {...rest}>
        {_children}
      </span>;
  }
};

export { Title, Text, Paragraph, Quote, Code, Kbd, Preformatted };
