import React from "react";


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
                  <td>{JSON.stringify(apt.vip)}</td>
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


