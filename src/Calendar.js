import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import ClickDate from "./ClickDate"

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date()) ;
  const [todos, setTodos] = useState([], () => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onChange = date => {
    setDate(date)
  };


  return (
    <div>
      <Calendar showWeekNumbers onChange={onChange} value={date} tileContent={({ date, view }) => todos.filter(todo => date.getDate() === todo.date.getDate() 
     && date.getMonth() === todo.date.getMonth()
     && date.getFullYear() === todo.date.getFullYear()).length ? <p>{todos.length}</p> : null}/>
      {date.toString()}     
      <ClickDate {...{date, todos, setTodos}} />
    </div>
  )
}

  
export default ReactCalendar;