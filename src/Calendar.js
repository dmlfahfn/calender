import React, { useState } from 'react';
import Calendar from 'react-calendar';
import EventCalendar from "./EventCalendar"

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date()) ;

  const onChange = date => {
    setDate(date)
  };

  return (
    <div>
      <Calendar showWeekNumbers onChange={onChange} value={date}/>
      {console.log(date)}
      {date.toString()}
      {EventCalendar(date)}
    </div>
  )
}

  
export default ReactCalendar;