import React from "react";


//Print todos
const Todo = ({todo, completeTodo, removeTodo}) => {

    return (
      <div     
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      key={todo}
      >
        {todo.todo}
        {!todo.isCompleted && (
        <div>
          <button onClick={() => completeTodo(todo)}>Complete</button>
          <button onClick={() => removeTodo(todo)}>Delete</button>
        </div>
        )}
      </div>
    )
};

//Parent component for all other components
const ShowTodo = ({todo, completeTodo, removeTodo}) => {

    return (
        <div>
          <Todo
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
          
        </div>
    )
    
}

export default ShowTodo;