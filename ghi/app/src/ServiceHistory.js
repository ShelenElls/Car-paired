
import React, {useState, useEffect} from "react";

export default function ServiceHistory(props) {
    console.log({props})

    let [searched, setSearched] = useState("");
    // setSearched("this is a test");
    useEffect(() => {
    }, []) 

    // ✅
    // ❌
    // 👍
    
    function getStatusSymbol(status){
        switch(status){
            case "CANCELLED":
                return "❌";
            case "SCHEDULED":
                return "👍";
            case "COMPLETED":
                return "✅";
        }
    }

    return (
        <>
            <div className="container">
                <div className="row" style={{paddingTop: "20px", paddingBottom: "10px"}}>
                    <form id="form_search" name="form_search" method="get" action="" className="form-inline">
                        <div className="form-group">
                            <div className="input-group">
                                <input onChange={e=>setSearched(e.target.value)} className="form-control" placeholder="VIN Search" type="text" />
                            </div>
                        </div>
                    </form>
                </div>
                <h1>
                    Appointment History
                </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.history && 
                            props.history
                                .filter(apt=> apt.vinnew.includes(searched))
                                .map(apt => {
                            return (
                                <tr key={apt.id}>
                                    <td>{apt.vinnew}</td>
                                    <td>{apt.owner_name}</td>
                                    <td>{apt.date}</td>
                                    <td>{apt.time}</td>
                                    <td>{apt.technician.name}</td>
                                    <td>{apt.reason}</td>
                                    <td>{getStatusSymbol(apt.status.name)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

// needs handleChange event- and setting the value to a '';
// and setting the value for the form to this.state.value and this.handleChange

// search bar?? - text input area in its own form
// button -
// onsubmit - gets the input and DOES request with vin-
// pulls the appointments for the vin-
// show on page.

// url for this view/page http://localhost:8080/api/services/history/




// <div class="input-group input-group-lg">
//   <div class="input-group-prepend">
//   <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
// </div>
// <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
// </div>
//  just a search bar ^^

// a search bar with a button 
{/* <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div> */}