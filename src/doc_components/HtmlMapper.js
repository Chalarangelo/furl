import React from 'react';
import ReactHtmlParser from 'html-react-parser';
import { 
  AnchorExamples, HyperlinkExamples, ImageExamples, VideoExamples, AudioExamples, AlertExamples, 
  AvatarExamples, BadgeExamples, DividerExamples, TooltipExamples, PopoverExamples, ButtonExamples,
  LoaderExamples, ProgressExamples, GraphExamples, CollapseExamples, CalendarExamples, ListExamples,
  IframeExamples, FooterExamples, SwitchExamples, SearchExamples
} from '../doc_examples';

const tagMappings = {
  'anchorexamples': AnchorExamples,
  'hyperlinkexamples': HyperlinkExamples,
  'imageexamples': ImageExamples,
  'videoexamples': VideoExamples,
  'audioexamples': AudioExamples,
  'alertexamples': AlertExamples,
  'avatarexamples': AvatarExamples,
  'badgeexamples': BadgeExamples,
  'dividerexamples': DividerExamples,
  'tooltipexamples': TooltipExamples,
  'popoverexamples': PopoverExamples,
  'buttonexamples': ButtonExamples,
  'loaderexamples': LoaderExamples,
  'progressexamples': ProgressExamples,
  'graphexamples': GraphExamples,
  'collapseexamples': CollapseExamples,
  'calendarexamples': CalendarExamples,
  'listexamples': ListExamples,
  'iframeexamples': IframeExamples,
  'footerexamples': FooterExamples,
  'switchexamples': SwitchExamples,
  'searchexamples': SearchExamples
};

const transformer = ({ type, name, children, attribs, next, prev, parent, data }, index) => {    
  if (type === 'tag' && name === 'p' && children.length === 1 && children[0].name && children[0].name.indexOf('example') !== -1) 
    return (
      <>
        {children.map(transformer)}
      </>
    );
  if (type === 'tag') {
    if (!tagMappings[name])
      return undefined;

    const TagName = tagMappings[name];
    return (
      <TagName {...attribs}>
        {children.map(transformer)}
      </TagName>
    );
  }
  return data;
}

const HtmlMapper = ({ html }) => ReactHtmlParser(html, { replace: transformer });

export default HtmlMapper;