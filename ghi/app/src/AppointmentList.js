import React from "react";
import { Link } from 'react-router-dom';

function AppointmentRow(props){
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
          <tbody>
            {props.service.map(data => {
                const appointment = data.services;
                return (
                  <tr key={appointment.id} className="table">
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.vin}</td>
                    <td>{appointment.customer_name}</td>
                    <td>{appointment.technician}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.status}</td>
                  </tr>
                  
                );
              })}
          </tbody>
      </table>
    );
}
class AppointmentList extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      AppointmentRow 
    };
  }
  

}
export default AppointmentList;

// list of scheduled appointments; details collected in form; 
// if vin was in inventory; then it was purchased from dealership;
// show VIP client -; needs to have the ability to cancel button and ability to complete button
