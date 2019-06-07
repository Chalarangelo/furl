import React from 'react';
import { normalizeChildren, combineClassNames } from '../utilities/utils';
import AutoLink from '../utilities/AutoLink';

const Quote = ({ cite, className, children, ...rest }) => {
  return (<blockquote
    cite={cite}
    className={className}
    {...rest}>
    {children}
  </blockquote>);
};

const Preformatted = ({ className, children, ...rest }) => {
  return (<pre
    className={className}
    {...rest}>
    {children}
  </pre>);
};

const Paragraph = ({ className, children, ...rest }) => {
  return (<p
    className={className}
    {...rest}>
    {children}
  </p>);
};

const Code = ({ className, children, ...rest }) => {
  return (<code
    className={className}
    {...rest}>
    {children}
  </code>);
};

const Kbd = ({ className, children, ...rest }) => {
  return (<kbd
    className={className}
    {...rest}>
    {children}
  </kbd>);
};

const Title = ({ level = 1, semantic = true, className, children, ...rest }) => {
  switch (level) {
    case 1:
      if (semantic) { return <h1 className={className} {...rest}>{children}</h1>; } else { return <span className={combineClassNames(['title1', className])} {...rest}>{children}</span>; }
    case 2:
      if (semantic) { return <h2 className={className} {...rest}>{children}</h2>; } else { return <span className={combineClassNames(['title2', className])} {...rest}>{children}</span>; }
    case 3:
      if (semantic) { return <h3 className={className} {...rest}>{children}</h3>; } else { return <span className={combineClassNames(['title3', className])} {...rest}>{children}</span>; }
    case 4:
      if (semantic) { return <h4 className={className} {...rest}>{children}</h4>; } else { return <span className={combineClassNames(['title4', className])} {...rest}>{children}</span>; }
    case 5:
      if (semantic) { return <h5 className={className} {...rest}>{children}</h5>; } else { return <span className={combineClassNames(['title5', className])} {...rest}>{children}</span>; }
    case 6:
      if (semantic) { return <h6 className={className} {...rest}>{children}</h6>; } else { return <span className={combineClassNames(['title6', className])} {...rest}>{children}</span>; }
    default:
      if (semantic) { return <h1 className={className} {...rest}>{children}</h1>; } else { return <span className={combineClassNames(['title1', className])} {...rest}>{children}</span>; }
  }
};

const Text = ({ autolink = false, textStyle, className, children, ...rest }) => {
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
        className={className} {...rest}>
        {_children}
      </small>;
    case 'bold':
      return <strong
        className={className} {...rest}>
        {_children}
      </strong>;
    case 'italics':
      return <em
        className={className} {...rest}>
        {_children}
      </em>;
    default:
      return <span
        className={combineClassNames([textStyle, className])} {...rest}>
        {_children}
      </span>;
  }
};

export { Title, Text, Paragraph, Quote, Code, Kbd, Preformatted };
