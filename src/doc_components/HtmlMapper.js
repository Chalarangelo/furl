import React from 'react';
import ReactHtmlParser from 'html-react-parser';
import { 
  AnchorExamples, HyperlinkExamples, ImageExamples, VideoExamples, AudioExamples, AlertExamples, 
  AvatarExamples, BadgeExamples, DividerExamples, TooltipExamples, PopoverExamples, ButtonExamples,
  LoaderExamples, ProgressExamples, GraphExamples, CollapseExamples, CalendarExamples, ListExamples,
  IframeExamples, FooterExamples, SwitchExamples, SearchExamples, BreadcrumbExamples, StepExamples,
  IconExamples, ContextButtonExamples, ModalExamples, CardExamples, MediaObjectExamples,
  DropdownExamples, ItemExamples, MenuExamples, TypographyExamples, TableExamples, AccordionExamples,
  ButtonGroupExamples, TabExamples, NotificationExamples, PaginationExamples, GridExamples, 
  LayoutExamples, FormExamples, InputExamples
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
  'searchexamples': SearchExamples,
  'breadcrumbexamples': BreadcrumbExamples,
  'stepexamples': StepExamples,
  'iconexamples': IconExamples,
  'contextbuttonexamples': ContextButtonExamples,
  'modalexamples': ModalExamples,
  'cardexamples': CardExamples,
  'mediaobjectexamples': MediaObjectExamples,
  'dropdownexamples': DropdownExamples,
  'itemexamples': ItemExamples,
  'menuexamples': MenuExamples,
  'typographyexamples': TypographyExamples,
  'tableexamples': TableExamples,
  'accordionexamples': AccordionExamples,
  'buttongroupexamples': ButtonGroupExamples,
  'tabexamples': TabExamples,
  'notificationexamples': NotificationExamples,
  'paginationexamples': PaginationExamples,
  'gridexamples': GridExamples,
  'layoutexamples': LayoutExamples,
  'formexamples': FormExamples,
  'inputexamples': InputExamples
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