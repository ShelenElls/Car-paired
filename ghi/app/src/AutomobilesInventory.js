// displays the vin, color, year, model, and manufacturer 

import React from 'react';

function ListAutomobiles(props) {
    console.log("propmodel", props)
    return (
        <div className="container-fluid">
            <h2>Automobiles</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {props.autos.map(automobile => {
                        {/* if (automobile.sold === false) { */}
                        return (
                            <tr key={automobile.id}>
                            <td>{ automobile.vin }</td>
                            <td>{ automobile.color }</td>
                            <td>{ automobile.year }</td>
                            <td>{ automobile.model.name }</td>
                            <td>{ automobile.model.manufacturer.name }</td>
                        </tr>
                        );
                    })};
                </tbody>
            </table>
        </div>
    );
}

export default ListAutomobiles;
