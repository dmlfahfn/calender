import React, { useEffect, useState } from "react";


const ChildEvent = ({click, setClick}) => {
    
    useEffect(() => {
        //setClick(alert("input done"))
        

      }, [click])

    const [formValues, setFormValues] = useState([{ todo: "", click : ""}])

    return (
        <form>
            <input type="text" />
            <button type="submit">Save</button>
        </form> 
    )
}

export default ChildEvent;