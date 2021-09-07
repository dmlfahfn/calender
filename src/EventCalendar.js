import ReactCalendar from "./Calendar";

const EventCalendar = (date) => {
    
 console.log(date);
 const handleSubmit = (e) => {
    e.preventDefault();
     console.log("submithandler");
 }
 
 
 return (
     <form onSubmit={handleSubmit}>
         <input type="text" />
         <button type="submit">Save</button>
     </form>
 )
};

export default EventCalendar;