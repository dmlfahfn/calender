import React, { useState } from "react";


//Print todos
const Todo = ({todo, index, completeTodo}) => {
    return (
      <div      
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.todo}
        {!todo.isCompleted && (
        <div>
          <button onClick={() => completeTodo(todo)}>Complete</button>
        </div>
        )}
      </div>
    )
};

//Parent component for all other components
const ShowTodo = ({todo, completeTodo}) => {
    return (
        <div>
          <Todo
            todo={todo}
            completeTodo={completeTodo}
          />
          
        </div>
    )
    
}

export default ShowTodo;