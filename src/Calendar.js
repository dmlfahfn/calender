import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ClickDate from "./ClickDate"

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date()) ;

  const onChange = date => {
    setDate(date)
  };

  return (
    <div>
      <Calendar showWeekNumbers onChange={onChange} value={date}/>
      {date.toString()}     
      {ClickDate(date)}
    </div>
  )
}

  
export default ReactCalendar;