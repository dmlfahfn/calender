import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment-timezone';

class Calender extends React.Component {

    render() {

        let value = moment();
        let startDay = value.clone().startOf("month");

      return (
        <div>{startDay.format("MM/DD/YY")}</div>
      )
    }
  };
  
  export default Calender;