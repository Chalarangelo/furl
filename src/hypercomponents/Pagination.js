import React from 'react';
import { Pagination, Button, PaginationItem } from '../components';
import { isUndefined } from '../utilities/utils';

const PaginationHOC = ({
  currentPage,
  pageCount,
  firstText='First',
  previousText = 'Previous',
  nextText = 'Next',
  lastText = 'Last',
  onPrevious,
  onFirst,
  onNext,
  onLast,
  ...rest
}) =>
  isUndefined(currentPage) ?
    (<Pagination {...rest} />) :
    (
      <Pagination {...rest}>
        <Button onClick={onFirst}>{firstText}</Button>
        <Button onClick={onPrevious}>{previousText}</Button>
        <PaginationItem>{`${currentPage} of ${pageCount}`}</PaginationItem>
        <Button onClick={onNext}>{nextText}</Button>
        <Button onClick={onLast}>{lastText}</Button>
      </Pagination>
    );

export default PaginationHOC;
