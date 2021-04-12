import { useEffect, useState } from 'react';

export const useCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState([]);

    useEffect(() => {
        const date = new Date();
        const month = date.getMonth(),
            year = date.getFullYear();
        const currentDate = new Date(year, month, 1);
        // currentDate.getDay();
        let counter = 0;
        let week = new Array(7).fill('');
        let monthArray = [];
        while (currentDate.getMonth() === month) {
            if (counter < 7) {
                week[currentDate.getDay()] = currentDate.getDate();
                counter++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
            if (!!week[6] || currentDate.getMonth() !== month) {
                console.log(week);
                monthArray.push(week);
                counter = 0;
                week = new Array(7).fill(null);
            }
        }
        setCurrentMonth(monthArray);
    }, []);

    return [currentMonth, incrMonth, DecreMonth];
};

/**  [

    [''','',3],
    [],
    [],
    [],


] */
