import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  background-color: #20232a;
  color: #61dafb;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 40px auto;
`;

const MonthTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`;

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); 
  gap: 10px;
  text-align: center;
`;

const Day = styled.div`
  padding: 10px;
  background-color: #333740;
  border-radius: 4px;
`;

const Event = styled.div`
  background-color: #4caf50;
  color: #ffffff;
  margin-top: 4px;
  padding: 2px;
  border-radius: 4px;
  font-size: 14px;
`;

function Calendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const events = {
    5: ['Team Meeting'],
    12: ['Project Deadline'],
    20: ['Review Session', 'Dinner with Team'],
    25: ['Workshop'],
  };

  return (
    <CalendarContainer>
      <MonthTitle>March 2024</MonthTitle>
      <DayGrid>
        {days.map((day) => (
          <Day key={day}>
            {day}
            {events[day] &&
              events[day].map((event, index) => (
                <Event key={index}>{event}</Event>
              ))}
          </Day>
        ))}
      </DayGrid>
    </CalendarContainer>
  );
}

export default Calendar;
