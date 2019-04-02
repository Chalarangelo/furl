import React from "react";
import {normalizeChildren} from "../utilities/utils";

const Quote = ({ cite, id, className, children }) => {
  return (<blockquote
    cite={cite !== undefned ? cite : false}
    id={id !== undefined ? id : false} 
    className={[className].join(' ').trim()}>
    {children}
  </blockquote>);
}

const Preformatted = ({ id, className, children }) => {
  return (<pre
    id={id !== undefined ? id : false}
    className={[className].join(' ').trim()}>
    {children}
  </pre>);
}

const Paragraph = ({ id, className, children }) => {
  return (<code
    id={id !== undefined ? id : false}
    className={[className].join(' ').trim()}>
    {children}
  </code>);
}

const Code = ({ id, className, children }) => {
  return (<code
    id={id !== undefined ? id : false}
    className={[className].join(' ').trim()}>
    {children}
  </code>);
}

const Kbd = ({ id, className, children }) => {
  return (<kbd
    id={id !== undefined ? id : false}
    className={[className].join(' ').trim()}>
    {children}
  </kbd>);
}

const Title = ({ level, semantic, id, className, children }) => {
  switch (level) {
    case 1:
      if (semantic)
        return <h1 id={id !== undefined ? id : false} className={[className].join(' ').trim()}>{children}</h1>
      else
        return <span id={id !== undefined ? id : false} className={['title1', className].join(' ').trim()}>{children}</span>
    case 2:
      if (semantic)
        return <h2 id={id !== undefined ? id : false} className={[className].join(' ').trim()}>{children}</h2>
      else
        return <span id={id !== undefined ? id : false} className={['title2', className].join(' ').trim()}>{children}</span>
    case 3:
      if (semantic)
        return <h3 id={id !== undefined ? id : false} className={[className].join(' ').trim()}>{children}</h3>
      else
        return <span id={id !== undefined ? id : false} className={['title3', className].join(' ').trim()}>{children}</span>
    case 4:
      if (semantic)
        return <h4 id={id !== undefined ? id : false} className={[className].join(' ').trim()}>{children}</h4>
      else
        return <span id={id !== undefined ? id : false} className={['title4', className].join(' ').trim()}>{children}</span>
    case 5:
      if (semantic)
        return <h5 id={id !== undefined ? id : false} className={[className].join(' ').trim()}>{children}</h5>
      else
        return <span id={id !== undefined ? id : false} className={['title5', className].join(' ').trim()}>{children}</span>
    case 6:
      if (semantic)
        return <h6 id={id !== undefined ? id : false} className={[className].join(' ').trim()}>{children}</h6>
      else
        return <span id={id !== undefined ? id : false} className={['title6', className].join(' ').trim()}>{children}</span>
    default:
      if (semantic)
        return <h1 id={id !== undefined ? id : false} className={[className].join(' ').trim()}>{children}</h1>
      else
        return <span id={id !== undefined ? id : false} className={['title1', className].join(' ').trim()}>{children}</span>
  }
}

const Text = ({ textStyle, id, className, children }) => {
  switch (textStyle) {
    case 'small':
      return <small
        id={id !== undefined ? id : false}
        className={[className].join(' ').trim()}>
        {children}
      </small>
    case 'bold':
      return <strong
        id={id !== undefined ? id : false}
        className={[className].join(' ').trim()}>
        {children}
      </strong>
    case 'italics':
      return <em
        id={id !== undefined ? id : false}
        className={[className].join(' ').trim()}>
        {children}
      </em>
    default:
      return <span
        id={id !== undefined ? id : false}
        className={[textStyle, className].join(' ').trim()}>
        {children}
      </span>
  }
}

export { Title, Text, Paragraph, Quote, Code, Kbd, Preformatted };