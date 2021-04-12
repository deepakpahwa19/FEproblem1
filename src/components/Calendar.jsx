import React from 'react';
import { useCalendar } from '../customHooks/useCalendar';
import { CalendarView } from '../views/CalendarView';

export const Calendar = () => {
    const [month, inCremonth, Decreemonth] = useCalendar();

    // const date = new Date();
    // const month = date.getMonth(),
    //     year = date.getFullYear();
    // const currentDate = new Date(year, month, 1);
    return <CalendarView month={month}></CalendarView>;
};
