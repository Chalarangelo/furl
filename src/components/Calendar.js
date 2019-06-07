import React from 'react';
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS
} from '../utilities/calendarUtilities';
import useInterval from '../utilities/useInterval';
import useEffectOnUpdate from '../utilities/useEffectOnUpdate';
import Icon from './Icon';
import Button from './Button';
import { combineClassNames } from '../utilities/utils';

const Calendar = ({
  fill = 'flat',
  date,
  onDateChanged,
  className,
  ...rest
}) => {
  const resolveStateFromDate = (date) => {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();

    return {
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear()
    };
  };

  const getCalendarDates = () => {
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();

    return calendar(calendarMonth, calendarYear);
  };

  const renderDayLabel = (day, index) => {
    const dayLabel = WEEK_DAYS[day].toUpperCase();
    return (
      <div
        className='calendar-day'
        key={dayLabel}
        index={index}
        style={{
          gridColumn: `${(index % 7) + 1} / span 1`
        }}
      >
        {dayLabel}
      </div>
    );
  };

  const renderCalendarDate = (date, index) => {
    const _date = new Date(date.join('-'));
    const isToday = isSameDay(_date, today);
    const isCurrent = current && isSameDay(_date, current);
    const inMonth = month && year && isSameMonth(_date, new Date([year, month, 1].join('-')));

    return (
      // The highlighting below is unfinished, just a demo
      <div
        className={combineClassNames(['calendar-date', inMonth ? 'in-month' : '', isCurrent ? 'highlighted' : isToday ? 'today' : ''])}
        style={{
          gridRow: `${Math.floor(index / 7) + 2} / span 1`,
          gridColumn: `${(index % 7) + 1} / span 1`,
          borderBottom: `${((index + 1) / 7) <= 5 ? '1px solid var(--interface-gray-50)' : 'none'}`,
          borderRight: `${(index % 7) + 1 === 7 ? 'none' : '1px solid var(--interface-gray-50)'}`
        }}
        key={getDateISO(_date)}
        index={index}
        onClick={gotoDate(_date)}
        title={_date.toDateString()}
      >
        {_date.getDate()}
      </div>
    );
  };

  const handlePrevious = (e) => {
    e && e.preventDefault();
    let shiftKey = e.shiftKey;
    shiftKey ? gotoPreviousYear() : gotoPreviousMonth();
    setPressureTimeout(setTimeout(
      () => setIntervalFn(shiftKey ? 'prevYear' : 'prevMonth'),
      500));
  };

  const handleNext = (e) => {
    e && e.preventDefault();
    let shiftKey = e.shiftKey;
    shiftKey ? gotoNextYear() : gotoNextMonth();
    setPressureTimeout(setTimeout(
      () => setIntervalFn(shiftKey ? 'nextYear' : 'nextMonth'),
      500));
  };

  const gotoPreviousMonth = () => {
    let _new = getPreviousMonth(month, year);
    setMonth(_new.month);
    setYear(_new.year);
  };

  const gotoNextMonth = () => {
    let _new = getNextMonth(month, year);
    setMonth(_new.month);
    setYear(_new.year);
  };

  const gotoPreviousYear = () => {
    setYear(year - 1);
  };

  const gotoNextYear = () => {
    setYear(year + 1);
  };

  const gotoDate = date => evt => {
    evt && evt.preventDefault();
    if (!(current && isSameDay(date, current))) {
      let _new = resolveStateFromDate(date);
      setMonth(_new.month);
      setYear(_new.year);
      setCurrent(_new.current);
    }
  };

  const clearPressureTimer = () => {
    setIntervalFn(null);
    pressureTimeout && clearInterval(pressureTimeout);
    setPressureTimeout(null);
  };

  const [month, setMonth] = React.useState(resolveStateFromDate(date).month);
  const [current, setCurrent] = React.useState(resolveStateFromDate(date).current);
  const [year, setYear] = React.useState(resolveStateFromDate(date).year);
  const [today, setToday] = React.useState(new Date());
  const [intervalFn, setIntervalFn] = React.useState(null);
  const [pressureTimeout, setPressureTimeout] = React.useState(null);

  useInterval(() => {
    switch (intervalFn) {
      case 'nextMonth':
        gotoNextMonth();
        break;
      case 'prevMonth':
        gotoPreviousMonth();
        break;
      case 'nextYear':
        gotoNextYear();
        break;
      case 'prevYear':
        gotoPreviousYear();
        break;
      default:
    }
  }, 200);

  useEffectOnUpdate(() => {
    typeof onDateChanged === 'function' && onDateChanged(current);
  }, [current]);

  return (
    <div className={combineClassNames(['calendar-container', className, fill !== 'flat' ? fill : ''])} {...rest}>
      <div className='calendar-header'>
        <Button className='calendar-arrow-button'
          onMouseDown={handlePrevious}
          onMouseUp={clearPressureTimer}
          aria-label='Previous month'
        >
          <Icon name='chevron-left' />
        </Button>
        <div className='calendar-month'>
          {Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))]} {year}
        </div>
        <Button className='calendar-arrow-button'
          onMouseDown={handleNext}
          onMouseUp={clearPressureTimer}
          aria-label='Next month'
        >
          <Icon name='chevron-right' />
        </Button>
      </div>

      <div className='calendar-grid' role='group'>
        {Object.keys(WEEK_DAYS).map(renderDayLabel)}
        {getCalendarDates().map(renderCalendarDate)}
      </div>
    </div>
  );
};

export default Calendar;
