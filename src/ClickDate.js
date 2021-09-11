import React, { useState, useEffect } from "react";
import ShowTodo from "./ShowTodo";
import TodoForm from "./ShowTodo";

const ClickDate = (props) => {  

  const [click, setClick] = useState(props);
  //console.log("click", click + "--- props", props);

  useEffect(() => {

  }, [props])
 
 return (

    <div>
      <ShowTodo click={props} />
      <TodoForm click={props} />
    </div>

 )
};

export default ClickDate;