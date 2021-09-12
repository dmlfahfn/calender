import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import ClickDate from "./ClickDate";

const ReactCalendar = () => {

  const [date, setDate] = useState() ;
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let localTodos = JSON.parse(localStorage.getItem("todos"))
    if(localTodos) {
      setTodos(localTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onChange = date => {
    setDate(date.getTime())
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date && new Date(date)} tileContent = {({date}) => {
        const time = date && date.getTime()
        const filtered = todos.filter(todo => todo.date == time) 
            return filtered.length ? <p>Todos: {filtered.length}</p> : null
            } 
          } 
      />
      {date && (<React.Fragment>
        {(new Date(date)).toString()}     
        <ClickDate {...{date, todos, setTodos}} />
      </React.Fragment>)}
      <div>
        {todos.map((t) => {
          return  <li>Your Todo List: {t.todo}</li>
        })}
      </div>
    </div>
  )
}
 
export default ReactCalendar;