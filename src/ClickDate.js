import React from "react";
import ShowTodo from "./ShowTodo";
import TodoForm from "./TodoForm";

const ClickDate = (props) => {  

  const {date, todos, setTodos} = props;

  const filtered = todos.filter(todo => todo.date == date)
 
  const completeTodo = todo => {
    const newTodos = todos.filter(t => t != todo);
    todo.isCompleted = true;
    setTodos([...newTodos, todo])
  };

 return (

    <div>
      {filtered.map(todo => <ShowTodo {...{todo, completeTodo}}/>)}
      <TodoForm {...{date, setTodos, todos}} />
    </div>

 )
};

export default ClickDate;