import React, { useState } from "react";
import ChildEvent from "./ChildEvent";

const EventCalendar = (props) => {  

  const [click, setClick] = useState(props);
  //console.log("click", click + "--- props", props);
 
 return (

    <div>

        <ChildEvent click={props} setClick={setClick} />

    </div>

 )
};

export default EventCalendar;