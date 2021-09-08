import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const EventCalendar = (date) => {  
 
 const [todoInput, setTodoInput] = useState("");

 let mouseUp = () => {
    document.addEventListener('mouseup', (e) => {
        console.log(date);
    });
    return () => {
        document.removeEventListener('mouseup', (e) => {
            console.log("remove click");
        });
    }
};
useEffect(mouseUp, [ todoInput ]);
 
 return (

    <div  
        addEvent={setTodoInput}> 
    </div>
    //  <form onSubmit={handleSubmit}>
    //      <input type="text" />
    //      <button type="submit">Save</button>
    //  </form>
 )
};

export default EventCalendar;