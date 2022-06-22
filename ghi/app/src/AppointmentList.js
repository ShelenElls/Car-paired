import React from "react";
import { Link } from 'react-router-dom';
// boolean in the model - finished set to false; 
// in view- in detail for put- and set a cancel button
// set a finished button - default is false, put changes to true on api_service
// is the vin in the database- yes == VIP (add star)
  // status unfinished/finished/cancelled  


function AppointmentList(props) {

  const finished = async (event) => {
    console.log(event.currentTarget.id)
    const idvalue = event.currentTarget.id;
    const url = `http://localhost:8080/api/services/finished/${idvalue}/`
    const fetchConfig = {
      method: "put",
      headers: {"Content-Type": "application/json"}
    }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      console.log({"second": "completed appointment"})
    } else {
      console.log({"third": "you failed"})
    }
  }


  const cancel = async (event) => {
    console.log(event.currentTarget.id)
    const idvalue = event.currentTarget.id;
    const url = `http://localhost:8080/api/services/reject/${idvalue}/`
    const fetchConfig = {
      method: "put",
      headers: {"Content-Type": "application/json"}
    }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      console.log({"second": "cancelled appointment"})
    } else {
      console.log({"third": "you failed"})
    }
  } 

  return (
    <>
      <div className="container">
        <h1>
          List of Appointments
        </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>VIN</th>
              <th>Customer Name</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>VIP Status</th>
              <th>Cancel Apt</th>
              <th>Complete Apt</th>
            </tr>
          </thead>
          <tbody>
            {props.service.map((apt, key) => {
              return(
                <tr key={apt.id}>
                  <td>{ apt.date }</td>
                  <td>{ apt.time }</td>
                  <td>{ apt.vinnew }</td>
                  <td>{ apt.owner_name }</td>
                  <td>{ apt.technician.name }</td>
                  <td>{ apt.reason }</td>
                  <td>{ apt.vip }</td>
                  <td><button onClick={cancel} id={apt.id} key={apt.id}>Cancel</button></td>
                  <td><button onClick={finished} id={apt.id} key={apt.id}>Complete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default AppointmentList;

// cancel is an event- 
// <button onClick={cancel}>Cancel</button>
// 
// above return statement- make a function that makes a put request WITH URL 
// key appointment.vin or appointment.id- store the value into a variable; 
// `${name of the parameter}`

// method: "delete" - like handle submit ??

// onClickhandler : cancel - finish




// list of scheduled appointments; details collected in form; 
// if vin was in inventory; then it was purchased from dealership;
// show VIP client -; needs to have the ability to cancel button and ability to complete button
// <div className="row">
// {this.state.appointmentRow.map((list, index) => {
//   return (
//     <AppointmentRow key={index} list={list} />
//   );
// })}
// </div>
// 
// this.cancel = remove from list 
// this.finished = stays in appointment history- is removed from list. 


// <table className="table table-striped">
{/* <thead>
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
      const appointment = data.service;
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
); . */}
{/* {this.state.service.map(appointment => {
                return (
                  <tr key={appointment.id} className="table">
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.vin}</td>
                    <td>{appointment.customer_name}</td>
                    <td>{appointment.technician}</td>
                    <td>{appointment.reason}</td>
                    {/* <button onClick={() => this.cancel(appointment.id)}>cancel</button>
                    <button onClick={() => this.complete(appointment.id)}>finished</button> */}
{/* </tr>
                  
              //   );
              // })} */}