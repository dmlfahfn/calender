import React, {useState} from "react"

const TodoForm = ({addTodo, click}) => {
    console.log("addTodo", addTodo, "click", click);
    const [todo, setTodo] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (!todo && !click) return;
        addTodo(todo);
        setTodo("");
      };
    
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          todo={todo}
          onChange={e => setTodo(e.target.value)}
        />
      </form>
    );
};

export default TodoForm;