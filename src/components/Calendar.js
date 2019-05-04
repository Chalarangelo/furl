import React from "react";
import { normalizeChildren } from "../utilities/utils";
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS
} from "../utilities/calendarUtilities";
import useInterval from "../utilities/useInterval";
import Icon from "./Icon";
import Button from "./Button";

let __pressureTimer, __pressureTimeout;

const Calendar = ({
  id,
  date,
  className
}) => {
  const resolveStateFromDate = (date) => {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();

    return {
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear()
    };
  }

  const getCalendarDates = () => {
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();

    return calendar(calendarMonth, calendarYear);
  };

  const renderDayLabel = (day, index) => {
    const dayLabel = WEEK_DAYS[day].toUpperCase();
    return (
      <div 
        className="calendar-day" 
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
    const _date = new Date(date.join("-"));
    const isToday = isSameDay(_date, today);
    const isCurrent = current && isSameDay(_date, current);
    const inMonth = month && year && isSameMonth(_date, new Date([year, month, 1].join("-")));

    return (
      // The highlighting below is unfinished, just a demo
      <div 
        className={["calendar-date", inMonth ? "in-month" : "", isToday ? "highlighted" : ""].join(' ').trim()} 
        style={{ 
          gridRow: `${Math.floor(index / 7) + 2} / span 1`,
          gridColumn: `${(index % 7) + 1} / span 1`,
          borderBottom: `${((index + 1) / 7) <= 5 ? '1px solid var(--interface-gray-50)' : 'none'}`,
          borderRight: `${(index % 7) + 1 === 7 ? 'none' : '1px solid var(--interface-gray-50)'}`
        }}
        key={getDateISO(_date)}
        index={index} title={_date.toDateString()}
      >
        {_date.getDate()}
      </div>
    );
  };

  const handlePrevious = (e) => {
    e && e.preventDefault();
    e.shiftKey ? gotoPreviousYear() : gotoPreviousMonth();
    setTimeout(
      () => setIntervalFn(e.shiftKey ? 'prevYear' : 'prevMonth'),
    500);
  }

  const handleNext = (e) => {
    e && e.preventDefault();
    e.shiftKey ? gotoNextYear() : gotoNextMonth();
    setTimeout(
      () => setIntervalFn(e.shiftKey ? 'nextYear' : 'nextMonth'),
    500);
  }

  const gotoPreviousMonth = () => {
    let _new = getPreviousMonth(month,year);
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

  const clearPressureTimer = () => {
    setIntervalFn(null);
  }

  const [month, setMonth] = React.useState(resolveStateFromDate(date).month);
  const [current, setCurrent] = React.useState(resolveStateFromDate(date).current);
  const [year, setYear] = React.useState(resolveStateFromDate(date).year);
  const [today, setToday] = React.useState(new Date());
  const [intervalFn, setIntervalFn] = React.useState(null);

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
      default:  return;
    }
  }, 200);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <Button className="calendar-arrow-button" 
          onMouseDown={handlePrevious}
          onMouseUp={clearPressureTimer}
        >
          <Icon name='chevron-left' />
        </Button>
        <div className="calendar-month">
          {Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))]} {year}
        </div>
        <Button className="calendar-arrow-button" 
          onMouseDown={handleNext}
          onMouseUp={clearPressureTimer}
        >
          <Icon name='chevron-right' />
        </Button>
      </div>

      <div className="calendar-grid">
        {Object.keys(WEEK_DAYS).map(renderDayLabel)}
        {getCalendarDates().map(renderCalendarDate)}
      </div>
    </div>
  );
}

export default Calendar;