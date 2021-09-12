import React, {useState} from "react";


//Print todos
const Todo = ({todo, completeTodo, removeTodo}) => {
    const [savedTodo, setSavedTodo] = useState("")
    let localTodos = JSON.parse(localStorage.getItem("todos")) 
    return (
      <div     
      key={todo}
      >
        {todo.todo}
        <div>
          <button onClick={() => removeTodo(todo)}>Delete</button>
        </div>
      </div>
    )
};

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