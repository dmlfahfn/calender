import React, { useState } from "react";
import TodoForm from "./TodoForm";


//Print todos
const Todo = ({todo, index, completeTodo}) => {
    return (
      <div      
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
        </div>
        {todo.input}
      </div>
    )
};

//Parent component for all other components
const ShowTodo = ({click}) => {

    const [todos, setTodos] = useState([
        {input: "value 1", date: click, isDone: false},
        {input: "value 2", date: click, isDone: false},
        {input: "value 3", date: click, isDone: false}
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos)
    };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };


    return (
        <div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        </div>
    )
    
}

export default ShowTodo;