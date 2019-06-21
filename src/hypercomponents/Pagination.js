import React from 'react';
import { Pagination, Button, PaginationItem } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const PaginationHOC = (props) => {
  if (!hasKey(props, 'currentPage'))
    return (
      <Pagination {...props} />
    );

  return (
    <Pagination {...omitProps(props, [
      'currentPage', 'pageCount',
      'previousText', 'firstText', 'nextText', 'lastText',
      'onPrevious', 'onFirst', 'onNext', 'onLast'
    ])}>
      <Button onClick={props.onFirst}>{props.firstText}</Button>
      <Button onClick={props.onPrevious}>{props.previousText}</Button>
      <PaginationItem>{`${props.currentPage} of ${props.pageCount}`}</PaginationItem>
      <Button onClick={props.onNext}>{props.nextText}</Button>
      <Button onClick={props.onLast}>{props.lastText}</Button>
    </Pagination>
  );
};

export default PaginationHOC;
