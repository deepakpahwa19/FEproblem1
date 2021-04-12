import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const CalendarView = ({ month, monthName }) => {
    const [today, setTodayDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            if (today !== new Date()) setTodayDate(new Date());
        }, 1000);
    }, []);

    return (
        <CalendarStyle>
            <Header>
                <h4>April 2021</h4>
                <div>icons</div>
            </Header>
            <div>
                <Table>
                    <Thead>
                        <TR>
                            <TD>S</TD>
                            <TD>M</TD>
                            <TD>T</TD>
                            <TD>W</TD>
                            <TD>T</TD>
                            <TD>F</TD>
                            <TD>S</TD>
                        </TR>
                    </Thead>
                    <tbody>
                        {month.map(week => (
                            <TR>
                                {week.map(date => (
                                    <TD currentDay={today.getDate() === date}>{date}</TD> //
                                ))}
                            </TR>
                        ))}
                    </tbody>
                </Table>
            </div>
        </CalendarStyle>
    );
};

const CalendarStyle = styled.div`
    width: 400px;
    height: 400px;
    background-color: #e9ece2;
    border: 1px solid grey;
    margin: 10px auto;
    padding: 20px;
`;

const Header = styled.div`
    height: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Table = styled.table`
    width: 100%;
`;

const Thead = styled.thead``;

const TR = styled.tr`
    width: 100%;
    display: flex;
    margin: 10px 0 20px;
    justify-content: space-between;
`;

const TD = styled.td`
    width: 55px;
    background-color=${props => (props.currentDay ? 'red' : '')}
`;
