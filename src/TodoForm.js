import React, {useState} from "react"

const TodoForm = (props) => {
    const {setTodos, date, todos = []} = props;
    const [todo, setTodo] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        debugger;
        if (!todo) return;
        setTodos([...todos, {todo, date}]);
        setTodo("");
      };
    
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value= {todo}
          onChange={e => setTodo(e.target.value)}
        />
      </form>
    );
};

export default TodoForm;