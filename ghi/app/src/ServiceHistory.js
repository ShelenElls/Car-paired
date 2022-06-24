
import React, {useState, useEffect} from "react";

export default function ServiceHistory(props) {
    console.log({props})

    let [searched, setSearched] = useState("");
    useEffect(() => {
    }, []) 


    
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
                                    <td className="text-center">{getStatusSymbol(apt.status.name)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

